// TODO there is a whole to refactor here

var mapGenerator = {
    canvas: null,
    context: null,
    worker: null,
    seed: 0,
    width: 0,
    height: 0,
    seaLevel: 0.5,
    distortionAmount: 1,
    displayType: 'heightMap',
    busy: false,
    data: null,
    highlightCallback: null,
    highlight: null,
    highlightedCity: null,
    setCanvas: function (canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    },
    setHighlightCallback: function (callback) {
        this.highlightCallback = callback;
    },
    setOverlay: function (overlay) {
        this.overlay = overlay;
    },
    getWorker: function () {
        var self = this;

        if (this.worker === null) {
            this.worker = new Worker('./js/app/workers/map-generation-worker.js#t=1');
            this.worker.addEventListener('message', function (e) {
                self.worker.terminate();
                self.worker = null;
                self.receiveMap(e.data);
            });
        }

        return this.worker;
    },
    requestMap: function () {
        var worker;

        if (this.busy) {
            return false;
        }

        document.body.classList.add('loading');
        this.busy = true;

        worker = this.getWorker();
        worker.postMessage({
            seed: this.seed,
            width: this.width,
            height: this.height,
            seaLevel: this.seaLevel,
            distortionAmount: this.distortionAmount
        });

        return true;
    },
    receiveMap: function (data) {
        data.heightMap = Map2D.fromTypedArray(data.heightMap, data.params.width, data.params.height);
        data.continentMap = Map2D.fromTypedArray(data.continentMap, data.params.width, data.params.height);

        data.zones.continents.map(function (e) {
            e.map = Map2D.fromTypedArray(e.map, data.params.width, data.params.height);
        });

        data.zones.islands.map(function (e) {
            e.map = Map2D.fromTypedArray(e.map, data.params.width, data.params.height);
        });

        this.data = data;

        this.highlight = null;
        this.setCitiesLayer();
        this.display();

        document.body.classList.remove('loading');
        this.busy = false;
    },
    savePng: function () {
        this.canvas.toBlob(function (blob) {
            saveAs(blob, 'black-sea-' + (new Date().getTime()) + '.png');
        });
    },
    setCitiesLayer: function () {
        var parent = $(this.canvas).parent();

        parent.find('.city').remove();

        var placeCity = function (className, city) {
            var el = $('<div>', {
                'class': 'city ' + className,
                css: {
                    top: city.y - 1,
                    left: city.x - 1
                },
                'data-title': city.name
            });

            parent.append(el);
        };

        this.data.zones.continents.forEach(function (continent, index) {
            var className = 'continent-' + index;
            continent.cities.forEach(function (city, index) {
                placeCity(className, city);
            });
        });

        this.data.zones.islands.forEach(function (island, index) {
            var className = 'islands-' + index;
            island.cities.forEach(function (city, index) {
                placeCity(className, city);
            });
        });

        var self = this;

        parent.find('.city').on({
            mouseenter: function (e) {
                $(e.currentTarget).addClass('highlighted');
                if (self.highlightCallback) {
                    self.highlightCallback('City : ' + $(e.currentTarget).data('title'));
                }
            },
            mouseleave: function (e) {
                $(e.currentTarget).removeClass('highlighted');

                // duplicated code
                if (self.highlightCallback) {
                    if(self.highlight) {
                        self.highlightCallback(self.highlight.type + ' : ' + self.highlight.name + ', superficie : ' + self.highlight.size);
                    } else {
                        self.highlightCallback(false);
                    }
                }
            }
        });
    },
    display: function () {
        var continentMap = this.data.continentMap,
            highlightMap = this.highlight ? this.highlight.map : null,
            map = Map2D.clone(this.data[this.displayType]);

        map.map(function (value, x, y) {
            value = Math.max(0, Math.min(255, continentMap.get(x, y) ? (value - 30) * 1.5 : value / 1.75));
            //value = Math.max(0, Math.min(255, continentMap.get(x, y) ? (10 + value - 125) * (6) : 0));

            if (highlightMap && !highlightMap.get(x, y)) {
                value = value / 1.75;
            }

            return value;
        });

        if (this.highlightCallback) {
            if(this.highlight) {
                this.highlightCallback(this.highlight.type + ' : ' + this.highlight.name + ', superficie : ' + this.highlight.size);
            } else {
                this.highlightCallback(false);
            }
        }

        Map2D.draw(this.context, 0, 0, map);
    },
    highlightCity: function () {
        //display in ui
    },
    mousemove: function (x, y) {
        if (this.data === null) {
            return false;
        }

        var zones = this.data.zones,
            previous = this.highlight,
            i;

        this.highlight = null;

        if (previous && previous.map.get(x, y) > 0) {
            this.highlight = previous;
        } else {
            for (var key in zones) {
                for (i = 0; i < zones[key].length; i++) {
                    if (zones[key][i].map.get(x, y) > 0) {
                        this.highlight = zones[key][i];
                        break;
                    }
                }
            }
        }

        if (previous !== this.highlight) {
            previous = this.highlight;

            if (this.highlight !== null) {
                console.log(this.highlight.type, this.highlight.name, 'superficie', this.highlight.size);
            }

            this.display();
        }

        return true;
    }
}
