var mapGenerator = {
    context: null,
    worker: null,
    seed: 0,
    width: 0,
    height: 0,
    busy: false,
    data: null,
    highlight : null,
    setContext: function (context) {
        this.context = context;
    },
    getWorker: function () {
        var self = this;

        if(this.worker === null) {
            this.worker = new Worker('./js/app/workers/map-generation-worker.js');
            this.worker.addEventListener('message', function(e) {
                self.receiveMap(e.data);
            });
        }

        return this.worker;
    },
    requestMap: function () {
        var worker;

        if(this.busy) {
            return false;
        }

        this.busy = true;

        worker = this.getWorker();
        worker.postMessage({
            seed : this.seed,
            width : this.width,
            height : this.height
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

        this.display();

        this.busy = false;
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

        Map2D.draw(this.context, 0, 0, map);
    },
    mousemove: function (x, y) {
        if(this.data === null) {
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

        if(previous !== this.highlight) {
            previous = this.highlight;

            if(this.highlight !== null) {
                console.log(this.highlight.name, this.highlight.size);
            }

            this.display();
        }

        return true;
    }
}
