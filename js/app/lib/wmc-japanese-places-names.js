var japanesePlacesNames = (function () {
    "use strict";

    var rules = {
        elementsMinNumber: 2,
        elementsMaxNumber: 9,
        elementsPositionRules: true,
        postProcess: function (values) {
            var name = values.join('');
            name = name.replace(/[^naeiuo]+$/, '');
            name = name.replace(/^[^a-z]+/, '');
            //name = name.replace(/^[^]{2,}/, '');
            name = name.charAt(0).toUpperCase() + name.slice(1);

            return name;
        },
        validate: function (sequence) {
            var validDoubleCons = ['sh'];

            if (sequence.length > 3) {
                var start = sequence.substr(0, 2).toLowerCase();

                if (/[aeiou]/.test(start) || validDoubleCons.indexOf(start) > -1) {
                    return true;
                }
            }

            return false;
        }
    };

    /* jscs: disable */

    var data = {
            n: {
                value: 'n',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    a: 0.376984126984127,
                    o: 0.25793650793650796,
                    d: 0.027777777777777776,
                    j: 0.03571428571428571,
                    i: 0.09523809523809523,
                    u: 0.03571428571428571,
                    s: 0.003968253968253968,
                    e: 0.04365079365079365,
                    z: 0.011904761904761904,
                    m: 0.007936507936507936,
                    ou: 0.007936507936507936,
                    n: 0.023809523809523808,
                    b: 0.007936507936507936,
                    t: 0.023809523809523808,
                    k: 0.007936507936507936,
                    g: 0.015873015873015872,
                    r: 0.003968253968253968,
                    y: 0.011904761904761904
                }
            },
            a: {
                value: 'a',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    g: 0.06097560975609756,
                    s: 0.10365853658536585,
                    z: 0.018292682926829267,
                    k: 0.1548780487804878,
                    n: 0.09024390243902439,
                    i: 0.06463414634146342,
                    w: 0.07195121951219512,
                    r: 0.06463414634146342,
                    m: 0.13902439024390245,
                    h: 0.018292682926829267,
                    t: 0.09146341463414634,
                    a: 0.0012195121951219512,
                    c: 0.020731707317073172,
                    d: 0.015853658536585366,
                    o: 0.00975609756097561,
                    b: 0.024390243902439025,
                    y: 0.02926829268292683,
                    u: 0.0024390243902439024,
                    j: 0.00853658536585366,
                    e: 0.006097560975609756,
                    p: 0.0012195121951219512,
                    l: 0.0024390243902439024
                }
            },
            g: {
                value: 'g',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    o: 0.152,
                    a: 0.656,
                    ou: 0.024,
                    i: 0.088,
                    u: 0.048,
                    e: 0.016,
                    y: 0.008,
                    uu: 0.008
                }
            },
            o: {
                value: 'o',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    y: 0.05952380952380952,
                    h: 0.027777777777777776,
                    k: 0.17063492063492064,
                    m: 0.1111111111111111,
                    t: 0.09126984126984126,
                    n: 0.09126984126984126,
                    w: 0.015873015873015872,
                    a: 0.003968253968253968,
                    s: 0.13095238095238096,
                    g: 0.047619047619047616,
                    i: 0.031746031746031744,
                    r: 0.06349206349206349,
                    d: 0.03571428571428571,
                    b: 0.047619047619047616,
                    j: 0.023809523809523808,
                    o: 0.015873015873015872,
                    '-': 0.003968253968253968,
                    u: 0.003968253968253968,
                    e: 0.007936507936507936,
                    z: 0.007936507936507936,
                    c: 0.003968253968253968,
                    f: 0.003968253968253968
                }
            },
            y: {
                value: 'y',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    a: 0.6197183098591549,
                    o: 0.22535211267605634,
                    uu: 0.06338028169014084,
                    u: 0.028169014084507043,
                    ou: 0.06338028169014084
                }
            },
            t: {
                value: 't',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    o: 0.2518248175182482,
                    s: 0.24817518248175183,
                    a: 0.38686131386861317,
                    ou: 0.04744525547445255,
                    e: 0.04744525547445255,
                    t: 0.01824817518248175
                }
            },
            h: {
                value: 'h',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    a: 0.15570934256055363,
                    i: 0.7474048442906575,
                    e: 0.010380622837370242,
                    o: 0.03460207612456748,
                    ou: 0.01384083044982699,
                    uu: 0.03460207612456748,
                    y: 0.0034602076124567475
                }
            },
            s: {
                value: 's',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    h: 0.37057220708446864,
                    e: 0.0681198910081744,
                    u: 0.2779291553133515,
                    a: 0.23433242506811988,
                    s: 0.005449591280653951,
                    o: 0.013623978201634877,
                    ou: 0.021798365122615803,
                    uu: 0.0027247956403269754,
                    p: 0.0027247956403269754,
                    '': 0.0027247956403269754
                }
            },
            i: {
                value: 'i',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    c: 0.02391304347826087,
                    n: 0.1391304347826087,
                    y: 0.07173913043478261,
                    m: 0.12391304347826088,
                    s: 0.08478260869565217,
                    o: 0.02391304347826087,
                    t: 0.1,
                    r: 0.06086956521739131,
                    a: 0.008695652173913044,
                    w: 0.03260869565217391,
                    h: 0.02608695652173913,
                    k: 0.08695652173913043,
                    b: 0.03695652173913044,
                    d: 0.02608695652173913,
                    i: 0.017391304347826087,
                    j: 0.004347826086956522,
                    z: 0.05434782608695652,
                    f: 0.004347826086956522,
                    g: 0.04782608695652174,
                    u: 0.004347826086956522,
                    ou: 0.013043478260869565,
                    '-': 0.006521739130434782,
                    e: 0.002173913043478261
                }
            },
            k: {
                value: 'k',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    a: 0.43,
                    i: 0.2125,
                    o: 0.0875,
                    ou: 0.0375,
                    u: 0.175,
                    e: 0.0275,
                    y: 0.0225,
                    k: 0.0075
                }
            },
            z: {
                value: 'z',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    a: 0.3333333333333333,
                    u: 0.543859649122807,
                    e: 0.10526315789473684,
                    o: 0.017543859649122806
                }
            },
            c: {
                value: 'c',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    h: 0.9830508474576272,
                    i: 0.01694915254237288
                }
            },
            m: {
                value: 'm',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    i: 0.3188854489164087,
                    a: 0.49226006191950467,
                    e: 0.043343653250773995,
                    b: 0.006191950464396285,
                    u: 0.05263157894736842,
                    o: 0.08359133126934984,
                    y: 0.0030959752321981426
                }
            },
            e: {
                value: 'e',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    t: 0.15384615384615385,
                    k: 0.05128205128205128,
                    n: 0.23076923076923078,
                    m: 0.02564102564102564,
                    y: 0.05128205128205128,
                    g: 0.0641025641025641,
                    i: 0.038461538461538464,
                    c: 0.02564102564102564,
                    r: 0.05128205128205128,
                    b: 0.07692307692307693,
                    s: 0.038461538461538464,
                    h: 0.02564102564102564,
                    j: 0.01282051282051282,
                    o: 0.05128205128205128,
                    d: 0.05128205128205128,
                    p: 0.01282051282051282,
                    z: 0.02564102564102564,
                    f: 0.01282051282051282
                }
            },
            d: {
                value: 'd',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    a: 0.7333333333333333,
                    o: 0.11666666666666667,
                    ou: 0.05,
                    e: 0.08333333333333333,
                    s: 0.016666666666666666
                }
            },
            u: {
                value: 'u',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    g: 0.04887218045112782,
                    s: 0.11654135338345864,
                    y: 0.03007518796992481,
                    r: 0.17293233082706766,
                    n: 0.07894736842105263,
                    z: 0.022556390977443608,
                    t: 0.03759398496240601,
                    d: 0.022556390977443608,
                    u: 0.007518796992481203,
                    k: 0.15413533834586465,
                    m: 0.12406015037593984,
                    c: 0.041353383458646614,
                    w: 0.015037593984962405,
                    i: 0.011278195488721804,
                    o: 0.022556390977443608,
                    h: 0.007518796992481203,
                    j: 0.045112781954887216,
                    b: 0.022556390977443608,
                    e: 0.015037593984962405,
                    f: 0.0037593984962406013
                }
            },
            w: {
                value: 'w',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {a: 1}
            },
            r: {
                value: 'r',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    i: 0.22435897435897437,
                    y: 0.019230769230769232,
                    a: 0.4807692307692308,
                    o: 0.14743589743589744,
                    u: 0.10256410256410256,
                    e: 0.019230769230769232,
                    d: 0.00641025641025641
                }
            },
            j: {
                value: 'j',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    ou: 0.37209302325581395,
                    i: 0.5813953488372093,
                    a: 0.023255813953488372,
                    u: 0.023255813953488372
                }
            },
            ou: {
                value: 'ou',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    r: 0.056338028169014086,
                    n: 0.11267605633802817,
                    k: 0.09859154929577464,
                    b: 0.028169014084507043,
                    d: 0.04225352112676056,
                    s: 0.14084507042253522,
                    g: 0.04225352112676056,
                    o: 0.014084507042253521,
                    z: 0.014084507042253521,
                    m: 0.14084507042253522,
                    t: 0.15492957746478872,
                    f: 0.056338028169014086,
                    c: 0.014084507042253521,
                    y: 0.014084507042253521,
                    e: 0.014084507042253521,
                    i: 0.014084507042253521,
                    j: 0.028169014084507043,
                    '-': 0.014084507042253521
                }
            },
            b: {
                value: 'b',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    u: 0.15789473684210525,
                    o: 0.039473684210526314,
                    a: 0.4473684210526316,
                    i: 0.11842105263157894,
                    ou: 0.02631578947368421,
                    e: 0.21052631578947367
                }
            },
            uu: {
                value: 'uu',
                acceptableAsFirst: false,
                acceptableAsMiddle: true,
                acceptableAsLast: true,
                chain: {
                    ou: 0.2727272727272727,
                    s: 0.18181818181818182,
                    b: 0.09090909090909091,
                    k: 0.09090909090909091,
                    g: 0.18181818181818182,
                    j: 0.09090909090909091,
                    n: 0.09090909090909091
                }
            },
            f: {
                value: 'f',
                acceptableAsFirst: true,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    u: 0.9705882352941176,
                    '': 0.029411764705882353
                }
            },
            p: {
                value: 'p',
                acceptableAsFirst: false,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    p: 0.3333333333333333,
                    o: 0.16666666666666666,
                    u: 0.16666666666666666,
                    e: 0.16666666666666666,
                    s: 0.16666666666666666
                }
            },
            '-': {
                value: '-',
                acceptableAsFirst: false,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    a: 0.4,
                    u: 0.2,
                    ou: 0.2,
                    o: 0.2
                }
            },
            l: {
                value: 'l',
                acceptableAsFirst: false,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    '': 0.5,
                    p: 0.5
                }
            },
            '': {
                value: '',
                acceptableAsFirst: false,
                acceptableAsMiddle: true,
                acceptableAsLast: false,
                chain: {
                    '': 0.5,
                    w: 0.16666666666666666,
                    o: 0.16666666666666666,
                    t: 0.16666666666666666
                }
            }
        };

    /* jscs: enable */

    return new WMC(rules, data);
}());

