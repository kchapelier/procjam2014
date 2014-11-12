var japaneseIslandsNames = (function () {
    "use strict";

    var rules = {
        elementsMinNumber: 2,
        elementsMaxNumber: 8,
        elementsPositionRules: false,
        postProcess: function (values) {
            var name = values.join('');
            name = name.replace(/[^naeiuo]+$/, '');
            name = name.charAt(0).toUpperCase() + name.slice(1);

            var rand = Math.random();

            if(rand > 0.45) {
                name += 'jima';
            } else if(rand > 0.1) {
                name += 'shima';
            } else {
                name += 'to';
            }

            return name;
        },
        validate: function (sequence) {
            return sequence.length > 2;
        }
    };

    /* jscs: disable */

    var data = {
        d: {
            value: 'd',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                e: 0.16666666666666666,
                a: 0.8333333333333334
            }
        },
        e: {
            value: 'e',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.1,
                r: 0.4,
                g: 0.1,
                d: 0.1,
                k: 0.1,
                y: 0.1,
                t: 0.1
            }
        },
        n: {
            value: 'n',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                o: 0.21428571428571427,
                e: 0.07142857142857142,
                a: 0.5,
                t: 0.07142857142857142,
                i: 0.14285714285714285
            }
        },
        i: {
            value: 'i',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                o: 0.1,
                k: 0.06666666666666667,
                n: 0.2,
                y: 0.06666666666666667,
                r: 0.13333333333333333,
                s: 0.13333333333333333,
                t: 0.16666666666666666,
                d: 0.06666666666666667,
                w: 0.03333333333333333,
                g: 0.03333333333333333
            }
        },
        o: {
            value: 'o',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.07692307692307693,
                s: 0.038461538461538464,
                m: 0.23076923076923078,
                b: 0.07692307692307693,
                k: 0.19230769230769232,
                r: 0.07692307692307693,
                n: 0.11538461538461539,
                t: 0.11538461538461539,
                h: 0.038461538461538464,
                g: 0.038461538461538464
            }
        },
        k: {
            value: 'k',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.21875,
                i: 0.28125,
                u: 0.25,
                e: 0.125,
                o: 0.09375,
                y: 0.03125
            }
        },
        a: {
            value: 'a',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                g: 0.07142857142857142,
                i: 0.10714285714285714,
                b: 0.03571428571428571,
                k: 0.14285714285714285,
                n: 0.125,
                t: 0.08928571428571429,
                m: 0.125,
                r: 0.125,
                o: 0.017857142857142856,
                y: 0.017857142857142856,
                d: 0.017857142857142856,
                w: 0.03571428571428571,
                s: 0.05357142857142857,
                e: 0.017857142857142856,
                c: 0.017857142857142856
            }
        },
        g: {
            value: 'g',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                o: 0.14285714285714285,
                e: 0.14285714285714285,
                a: 0.42857142857142855,
                u: 0.2857142857142857
            }
        },
        u: {
            value: 'u',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                c: 0.05555555555555555,
                r: 0.1111111111111111,
                n: 0.16666666666666666,
                m: 0.16666666666666666,
                k: 0.2777777777777778,
                b: 0.1111111111111111,
                s: 0.05555555555555555,
                t: 0.05555555555555555
            }
        },
        c: {
            value: 'c',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {h: 1}
        },
        h: {
            value: 'h',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                i: 0.6363636363636364,
                a: 0.36363636363636365
            }
        },
        r: {
            value: 'r',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.25,
                o: 0.25,
                e: 0.1,
                u: 0.2,
                i: 0.15,
                y: 0.05
            }
        },
        b: {
            value: 'b',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                u: 0.42857142857142855,
                a: 0.42857142857142855,
                o: 0.14285714285714285
            }
        },
        m: {
            value: 'm',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.5,
                i: 0.35,
                o: 0.15
            }
        },
        t: {
            value: 't',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.30434782608695654,
                s: 0.043478260869565216,
                e: 0.17391304347826086,
                o: 0.43478260869565216,
                i: 0.043478260869565216
            }
        },
        y: {
            value: 'y',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.42857142857142855,
                u: 0.35714285714285715,
                o: 0.21428571428571427
            }
        },
        s: {
            value: 's',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.375,
                u: 0.25,
                h: 0.3125,
                o: 0.0625
            }
        },
        w: {
            value: 'w',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.6666666666666666,
                o: 0.3333333333333333
            }
        }
    };

    /* jscs: enable */

    return new WMC(rules, data);
}());

