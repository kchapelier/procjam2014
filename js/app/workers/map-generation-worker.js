"use strict";

importScripts(
    '../../vendors/noisejs/perlin.js',
    '../../vendors/seedrandom/seedrandom-2.3.10.min.js',
    '../../vendors/mathp/mathp-1.1.1.js', //TODO remove this dep
    '../lib/map2d.js',


    '../lib/weightedmarkovchain.js',
    '../lib/wmc-japanese-places-names.js',
    '../lib/wmc-japanese-islands-names.js'
);

self.addEventListener('message', function (e) {
    var seed = e.data.seed,
        width = e.data.width,
        height = e.data.height,
        seaLevel = e.data.seaLevel;

    noise.seed(seed);
    Math.seedrandom(seed, {
        global: true // replace Math.random globally (in the worker)
    });

    //TODO use erosion simulation to get more grainy details in the continents
    //TODO lake / rivers

    var heightPropensityMap = getHeightPropensityMap(width, height),
        altHeightPropensityMap = getAltHeightPropensityMap(width, height),
        heightMap = getHeightMap(width, height, heightPropensityMap, altHeightPropensityMap),
        continentMap = getContinentMap(heightMap, seaLevel),
        preprocessedZones = differentiateContinents(continentMap),
        zones = postProcessZones(continentMap, heightMap, preprocessedZones);

    addCitiesToZones(heightMap, zones);

    self.postMessage({
        params: {
            seed: seed,
            width: width,
            height: height
        },
        heightMap: heightMap.values,
        continentMap: continentMap.values,
        zones: {
            continents: zones.continents.map(function (e) {
                e.map = e.map.values;
                return e;
            }),
            islands: zones.islands.map(function (e) {
                e.map = e.map.values;
                return e;
            })
        }
    });
});

/**
 * Intermediary layer to use when building the final heightmap.
 * @param width
 * @param height
 * @returns {Map2D}
 */
var getHeightPropensityMap = function (width, height) {
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

        // soften with large scale perlin cloud

        var v = Math.min(
            noise.perlin3(x / 300 + dx * 1.3, y / 300 + dy, 50),
            noise.perlin3(x / 300 + dx, y / 300 + dy * 1.3, 50.30)
        );

        var increment = Math.pow(1 - Math.sqrt(Math.abs(v)), 3);

        return Math.max(0, Math.min(1, (base * increment) * 2));
    });

    console.timeEnd('getHeightPropensityMap');

    return map;
};

var getAltHeightPropensityMap = function (width, height) {
    console.time('getAltHeightPropensityMap');

    var map = new Map2D(width, height, Float32Array);

    map.map(function (value, x, y) {
        // distortion
        var dx = noise.perlin2(400 + x / 50, 400 + y / 50) / 40 + noise.simplex2(400 + x / 25, 400 + y / 25) / 60 + noise.simplex2(400 + x / 10, 400 + y / 10) / 130;
        var dy = noise.perlin2(4000 + x / 50, 4000 + y / 50) / 40 + noise.simplex2(4000 + x / 25, 4000 + y / 25) / 60 + noise.simplex2(4000 + x / 10, 4000 + y / 10) / 130;

        var base = Math.abs(Math.pow(0.2, Math.max(-1, Math.min(
            noise.perlin3(x / 200 + dx, y / 200 + dy, 50),
            noise.perlin3(x / 450, y / 450, 55)
        ))));

        base += Math.abs(Math.min(1, Math.max(-1, Math.min(
            noise.perlin3(x / 400 + dx, y / 400 + dy, 10),
            noise.perlin3(x / 250, y / 250, 15)
        ))));

        var v = Math.min(
            noise.perlin3(x / 300 + dx * 1.3, y / 300 + dy, 50),
            noise.perlin3(x / 300 + dx, y / 300 + dy * 1.3, 50.30)
        );

        var increment = Math.pow(1 - Math.sqrt(Math.abs(v)), 3);

        return Math.max(0, Math.min(1, (base * increment) * 2));
    });

    console.timeEnd('getAltHeightPropensityMap');

    return map;
};

var getHeightMap = function (width, height, propensityMap, abyssMap) {
    console.time('getHeightMap');

    var map = new Map2D(width, height, Uint8ClampedArray);

    map.map(function (value, x, y) {
        var propensity = propensityMap.get(x, y),
            abyss = abyssMap.get(x, y);

        value = Math.abs(noise.perlin3(x / 1200, y / 1200, 300 + propensity * 0.4 + abyss * 0.2)) * (32 + propensity * 32) +
        noise.simplex2(x / 600, y / 600) * (16 + propensity * 16) +
        noise.perlin2(x / 300, y / 300) * (8 + propensity * 8) +
        noise.perlin2(x / 150, y / 150) * (4 + propensity * 4) +
        noise.perlin2(x / 75, y / 75) * (2 + propensity * 2) +
        noise.simplex2(x / 75, y / 75) +
        noise.perlin2(x / 35, y / 35) +
        noise.perlin2(x / 17, y / 17) * (1 + propensity * propensity * propensity) +
        noise.perlin2(x / 8, y / 8) * 0.5 +
        noise.perlin2(x / 4, y / 4) * 0.2 + propensity;

        value = Math.max(0, Math.min(1, (value + 31) / 100));

        value = Mathp.wshaper(value - (abyss * Math.pow(0.5 - value / 2, 2)), 0, 1, [Math.max(0, value - abyss * 4), 0.5, 1]);

        return value * 255;
    });

    console.timeEnd('getHeightMap');

    return map;
};

var getContinentMap = function (heightMap, seaLevel) {
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

var differentiateContinents = function (continentMap) {
    console.time('differentiateContinents');

    //too big and not ideal
    //alter the continent map and is limited to ~253 earth bodies
    //could instead return a map per zone ?

    var preprocessedZones = [];

    var newValue = 255;

    continentMap.map(function (value, x, y) {
        if (value === 255) {
            var map = new Map2D(continentMap.width, continentMap.height, Uint8Array);

            var count = 0,
                points = [[x, y, value]];

            newValue = newValue - 1;
            value = newValue;

            var zone = {
                start: {
                    x: x,
                    y: y
                },
                value: value,
                name: ''
            };

            while (points.length > 0) {
                count++;
                var point = points.pop();

                continentMap.set(point[0], point[1], value);
                map.set(point[0], point[1], 255);

                var left = [point[0] - 1, point[1], continentMap.get(point[0] - 1, point[1])],
                    right = [point[0] + 1, point[1], continentMap.get(point[0] + 1, point[1])],
                    up = [point[0], point[1] - 1, continentMap.get(point[0], point[1] - 1)],
                    down = [point[0], point[1] + 1, continentMap.get(point[0], point[1] + 1)];

                [left, right, up, down].forEach(function (adjPoint) {
                    if (adjPoint[2] === 255) {
                        points.push(adjPoint);
                    }
                });
            }

            zone.size = count;
            zone.map = map;

            preprocessedZones.push(zone);
        }

        return value;
    });

    console.timeEnd('differentiateContinents');

    return preprocessedZones;
};

var postProcessZones = function (continentMap, heightMap, preprocessedZones) {
    console.time('postProcessZones');

    var zones = {
        continents: [],
        islands: []
    };

    preprocessedZones.forEach(function (zone) {
        if (zone.size > 12000) {
            zones.continents.push(zone);
            zone.type = 'continent';
            zone.name = japanesePlacesNames.get();
        } else if (zone.size > 6) {
            zones.islands.push(zone);
            zone.type = 'island';
            zone.name = japaneseIslandsNames.get();
        } else {
            continentMap.map(function (value, x, y) {
                if (value === zone.value) {
                    //remove from the continent map
                    value = 0;
                    //remove from the height map
                    heightMap.set(x, y, heightMap.get(x, y) * 0.85);
                }

                return value;
            });
        }
    });

    console.timeEnd('postProcessZones');

    return zones;
};

var getCitiesFromMap = function(map, probability, heightMap) {
    var cities = [];

    map.map(function(value, x, y) {
        if(value && Math.random() < probability) {
            cities.push({
                name: japanesePlacesNames.get(),
                x: x,
                y: y
            });
        }

        return value;;
    });

    return cities;
};

var addCitiesToZones = function (heightMap, zones) {
    zones.continents.forEach(function (continent) {
        var nbCitiesEstimated = Math.ceil(Math.pow(continent.size / 2200, 1.05)),
            probability = nbCitiesEstimated / continent.size;

        continent.cities = getCitiesFromMap(continent.map, probability, heightMap);
    });

    zones.islands.forEach(function (islands) {
        var nbCitiesEstimated = Math.ceil(islands.size / 1700),
            probability = nbCitiesEstimated / islands.size;

        islands.cities = getCitiesFromMap(islands.map, probability, heightMap);
    });
};



/*
var getErodedMap = function (heightMap) {
    //TODO get a false erosion simulator that works
    //traditional droplets algorithm are way too expensive and doesn't seem to work well with grid based terrain

    console.time('getErodedMap');

    var map = Map2D.clone(heightMap);

    for (var i = 0; i < 1; i++) {
        map.map(function (value, x, y) {
            var mult = 1;
            var mult2 = 1;

            var v = value / 255;
            var left = heightMap.get(x - 1, y) / 255;
            var right = heightMap.get(x + 1, y) / 255;
            var up = heightMap.get(x, y - 1) / 255;
            var down = heightMap.get(x, y + 1) / 255;
            var score = 0;

            if (left > v) {
                v += (left - v) * mult;
                score++;
            }

            if (right > v) {
                v += (right - v) * mult;
                score++;
            }

            if (up > v) {
                v += (up - v) * mult;
                score++;
            }

            if (down > v) {
                v += (down - v) * mult;
                score++;
            }

            if (score > 1) {
                value = (
                    value * (8 - score / 2) +
                    Math.min(1, Math.max(0, v) * 255 * score / 2)
                ) / 8;
            }

            return value;
        });
    }

    console.timeEnd('getErodedMap');

    return map;
};
 */
