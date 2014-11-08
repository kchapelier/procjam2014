var WMC = function (rules, data) {
    this.rules = rules;
    this.data = data;
    this.prepareData();
};

WMC.prototype.rules = null;
WMC.prototype.data = null;

WMC.prototype.prepareData = function() {
    var element,
        key;

    for(key in this.data) {
        element = this.data[key];

        if(typeof element !== 'object' || !element) {
            this.data[key] = { value : key };
        } else if (!element.hasOwnProperty('value')) {
            element.value = key;
        }
    }
};

WMC.prototype.getElementsNumber = function () {
    return Math.floor(Math.random() * (this.rules.elementsMaxNumber - this.rules.elementsMinNumber + 1) + this.rules.elementsMinNumber);
};

WMC.prototype.get = function () {
    var elementsMaxNumber = this.getElementsNumber();
    var result = [];
    var elements = Object.keys(this.data);
    var i;

    for (i = 0; i < elementsMaxNumber; i++) {
        var current = null;
        var acceptable = false;

        if(result.length > 0) {
            var previous = result[result.length - 1];
            if(!previous['chain']) {
                //the previous element cannot have children, bail out
                break;
            } else {
                var r = Math.random();
                for(var key in previous['chain']) {
                    r = r - previous['chain'][key];

                    if(r < 0) {
                        current = this.data[key];
                        break;
                    }
                }
            }
        }

        if(current === null) {
            current = this.data[elements[Math.floor(Math.random() * elements.length)]];
        }

        acceptable = true; //TODO validation rule here

        if (!acceptable) {
            i--;
            continue;
        }

        result.push(current);
    }

    return result;
};

var data = {
    a: {
        chain: {
            d : 0.05,
            b: 0.9,
            c: 0.05
        }
    },
    b: {
        chain: {
            a: 0.1,
            c: 0.9
        }
    },
    c: {
        chain: {
            d: 1
        }
    },
    d : null
};

var rules = {
    elementsMinNumber : 2,
    elementsMaxNumber : 5
};

var mc = new WMC(rules, data);

for (var i = 0; i < 10; i++) {
    //console.log(mc.get());
    console.log(mc.get().reduce(function(p, v) { return p + v.value; }, ''));
}
