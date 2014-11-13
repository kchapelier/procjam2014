/**
 * Naive implementation of a fast 2 dimensional array with a wrapped typed array.
 * http://jsperf.com/normal-2d-array-vs-wrapped-typedarray/2
 */
var Map2D = (function () {
    "use strict";

    var Map2D = function (width, height, type) {
        this.width = width;
        this.height = height;
        this.type = type || Uint8Array;
        this.values = new this.type(width * height);
    };

    Map2D.prototype.getIndex = function (x, y) {
        if (x < 0 || y < 0 || x > this.width - 1 || y > this.height - 1) {
            return NaN;
        }

        return y * this.width + x;
    };

    Map2D.prototype.get = function (x, y) {
        var index = this.getIndex(x, y);

        if (isNaN(index)) {
            return index;
        } else {
            return this.values[index];
        }
    };

    Map2D.prototype.set = function (x, y, value) {
        this.values[this.getIndex(x, y)] = value;

        return this;
    };

    Map2D.prototype.rect = function (x, y, width, height, value) {
        for (var iy = 0; iy < height; iy++) {
            for (var ix = 0; ix < width; ix++) {
                var v = typeof value === 'function' ? value(ix, iy, width, height) : value;

                if (v !== null) {
                    this.set(x + ix, y + iy, v);
                }
            }
        }

        return this;
    };

    Map2D.prototype.circ = function (x, y, radius, value) {
        this.rect(x, y, radius * 2, radius * 2, function (ix, iy, width, height) {
            var hx = 2 * ix / width - 1,
                hy = 2 * iy / height - 1,
                h = hx * hx + hy * hy;

            if (h < 1 && h > -1) {
                return typeof value === 'function' ? value(ix, iy, width, height) : value;
            }

            return null;
        });

        return this;
    };

    Map2D.prototype.map = function (callback) {
        var value,
            i, x, y;

        for (i = 0; i < this.values.length; i++) {
            value = this.values[i];
            x = i % this.width;
            y = Math.floor(i / this.width);

            this.values[i] = callback(value, x, y);
        }
    };

    Map2D.prototype.reduce = function (callback, initialValue) {
        var current = initialValue || 0,
            value, i, x, y;

        for (i = 0; i < this.values.length; i++) {
            value = this.values[i];
            x = i % this.width;
            y = Math.floor(i / this.width);

            current = callback(current, value, x, y);
        }

        return current;
    };

    Map2D.prototype.replace = function (sourceValue, destinationValue) {
        this.map(function (value) {
            return value === sourceValue ? destinationValue : value;
        });
    };

    Map2D.fromTypedArray = function (array, width, height) {
        var map = new Map2D(width, height, array.constructor);
        map.values = array; //.slide(0);

        return map;
    };

    Map2D.clone = function (map) {
        var clone = new Map2D(map.width, map.height, map.type);

        for (var iy = 0; iy < map.height; iy++) {
            for (var ix = 0; ix < map.width; ix++) {
                clone.set(ix, iy, map.get(ix, iy));
            }
        }

        return clone;
    };

    Map2D.draw = function (context, x, y, map) {
        var width = map.width,
            height = map.height,
            imageData = context.createImageData(width, height),
            data = imageData.data,
            value, ix, iy;

        for (ix = 0; ix < map.width; ix++) {
            for (iy = 0; iy < height; iy++) {
                value = map.get(ix, iy);
                data[(ix + iy * width) * 4 + 0] = value;
                data[(ix + iy * width) * 4 + 1] = value;
                data[(ix + iy * width) * 4 + 2] = value;
                data[(ix + iy * width) * 4 + 3] = 255;
            }
        }

        context.putImageData(imageData, x, y);
    };

    return Map2D;
}());
