var japaneseFeminineFirstnames = (function () {
    "use strict";

    var rules = {
        elementsMinNumber: 2,
        elementsMaxNumber: 4,
        elementsPositionRules: true
    };

    /* jscs: disable */

    var data = {
        a: {
            value: 'a',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.1,
                ka: 0.05,
                ke: 0.025,
                ki: 0.175,
                ma: 0.025,
                mi: 0.025,
                n: 0.05,
                o: 0.025,
                sa: 0.05,
                su: 0.075,
                tsu: 0.05,
                ya: 0.2,
                yu: 0.1,
                zu: 0.05
            }
        },
        i: {
            value: 'i',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.375,
                mi: 0.08333333333333333,
                ri: 0.041666666666666664,
                chi: 0.041666666666666664,
                ku: 0.08333333333333333,
                tsu: 0.125,
                ki: 0.041666666666666664,
                sa: 0.041666666666666664,
                ka: 0.041666666666666664,
                na: 0.041666666666666664,
                o: 0.041666666666666664,
                zu: 0.041666666666666664
            }
        },
        ko: {
            value: 'ko',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ha: 0.14285714285714285,
                no: 0.14285714285714285,
                to: 0.5714285714285714,
                zu: 0.14285714285714285
            }
        },
        mi: {
            value: 'mi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.18032786885245902,
                ri: 0.01639344262295082,
                e: 0.04918032786885246,
                ka: 0.08196721311475409,
                chi: 0.04918032786885246,
                ho: 0.01639344262295082,
                i: 0.01639344262295082,
                ki: 0.03278688524590164,
                ku: 0.03278688524590164,
                mo: 0.01639344262295082,
                na: 0.06557377049180328,
                ne: 0.01639344262295082,
                no: 0.01639344262295082,
                sa: 0.08196721311475409,
                tsu: 0.06557377049180328,
                u: 0.01639344262295082,
                wa: 0.03278688524590164,
                ya: 0.03278688524590164,
                yo: 0.01639344262295082,
                yu: 0.06557377049180328,
                zu: 0.04918032786885246,
                re: 0.01639344262295082,
                do: 0.01639344262295082,
                ra: 0.01639344262295082
            }
        },
        ri: {
            value: 'ri',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ka: 0.14285714285714285,
                ko: 0.23809523809523808,
                e: 0.19047619047619047,
                na: 0.14285714285714285,
                yo: 0.047619047619047616,
                ho: 0.047619047619047616,
                tsu: 0.047619047619047616,
                ku: 0.047619047619047616,
                n: 0.047619047619047616,
                sa: 0.047619047619047616
            }
        },
        ka: {
            value: 'ka',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ne: 0.03125,
                ri: 0.0625,
                e: 0.0625,
                gu: 0.03125,
                ho: 0.03125,
                na: 0.125,
                n: 0.03125,
                ori: 0.03125,
                rin: 0.03125,
                su: 0.03125,
                tsu: 0.0625,
                yo: 0.0625,
                zu: 0.1875,
                ko: 0.09375,
                ru: 0.03125,
                o: 0.03125,
                to: 0.03125,
                sa: 0.03125
            }
        },
        ne: {
            value: 'ne',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {ko: 1}
        },
        ke: {
            value: 'ke',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                mi: 0.2,
                i: 0.6,
                ko: 0.2
            }
        },
        ki: {
            value: 'ki',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.16666666666666666,
                ko: 0.3888888888888889,
                na: 0.1111111111111111,
                ku: 0.1111111111111111,
                mi: 0.1111111111111111,
                yo: 0.05555555555555555,
                ra: 0.05555555555555555
            }
        },
        e: {
            value: 'e',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.35294117647058826,
                mi: 0.23529411764705882,
                i: 0.11764705882352941,
                ri: 0.17647058823529413,
                tsu: 0.058823529411764705,
                de: 0.058823529411764705
            }
        },
        na: {
            value: 'na',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                mi: 0.12121212121212122,
                tsu: 0.18181818181818182,
                e: 0.12121212121212122,
                ko: 0.15151515151515152,
                i: 0.030303030303030304,
                ga: 0.030303030303030304,
                na: 0.12121212121212122,
                se: 0.030303030303030304,
                o: 0.09090909090909091,
                ru: 0.030303030303030304,
                ta: 0.030303030303030304,
                me: 0.030303030303030304,
                gi: 0.030303030303030304
            }
        },
        ma: {
            value: 'ma',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ne: 0.029411764705882353,
                a: 0.029411764705882353,
                chi: 0.058823529411764705,
                do: 0.029411764705882353,
                ho: 0.029411764705882353,
                i: 0.058823529411764705,
                ki: 0.08823529411764706,
                mi: 0.058823529411764705,
                na: 0.058823529411764705,
                o: 0.058823529411764705,
                ri: 0.11764705882352941,
                sa: 0.08823529411764706,
                tsu: 0.029411764705882353,
                ya: 0.029411764705882353,
                yu: 0.11764705882352941,
                ko: 0.08823529411764706,
                su: 0.029411764705882353
            }
        },
        n: {
            value: 'n',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                zu: 0.25,
                ko: 0.25,
                na: 0.25,
                ri: 0.25
            }
        },
        zu: {
            value: 'zu',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                mi: 0.16666666666666666,
                sa: 0.1111111111111111,
                ru: 0.05555555555555555,
                e: 0.2222222222222222,
                ko: 0.2222222222222222,
                yo: 0.05555555555555555,
                ho: 0.05555555555555555,
                ki: 0.05555555555555555,
                ka: 0.05555555555555555
            }
        },
        o: {
            value: 'o',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.1,
                ko: 0.1,
                mi: 0.2,
                to: 0.2,
                ri: 0.3,
                ru: 0.1
            }
        },
        sa: {
            value: 'sa',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.13513513513513514,
                mi: 0.05405405405405406,
                to: 0.10810810810810811,
                e: 0.08108108108108109,
                ya: 0.10810810810810811,
                yo: 0.05405405405405406,
                ki: 0.10810810810810811,
                chi: 0.05405405405405406,
                da: 0.02702702702702703,
                ku: 0.05405405405405406,
                na: 0.02702702702702703,
                o: 0.05405405405405406,
                wa: 0.02702702702702703,
                yu: 0.05405405405405406,
                ka: 0.02702702702702703,
                tsu: 0.02702702702702703
            }
        },
        su: {
            value: 'su',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ka: 0.07692307692307693,
                mi: 0.46153846153846156,
                na: 0.07692307692307693,
                zu: 0.15384615384615385,
                e: 0.07692307692307693,
                ko: 0.07692307692307693,
                ba: 0.07692307692307693
            }
        },
        tsu: {
            value: 'tsu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.4,
                mi: 0.16666666666666666,
                e: 0.06666666666666667,
                yo: 0.03333333333333333,
                me: 0.03333333333333333,
                ne: 0.03333333333333333,
                ki: 0.13333333333333333,
                ru: 0.03333333333333333,
                na: 0.03333333333333333,
                ba: 0.03333333333333333,
                ka: 0.03333333333333333
            }
        },
        ya: {
            value: 'ya',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ka: 0.11764705882352941,
                ko: 0.29411764705882354,
                me: 0.058823529411764705,
                na: 0.058823529411764705,
                ne: 0.058823529411764705,
                no: 0.058823529411764705,
                bi: 0.058823529411764705,
                e: 0.058823529411764705,
                su: 0.11764705882352941,
                yo: 0.058823529411764705,
                te: 0.058823529411764705
            }
        },
        me: {
            value: 'me',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.375,
                gu: 0.25,
                i: 0.375
            }
        },
        no: {
            value: 'no',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                mi: 0.1111111111111111,
                ri: 0.3333333333333333,
                a: 0.1111111111111111,
                bu: 0.2222222222222222,
                do: 0.1111111111111111,
                zo: 0.1111111111111111
            }
        },
        yu: {
            value: 'yu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ka: 0.1,
                mi: 0.23333333333333334,
                ko: 0.06666666666666667,
                ra: 0.03333333333333333,
                ki: 0.16666666666666666,
                u: 0.1,
                ri: 0.2,
                i: 0.03333333333333333,
                me: 0.03333333333333333,
                mu: 0.03333333333333333
            }
        },
        chi: {
            value: 'chi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.17391304347826086,
                ha: 0.043478260869565216,
                ho: 0.043478260869565216,
                ka: 0.043478260869565216,
                na: 0.08695652173913043,
                sa: 0.043478260869565216,
                ya: 0.043478260869565216,
                yo: 0.13043478260869565,
                zu: 0.043478260869565216,
                ko: 0.17391304347826086,
                a: 0.043478260869565216,
                hi: 0.043478260869565216,
                to: 0.043478260869565216,
                ru: 0.043478260869565216
            }
        },
        ha: {
            value: 'ha',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ru: 0.5882352941176471,
                na: 0.17647058823529413,
                tsu: 0.11764705882352941,
                ji: 0.058823529411764705,
                ya: 0.058823529411764705
            }
        },
        ru: {
            value: 'ru',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                hi: 0.0625,
                ko: 0.125,
                na: 0.125,
                yo: 0.0625,
                mi: 0.375,
                ri: 0.125,
                e: 0.0625,
                ka: 0.0625
            }
        },
        ho: {
            value: 'ho',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {ta: 1}
        },
        to: {
            value: 'to',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                mi: 0.2,
                ri: 0.05,
                ko: 0.1,
                ha: 0.05,
                me: 0.05,
                ki: 0.05,
                ku: 0.05,
                mo: 0.3,
                shi: 0.05,
                yo: 0.05,
                se: 0.05
            }
        },
        yo: {
            value: 'yo',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.5384615384615384,
                i: 0.07692307692307693,
                u: 0.07692307692307693,
                shi: 0.3076923076923077
            }
        },
        fu: {
            value: 'fu',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {
                ji: 0.14285714285714285,
                ku: 0.14285714285714285,
                mi: 0.42857142857142855,
                sa: 0.14285714285714285,
                yu: 0.14285714285714285
            }
        },
        ji: {
            value: 'ji',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ko: 0.3333333333333333,
                tsu: 0.3333333333333333,
                me: 0.3333333333333333
            }
        },
        ku: {
            value: 'ku',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                mi: 0.26666666666666666,
                e: 0.13333333333333333,
                ko: 0.13333333333333333,
                ni: 0.13333333333333333,
                re: 0.06666666666666667,
                ru: 0.13333333333333333,
                ra: 0.13333333333333333
            }
        },
        hi: {
            value: 'hi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                de: 0.125,
                me: 0.0625,
                ro: 0.375,
                sa: 0.25,
                ka: 0.0625,
                na: 0.0625,
                to: 0.0625
            }
        },
        de: {
            value: 'de',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.5,
                mi: 0.5
            }
        },
        ro: {
            value: 'ro',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.2,
                ko: 0.2,
                yo: 0.2,
                mi: 0.2,
                mu: 0.2
            }
        },
        ju: {
            value: 'ju',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {n: 1}
        },
        gu: {
            value: 'gu',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ya: 0.5,
                mi: 0.5
            }
        },
        ori: {
            value: 'ori',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        rin: {
            value: 'rin',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        ni: {
            value: 'ni',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ko: 0.5,
                e: 0.5
            }
        },
        re: {
            value: 're',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                na: 0.3333333333333333,
                i: 0.5,
                n: 0.16666666666666666
            }
        },
        kyo: {
            value: 'kyo',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {ko: 1}
        },
        do: {
            value: 'do',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ka: 0.6666666666666666,
                ri: 0.3333333333333333
            }
        },
        ra: {
            value: 'ra',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.3333333333333333,
                ko: 0.3333333333333333,
                i: 0.3333333333333333
            }
        },
        mo: {
            value: 'mo',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ri: 0.06666666666666667,
                e: 0.2,
                mo: 0.26666666666666666,
                ka: 0.13333333333333333,
                ko: 0.13333333333333333,
                to: 0.06666666666666667,
                yo: 0.06666666666666667,
                mi: 0.06666666666666667
            }
        },
        u: {
            value: 'u',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ka: 0.3333333333333333,
                me: 0.3333333333333333,
                ko: 0.3333333333333333
            }
        },
        wa: {
            value: 'wa',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ko: 0.6666666666666666,
                ka: 0.3333333333333333
            }
        },
        bi: {
            value: 'bi',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        mu: {
            value: 'mu',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {tsu: 1}
        },
        ga: {
            value: 'ga',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {ko: 1}
        },
        se: {
            value: 'se',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                i: 0.3333333333333333,
                tsu: 0.6666666666666666
            }
        },
        bu: {
            value: 'bu',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {ko: 1}
        },
        zo: {
            value: 'zo',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {mi: 1}
        },
        ryo: {
            value: 'ryo',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {
                u: 0.6666666666666666,
                ko: 0.3333333333333333
            }
        },
        da: {
            value: 'da',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {ko: 1}
        },
        shi: {
            value: 'shi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ge: 0.1111111111111111,
                ho: 0.05555555555555555,
                i: 0.05555555555555555,
                ma: 0.05555555555555555,
                na: 0.05555555555555555,
                no: 0.16666666666666666,
                o: 0.05555555555555555,
                zu: 0.16666666666666666,
                ko: 0.1111111111111111,
                on: 0.05555555555555555,
                ka: 0.05555555555555555,
                mi: 0.05555555555555555
            }
        },
        ge: {
            value: 'ge',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ko: 0.5,
                ri: 0.5
            }
        },
        sho: {
            value: 'sho',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {ko: 1}
        },
        shu: {
            value: 'shu',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {ko: 1}
        },
        ta: {
            value: 'ta',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                e: 0.125,
                ka: 0.125,
                ke: 0.125,
                ma: 0.25,
                mi: 0.125,
                tsu: 0.125,
                ru: 0.125
            }
        },
        te: {
            value: 'te',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                i: 0.25,
                ru: 0.75
            }
        },
        gi: {
            value: 'gi',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {sa: 1}
        },
        on: {
            value: 'on',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        so: {
            value: 'so',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {ra: 1}
        },
        ba: {
            value: 'ba',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ru: 0.5,
                sa: 0.5
            }
        }
    };

    /* jscs: enable */

    return new WMC(rules, data);
}());
