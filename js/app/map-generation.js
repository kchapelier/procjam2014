var mapGenerator = {
    canvas: null,
    context: null,
    worker: null,
    seed: 0,
    width: 0,
    height: 0,
    seaLevel: 0.5,
    busy: false,
    data: null,
    highlight: null,
    highlightedCity: null,
    setCanvas: function (canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    },
    getWorker: function () {
        var self = this;

        if (this.worker === null) {
            this.worker = new Worker('./js/app/workers/map-generation-worker.js#t=1');
            this.worker.addEventListener('message', function (e) {
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

        this.busy = true;

        worker = this.getWorker();
        worker.postMessage({
            seed: this.seed,
            width: this.width,
            height: this.height,
            seaLevel: this.seaLevel
        });

        console.log(this.seaLevel);

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

        console.log(this.data);

        this.setCitiesLayer();
        this.display();

        this.busy = false;
    },
    savePng: function () {
        this.canvas.toBlob(function (blob) {
            saveAs(blob, 'black-sea-' + (new Date().getTime()) + '.png');
        });
    },
    setCitiesLayer : function () {
        var parent = $(this.canvas).parent();

        //parent.getElement('.city').destroy();

        var placeCity = function(className, city) {
            var el = $('<div>', {
                'class' : 'city ' + className,
                'css' : {
                    top : city.y - 1,
                    left : city.x - 1
                },
                'data-title' : city.name
            });

            parent.append(el);
        };

        this.data.zones.continents.forEach(function(continent, index) {
            var className = 'continent-' + index;
            continent.cities.forEach(function(city, index) {
                placeCity(className, city);
            });
        });

        this.data.zones.islands.forEach(function(island, index) {
            var className = 'islands-' + index;
            island.cities.forEach(function(city, index) {
                placeCity(className, city);
            });
        });

        parent.find('.city').on({
            mouseenter : function (e) {
                $(e.currentTarget).addClass('highlighted');
                console.log($(e.currentTarget).data('title'), 'enter');
            },
            mouseleave : function (e) {
                $(e.currentTarget).removeClass('highlighted');
                console.log($(e.currentTarget).data('title'), 'leave');
            }
        });


    },
    display: function () {
        var heightMap = this.data.heightMap,
            continentMap = this.data.continentMap,
            highlightMap = this.highlight ? this.highlight.map : null;

        var map = Map2D.clone(this.data.heightMap);
        map.map(function (value, x, y) {
            value = Math.max(0, Math.min(255, continentMap.get(x, y) ? (value - 30) * 1.5 : value / 1.75));
            //value = Math.max(0, Math.min(255, continentMap.get(x, y) ? (10 + value - 125) * (6) : 0));

            if (highlightMap && !highlightMap.get(x, y)) {
                value = value / 2;
            }

            return value;
        });

        if(this.highlight) {

        }

        Map2D.draw(this.context, 0, 0, map);
    },
    highlightCity: function () {

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
                console.log(this.highlight.name, this.highlight.size);
            }

            this.display();
        }

        return true;
    }
}
