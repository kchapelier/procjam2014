/**
 * Intermediary layer to use when building the final heightmap.
 * @param width
 * @param height
 * @returns {Map2D}
 */
var getHeightPropensityMap = function (width, height) {
    "use strict";

    console.time('getHeightPropensityMap');

    var map = new Map2D(width, height, Float32Array);

    map.map(function (value, x, y) {
        // distortion
        var dx = noise.perlin2(400 + x / 50, 400 + y / 50) / 40 + noise.simplex2(400 + x / 25, 400 + y / 25) / 60 + noise.simplex2(400 + x / 10, 400 + y / 10) / 130;
        var dy = noise.perlin2(4000 + x / 50, 4000 + y / 50) / 40 + noise.simplex2(4000 + x / 25, 4000 + y / 25) / 60 + noise.simplex2(4000 + x / 10, 4000 + y / 10) / 130;

        var base = Math.abs(Math.min(1, Math.max(-1, Math.min(
            noise.perlin3(x / 400 + dx, y / 400 + dy, 10),
            noise.perlin3(x / 250, y / 250, 15)
        ))));

        var v = Math.min(
            noise.perlin3(x / 300 + dx * 1.3, y / 300 + dy, 50),
            noise.perlin3(x / 300 + dx, y / 300 + dy * 1.3, 50.30)
        );

        var increment = Math.pow(1 - Math.sqrt(Math.abs(v)), 3);

        //increment = isNaN(increment) ? 0 : increment;

        return Math.max(0, Math.min(1, (base * increment) * 2));
    });

    console.timeEnd('getHeightPropensityMap');

    return map;
};

var getHeightMap = function (width, height, propensityMap) {
    "use strict";

    console.time('getHeightMap');

    var map = new Map2D(width, height);

    map.map(function (value, x, y) {
        var propensity = propensityMap.get(x, y);

        var value = Math.abs(noise.perlin3(x / 1200, y / 1200, 300 + propensity * 0.5)) * (32 + propensity * 32) +
            noise.simplex2(x / 600, y / 600) * (16 + propensity * 16) +
            noise.perlin2(x / 300, y / 300) * (8 + propensity * 8) +
            noise.perlin2(x / 150, y / 150) * (4 + propensity * 4) +
            noise.perlin2(x / 75, y / 75) * (2 + propensity * 2) +
            noise.simplex2(x / 75, y / 75) +
            noise.perlin2(x / 35, y / 35) +
            noise.perlin2(x / 17, y / 17) * (1 + propensity * propensity * propensity) +
            noise.perlin2(x / 8, y / 8) * 0.5 +
            noise.perlin2(x / 4, y / 4) * 0.2 + propensity;

        return Math.max(0, Math.min(1, (value + 31) / 100)) * 255;
    });

    console.timeEnd('getHeightMap');

    return map;
};

var getContinentMap = function (heightMap) {
    "use strict";

    console.time('getContinentMap');

    var map = Map2D.clone(heightMap);

    var average = map.reduce(function (a, b) {
        return a + b;
    }) / (map.width * map.height) * 1.25;

    map.map(function (value, x, y) {
        return value > average ? 255 : 0;
    });

    console.timeEnd('getContinentMap');

    return map;
};

var getErodedMap = function (heightMap) {
    "use strict";

    //TODO get a false erosion simulator that works
    //traditional droplets algorithm are way too expensive and doesn't seem to work well with grid based terrain

    console.time('getErodedMap');

    var map = Map2D.clone(heightMap);

    for (var i = 0; i < 1; i++) {
        map.map(function (value, x, y) {
            var left = heightMap.get(x - 1, y);
            var right = heightMap.get(x + 1, y);
            var up = heightMap.get(x, y - 1);
            var down = heightMap.get(x, y + 1);
            var v = value;

            if (left > value) {
                v -= Math.sqrt(left - value) / 2;
            }

            if (right > value) {
                v -= Math.sqrt(right - value) / 2;
            }

            if (up > value) {
                v -= Math.sqrt(up - value) / 2;
            }

            if (down > value) {
                v -= Math.sqrt(down - value) / 2;
            }

            return v;
        });
    }

    console.timeEnd('getErodedMap');

    return map;
};
