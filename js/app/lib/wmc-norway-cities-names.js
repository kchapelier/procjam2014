var norwayCitiesNames = (function () {
    "use strict";

    var rules = {
        elementsMinNumber: 4,
        elementsMaxNumber: 16,
        elementsPositionRules: true,
        postProcess: function (values) {
            var name = values.join('');
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return name;
        }
    };

    /* jscs: disable */

    var data = {
        a: {
            value: 'a',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                r: 0.12698412698412698,
                l: 0.1746031746031746,
                m: 0.09523809523809523,
                d: 0.07936507936507936,
                u: 0.047619047619047616,
                n: 0.3333333333333333,
                v: 0.06349206349206349,
                s: 0.015873015873015872,
                k: 0.015873015873015872,
                g: 0.031746031746031744,
                t: 0.015873015873015872
            }
        },
        r: {
            value: 'r',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.1,
                g: 0.06666666666666667,
                a: 0.1,
                s: 0.06666666666666667,
                d: 0.11666666666666667,
                'ø': 0.1,
                i: 0.08333333333333333,
                f: 0.016666666666666666,
                t: 0.03333333333333333,
                v: 0.06666666666666667,
                u: 0.05,
                p: 0.03333333333333333,
                o: 0.05,
                y: 0.016666666666666666,
                n: 0.03333333333333333,
                k: 0.03333333333333333,
                j: 0.016666666666666666,
                m: 0.016666666666666666
            }
        },
        e: {
            value: 'e',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.22972972972972974,
                r: 0.2702702702702703,
                g: 0.013513513513513514,
                k: 0.04054054054054054,
                f: 0.04054054054054054,
                d: 0.013513513513513514,
                s: 0.21621621621621623,
                h: 0.02702702702702703,
                i: 0.06756756756756757,
                v: 0.02702702702702703,
                l: 0.04054054054054054,
                t: 0.013513513513513514
            }
        },
        n: {
            value: 'n',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                d: 0.36923076923076925,
                e: 0.18461538461538463,
                g: 0.15384615384615385,
                s: 0.06153846153846154,
                a: 0.07692307692307693,
                o: 0.015384615384615385,
                n: 0.07692307692307693,
                k: 0.015384615384615385,
                'ø': 0.015384615384615385,
                i: 0.015384615384615385,
                v: 0.015384615384615385
            }
        },
        d: {
            value: 'd',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                a: 0.3333333333333333,
                'ø': 0.06666666666666667,
                r: 0.1,
                e: 0.2,
                d: 0.1,
                n: 0.06666666666666667,
                h: 0.03333333333333333,
                s: 0.06666666666666667,
                v: 0.03333333333333333
            }
        },
        l: {
            value: 'l',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.2631578947368421,
                o: 0.05263157894736842,
                d: 0.05263157894736842,
                m: 0.05263157894736842,
                a: 0.13157894736842105,
                i: 0.07894736842105263,
                l: 0.10526315789473684,
                t: 0.02631578947368421,
                v: 0.05263157894736842,
                y: 0.02631578947368421,
                'ø': 0.02631578947368421,
                s: 0.13157894736842105
            }
        },
        b: {
            value: 'b',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                e: 0.25,
                o: 0.16666666666666666,
                r: 0.4166666666666667,
                a: 0.08333333333333333,
                u: 0.08333333333333333
            }
        },
        g: {
            value: 'g',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.5238095238095238,
                j: 0.047619047619047616,
                r: 0.09523809523809523,
                s: 0.14285714285714285,
                n: 0.09523809523809523,
                d: 0.047619047619047616,
                'å': 0.047619047619047616
            }
        },
        o: {
            value: 'o',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                d: 0.08571428571428572,
                r: 0.22857142857142856,
                l: 0.11428571428571428,
                s: 0.2,
                n: 0.14285714285714285,
                t: 0.05714285714285714,
                m: 0.02857142857142857,
                k: 0.02857142857142857,
                p: 0.02857142857142857,
                i: 0.02857142857142857,
                e: 0.02857142857142857,
                g: 0.02857142857142857
            }
        },
        'ø': {
            value: 'ø',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                v: 0.05555555555555555,
                n: 0.16666666666666666,
                r: 0.3333333333333333,
                g: 0.05555555555555555,
                y: 0.1111111111111111,
                b: 0.05555555555555555,
                m: 0.05555555555555555,
                e: 0.1111111111111111,
                l: 0.05555555555555555
            }
        },
        m: {
            value: 'm',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                m: 0.13636363636363635,
                e: 0.18181818181818182,
                s: 0.18181818181818182,
                a: 0.09090909090909091,
                o: 0.22727272727272727,
                u: 0.045454545454545456,
                y: 0.045454545454545456,
                'å': 0.045454545454545456,
                n: 0.045454545454545456
            }
        },
        s: {
            value: 's',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                u: 0.11428571428571428,
                t: 0.24285714285714285,
                s: 0.04285714285714286,
                b: 0.05714285714285714,
                v: 0.02857142857142857,
                a: 0.11428571428571428,
                o: 0.05714285714285714,
                l: 0.02857142857142857,
                g: 0.02857142857142857,
                'ø': 0.07142857142857142,
                k: 0.07142857142857142,
                n: 0.04285714285714286,
                j: 0.02857142857142857,
                e: 0.04285714285714286,
                h: 0.02857142857142857
            }
        },
        u: {
            value: 'u',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.5555555555555556,
                g: 0.05555555555555555,
                m: 0.1111111111111111,
                s: 0.05555555555555555,
                k: 0.05555555555555555,
                d: 0.1111111111111111,
                l: 0.05555555555555555
            }
        },
        f: {
            value: 'f',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.23076923076923078,
                l: 0.15384615384615385,
                j: 0.15384615384615385,
                r: 0.07692307692307693,
                e: 0.07692307692307693,
                o: 0.15384615384615385,
                i: 0.07692307692307693,
                'ø': 0.07692307692307693
            }
        },
        k: {
            value: 'k',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                k: 0.07692307692307693,
                e: 0.11538461538461539,
                s: 0.11538461538461539,
                o: 0.15384615384615385,
                r: 0.15384615384615385,
                i: 0.15384615384615385,
                j: 0.038461538461538464,
                n: 0.038461538461538464,
                a: 0.11538461538461539,
                u: 0.038461538461538464
            }
        },
        j: {
            value: 'j',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                o: 0.2222222222222222,
                'ø': 0.5555555555555556,
                e: 0.1111111111111111,
                u: 0.1111111111111111
            }
        },
        i: {
            value: 'i',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                k: 0.2903225806451613,
                m: 0.0967741935483871,
                n: 0.16129032258064516,
                s: 0.0967741935483871,
                a: 0.06451612903225806,
                l: 0.0967741935483871,
                e: 0.03225806451612903,
                r: 0.0967741935483871,
                d: 0.03225806451612903,
                t: 0.03225806451612903
            }
        },
        t: {
            value: 't',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                a: 0.3448275862068966,
                r: 0.1724137931034483,
                e: 0.1724137931034483,
                i: 0.06896551724137931,
                o: 0.034482758620689655,
                'ø': 0.034482758620689655,
                t: 0.034482758620689655,
                l: 0.034482758620689655,
                h: 0.034482758620689655,
                j: 0.034482758620689655,
                s: 0.034482758620689655
            }
        },
        v: {
            value: 'v',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                i: 0.45454545454545453,
                a: 0.18181818181818182,
                e: 0.22727272727272727,
                'å': 0.09090909090909091,
                n: 0.045454545454545456
            }
        },
        h: {
            value: 'h',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                a: 0.47368421052631576,
                o: 0.2631578947368421,
                'ø': 0.10526315789473684,
                e: 0.10526315789473684,
                v: 0.05263157894736842
            }
        },
        p: {
            value: 'p',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                o: 0.25,
                s: 0.25,
                e: 0.5
            }
        },
        'å': {
            value: 'å',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                l: 0.25,
                g: 0.25,
                k: 0.125,
                n: 0.125,
                s: 0.125,
                r: 0.125
            }
        },
        y: {
            value: 'y',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.5,
                s: 0.5
            }
        }
    };

    /* jscs: enable */

    return new WMC(rules, data);
}());

