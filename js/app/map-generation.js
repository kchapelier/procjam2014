var mapGenerator = {
    context: null,
    worker: null,
    seed: 0,
    width: 0,
    height: 0,
    busy: false,
    data: null,
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
        Map2D.draw(this.context, 0, 0, this.data.heightMap);
    }
}
