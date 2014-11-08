"use strict";

var WMC = function (rules, data, unsafe) {
    this.rules = rules;
    this.data = data;
    this.prepareData();
    this.prepareDataKeys();
    if (!unsafe) {
        this.checkData();
    }
};

WMC.prototype.rules = null;
WMC.prototype.data = null;
WMC.prototype.dataKeys = null;

WMC.prototype.checkData = function () {
    var soleChildren = [],
        self = this,
        item, children, key;

    for (key in this.data) {
        item = this.data[key];
        if (item.hasOwnProperty('chain')) {
            children = Object.keys(item.chain);

            if (children.length === 1 && soleChildren.indexOf(children[0]) === -1) {
                soleChildren.push(children[0]);
            }
        }
    }

    soleChildren.forEach(function (item) {
        var element = self.data[item];

        if (!element.acceptableAsMiddle) {
            throw new Error('Weighted Markov Chain : "' + item + '" is a sole child but is not acceptableAsMiddle');
        }

        if (!element.acceptableAsLast) {
            throw new Error('Weighted Markov Chain : "' + item + '" is a sole child but is not acceptableAsLast');
        }
    });
};

WMC.prototype.prepareData = function () {
    var element,
        key;

    for (key in this.data) {
        element = this.data[key];

        if (typeof element !== 'object' || !element) {
            element = {
                value: (element === null ? key : element)
            };

            this.data[key] = element;
        }

        if (!element.hasOwnProperty('value')) {
            element.value = key;
        }

        if (!element.hasOwnProperty('acceptableAsFirst')) {
            element.acceptableAsFirst = true;
        }

        if (!element.hasOwnProperty('acceptableAsLast')) {
            element.acceptableAsLast = true;
        }

        if (!element.hasOwnProperty('acceptableAsMiddle')) {
            element.acceptableAsMiddle = true;
        }
    }
};

WMC.prototype.prepareDataKeys = function () {
    this.dataKeys = Object.keys(this.data);
};

WMC.prototype.getElementsNumber = function () {
    return Math.floor(
        Math.random() * (this.rules.elementsMaxNumber - this.rules.elementsMinNumber + 1)
        + this.rules.elementsMinNumber
    );
};

WMC.prototype.next = function (previousValues) {
    if (previousValues && previousValues.length > 0) {
        var previous = previousValues[previousValues.length - 1];
        if (previous.hasOwnProperty('chain')) {
            var r = Math.random();
            for (var key in previous.chain) {
                r = r - previous.chain[key];

                if (r < 0) {
                    return this.data[key];
                }
            }
        }

        return null;
    } else {
        var elements = this.dataKeys;
        return this.data[elements[Math.floor(Math.random() * elements.length)]];
    }
};

WMC.prototype.get = function () {
    var elementsMaxNumber = this.getElementsNumber(),
        result = [],
        i;

    for (i = 0; i < elementsMaxNumber; i++) {
        var current = this.next(result),
            acceptable = false;

        if (current === null) {
            // reached a dead end
            break;
        }

        if (this.rules.elementsPositionRules) {
            if (i === 0) {
                acceptable = current.acceptableAsFirst;
            } else if (i === elementsMaxNumber - 1) {
                acceptable = current.acceptableAsLast;
            } else {
                acceptable = current.acceptableAsMiddle;
            }
        } else {
            acceptable = true;
        }

        if (!acceptable) {
            // retry
            i--;
            continue;
        }

        result.push(current);
    }

    return result.map(function (e) {
        return e.value;
    });
};

var data = {
    a: {
        chain: {
            d: 0.05,
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
            d: 0.999
        }
    },
    d: {
        acceptableAsFirst: false,
        acceptableAsMiddle: true,
        chain: {
            a: 0.5
        }
    }
};

var rules = {
    elementsMinNumber: 2,
    elementsMaxNumber: 4,
    elementsPositionRules: true
};

var mc = new WMC(rules, require('./wmc-japanese-feminine-firstnames'));

for (var i = 0; i < 20; i++) {
    /* /
    console.log(mc.get());
    /*/
    console.log(mc.get().join(''));
    /* */
}
