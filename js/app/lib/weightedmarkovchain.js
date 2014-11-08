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

WMC.prototype.get = function () {
    var maxElement = 4; // TODO include in rules
    var result = [];
    var elements = Object.keys(this.data);
    var previous;
    var i;

    for (i = 0; i < maxElement; i++) {
        var current = null;
        var acceptable = false;

        if(previous) {
            if(!previous['chain']) {
                //the previous element cannot have children, bail out
                break;
            }
        }

        if(current === null) {
            var element = this.data[elements[Math.floor(Math.random() * elements.length)]];
        }



        acceptable = true; //TODO validation rule here

        if (!acceptable) {
            i--;
            continue;
        }

        result.push(element);
        previous = element;
    }

    return result;
};

var data = {
    a: {
        chain: {
            d : 1,
            b: 10,
            c: 3
        }
    },
    b: {
        chain: {
            a: 10,
            c: 5
        }
    },
    c: {
        chain: {
            a: 1
        }
    },
    d : null
};

var rules = {

};

var mc = new WMC(rules, data);

for (var i = 0; i < 10; i++) {
    console.log(mc.get().reduce(function(p, v) { return p + v.value; }, ''));
}
