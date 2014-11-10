var Map2D = (function () {
    "use strict";

    var Map2D = function (width, height, type) {
        this.width = width;
        this.height = height;
        this.type = type || Uint8Array;
        this.map = new this.type(width * height);
    };

    Map2D.prototype.getIndex = function (x, y) {
        return y * this.width + x;
    };

    Map2D.prototype.get = function (x, y) {
        return this.map[this.getIndex(x, y)];
    };

    Map2D.prototype.set = function (x, y, value) {
        this.map[this.getIndex(x, y)] = value;

        return this;
    };

    Map2D.prototype.rect = function (x, y, width, height, value) {
        for(var iy = 0; iy < height; iy++) {
            for(var ix = 0; ix < width; ix++) {
                var value = typeof value === 'function' ? value(ix, iy, width, height) : value;

                if(value !== null) {
                    this.set(x + ix, y + iy, value);
                }
            }
        }

        return this;
    };

    Map2D.prototype.circ = function (x, y, radius, value) {
        this.rect(x, y, radius * 2, radius * 2, function (ix, iy, width, height) {
            var hx = 2 * ix / width - 1;
            var hy = 2 * iy / height - 1;
            var h = hx * hx + hy * hy;
            if(h < 1 && h > -1) {
                return value(ix, iy, width, height);
            }

            return null;
        });

        return this;
    };

    Map2D.clone = function (map) {
        var clone = new Map2D(map.width, map.height, map.type);

        for(var iy = 0; iy < map.height; iy++) {
            for(var ix = 0; ix < map.width; ix++) {
                clone.set(x + ix, y + iy, map.get(ix, iy));
            }
        }

        return clone;
    };

    return Map2D;
}());
