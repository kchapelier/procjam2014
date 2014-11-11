/**
 * Intermediary layer to use when building the final heightmap.
 * @param width
 * @param height
 * @returns {Map2D}
 */
var getHeightPropensityMap = function(width, height) {
    "use strict";

    console.time('getHeightPropensityMap');

    var map = new Map2D(width, height);

    map.map(function (value, x, y) {
        // distortion
        var dx = noise.perlin2(400 + x / 50, 400 + y / 50) / 40 + noise.simplex2(400 + x / 25, 400 + y / 25) / 50 + noise.simplex2(400 + x / 10, 400 + y / 10) / 100;
        var dy = noise.perlin2(4000 + x / 50, 4000 + y / 50) / 40 + noise.simplex2(4000 + x / 25, 4000 + y / 25) / 50 + noise.simplex2(4000 + x / 10, 4000 + y / 10) / 100;

        var base = Math.abs(Math.min(1, Math.max(-1, Math.min(
            noise.perlin3(x / 400 + dx, y / 400 + dy, 10),
            noise.perlin3(x / 400 + dx, y / 400 + dy, 15)
        ))));

        var v = Math.min(
            noise.perlin3(x / 300 + dx * 1.3, y / 300 + dy, 50),
            noise.perlin3(x / 300 + dx, y / 300 + dy * 1.3, 50.25)
        );

        var increment = Math.pow(1 - Math.sqrt(Math.abs(v)), 3);

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
        var value = Math.abs(noise.perlin3(x / 1200, y / 1200, 300)) * 32 +
                    noise.simplex2(x / 600, y / 600) * 16 +
                    noise.perlin2(x / 300, y / 300) * 8 +
                    noise.perlin2(x / 150, y / 150) * 4 +
                    noise.perlin2(x / 75, y / 75) * 2 +
                    noise.simplex2(x / 75, y / 75) +
                    noise.perlin2(x / 35, y / 35) +
                    noise.perlin2(x / 17, y / 17) +
                    noise.perlin2(x / 8, y / 8);

        return Math.max(0, Math.min(1, (value + 31) / 70))  * 255;
    });

    console.timeEnd('getHeightMap');

    return map;

};
