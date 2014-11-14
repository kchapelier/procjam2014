var japaneseMasculineFirstnames = (function () {
    "use strict";

    var rules = {
        elementsMinNumber: 2,
        elementsMaxNumber: 4,
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
            acceptableAsLast: false,
            chain: {
                ki: 0.75,
                ra: 0.015625,
                ri: 0.046875,
                sa: 0.015625,
                to: 0.015625,
                tsu: 0.109375,
                zu: 0.015625,
                n: 0.015625,
                yu: 0.015625
            }
        },
        ki: {
            value: 'ki',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                fu: 0.011627906976744186,
                hi: 0.08139534883720931,
                ma: 0.023255813953488372,
                mi: 0.046511627906976744,
                no: 0.046511627906976744,
                o: 0.05813953488372093,
                sa: 0.023255813953488372,
                shi: 0.011627906976744186,
                to: 0.03488372093023256,
                tsu: 0.023255813953488372,
                yo: 0.20930232558139536,
                yu: 0.011627906976744186,
                chi: 0.18604651162790697,
                ha: 0.03488372093023256,
                he: 0.011627906976744186,
                i: 0.011627906976744186,
                ku: 0.011627906976744186,
                n: 0.06976744186046512,
                shou: 0.011627906976744186,
                ra: 0.023255813953488372,
                mo: 0.011627906976744186,
                ya: 0.023255813953488372,
                mu: 0.011627906976744186,
                ta: 0.011627906976744186
            }
        },
        fu: {
            value: 'fu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                mi: 0.75,
                ji: 0.041666666666666664,
                sa: 0.125,
                to: 0.041666666666666664,
                yu: 0.041666666666666664
            }
        },
        mi: {
            value: 'mi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                tsu: 0.43037974683544306,
                a: 0.012658227848101266,
                hi: 0.02531645569620253,
                o: 0.0759493670886076,
                to: 0.012658227848101266,
                ya: 0.02531645569620253,
                chi: 0.27848101265822783,
                ki: 0.012658227848101266,
                ku: 0.012658227848101266,
                ne: 0.02531645569620253,
                no: 0.012658227848101266,
                yo: 0.012658227848101266,
                do: 0.012658227848101266,
                ko: 0.012658227848101266,
                na: 0.012658227848101266,
                ra: 0.012658227848101266,
                sa: 0.012658227848101266
            }
        },
        hi: {
            value: 'hi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ko: 0.17553191489361702,
                ro: 0.35106382978723405,
                sa: 0.19148936170212766,
                to: 0.10106382978723404,
                de: 0.1595744680851064,
                ra: 0.010638297872340425,
                ka: 0.005319148936170213,
                na: 0.005319148936170213
            }
        },
        ko: {
            value: 'ko',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                go: 0.1111111111111111,
                ji: 0.2222222222222222,
                ki: 0.1111111111111111,
                so: 0.1111111111111111,
                ta: 0.1111111111111111,
                ya: 0.1111111111111111,
                to: 0.2222222222222222
            }
        },
        ro: {
            value: 'ro',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ku: 0.09090909090909091,
                a: 0.030303030303030304,
                fu: 0.030303030303030304,
                hi: 0.06060606060606061,
                ji: 0.030303030303030304,
                ka: 0.06060606060606061,
                ki: 0.030303030303030304,
                ma: 0.030303030303030304,
                mi: 0.09090909090909091,
                mo: 0.030303030303030304,
                na: 0.030303030303030304,
                no: 0.06060606060606061,
                shi: 0.06060606060606061,
                ta: 0.06060606060606061,
                to: 0.12121212121212122,
                tsu: 0.030303030303030304,
                ya: 0.06060606060606061,
                yo: 0.030303030303030304,
                yu: 0.030303030303030304,
                mu: 0.030303030303030304
            }
        },
        sa: {
            value: 'sa',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                da: 0.11578947368421053,
                o: 0.07368421052631578,
                no: 0.05263157894736842,
                za: 0.010526315789473684,
                hi: 0.06315789473684211,
                mi: 0.05263157894736842,
                mo: 0.021052631578947368,
                shi: 0.031578947368421054,
                ta: 0.042105263157894736,
                te: 0.021052631578947368,
                to: 0.07368421052631578,
                ya: 0.031578947368421054,
                yo: 0.021052631578947368,
                yu: 0.021052631578947368,
                mu: 0.042105263157894736,
                ku: 0.07368421052631578,
                bu: 0.031578947368421054,
                a: 0.010526315789473684,
                chi: 0.021052631578947368,
                fu: 0.010526315789473684,
                ha: 0.010526315789473684,
                i: 0.021052631578947368,
                ie: 0.010526315789473684,
                ji: 0.010526315789473684,
                ka: 0.042105263157894736,
                ki: 0.021052631578947368,
                na: 0.010526315789473684,
                ru: 0.010526315789473684,
                tsu: 0.031578947368421054,
                zu: 0.010526315789473684
            }
        },
        to: {
            value: 'to',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                shi: 0.384,
                mo: 0.248,
                mu: 0.024,
                ki: 0.064,
                a: 0.008,
                ha: 0.008,
                hi: 0.024,
                i: 0.008,
                ji: 0.008,
                no: 0.008,
                su: 0.008,
                ta: 0.008,
                tsu: 0.008,
                ya: 0.008,
                yu: 0.008,
                za: 0.008,
                na: 0.008,
                ru: 0.016,
                mi: 0.024,
                ra: 0.016,
                go: 0.008,
                ku: 0.04,
                yo: 0.048,
                se: 0.008
            }
        },
        ma: {
            value: 'ma',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                sa: 0.7333333333333333,
                tsu: 0.08888888888888889,
                ta: 0.022222222222222223,
                hi: 0.011111111111111112,
                ki: 0.022222222222222223,
                mo: 0.011111111111111112,
                na: 0.011111111111111112,
                n: 0.022222222222222223,
                re: 0.011111111111111112,
                su: 0.03333333333333333,
                no: 0.011111111111111112,
                ko: 0.022222222222222223
            }
        },
        tsu: {
            value: 'tsu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                gu: 0.11864406779661017,
                hi: 0.11016949152542373,
                o: 0.0847457627118644,
                shi: 0.0423728813559322,
                to: 0.0423728813559322,
                ya: 0.0423728813559322,
                ji: 0.03389830508474576,
                a: 0.025423728813559324,
                e: 0.00847457627118644,
                ki: 0.059322033898305086,
                ma: 0.03389830508474576,
                na: 0.03389830508474576,
                no: 0.0423728813559322,
                su: 0.01694915254237288,
                ta: 0.025423728813559324,
                te: 0.01694915254237288,
                yo: 0.0423728813559322,
                yu: 0.025423728813559324,
                chi: 0.00847457627118644,
                gi: 0.01694915254237288,
                ha: 0.01694915254237288,
                ne: 0.0847457627118644,
                mi: 0.01694915254237288,
                rou: 0.01694915254237288,
                zou: 0.00847457627118644,
                ru: 0.00847457627118644,
                ba: 0.00847457627118644,
                ka: 0.00847457627118644
            }
        },
        no: {
            value: 'no',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                bu: 0.4946236559139785,
                ri: 0.3763440860215054,
                su: 0.0967741935483871,
                ru: 0.010752688172043012,
                bo: 0.010752688172043012,
                zo: 0.010752688172043012
            }
        },
        bu: {
            value: 'bu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.06451612903225806,
                rou: 0.06451612903225806,
                mi: 0.06451612903225806,
                a: 0.06451612903225806,
                ha: 0.03225806451612903,
                hi: 0.12903225806451613,
                ka: 0.06451612903225806,
                ma: 0.03225806451612903,
                mo: 0.03225806451612903,
                na: 0.06451612903225806,
                o: 0.03225806451612903,
                sa: 0.03225806451612903,
                su: 0.03225806451612903,
                ta: 0.03225806451612903,
                te: 0.03225806451612903,
                to: 0.0967741935483871,
                tsu: 0.03225806451612903,
                ya: 0.03225806451612903,
                yo: 0.03225806451612903,
                yu: 0.03225806451612903
            }
        },
        ri: {
            value: 'ri',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                hi: 0.15,
                na: 0.025,
                to: 0.025,
                ka: 0.05,
                ma: 0.05,
                o: 0.05,
                ta: 0.075,
                a: 0.075,
                ya: 0.05,
                yu: 0.075,
                fu: 0.05,
                yo: 0.025,
                i: 0.025,
                ki: 0.05,
                n: 0.05,
                mi: 0.025,
                no: 0.025,
                shi: 0.025,
                tsu: 0.05,
                ku: 0.025,
                sa: 0.025
            }
        },
        o: {
            value: 'o',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ki: 0.1724137931034483,
                mi: 0.13793103448275862,
                fu: 0.034482758620689655,
                hi: 0.13793103448275862,
                ji: 0.034482758620689655,
                ka: 0.034482758620689655,
                ma: 0.034482758620689655,
                mo: 0.034482758620689655,
                shi: 0.034482758620689655,
                ta: 0.06896551724137931,
                to: 0.06896551724137931,
                ya: 0.034482758620689655,
                yu: 0.034482758620689655,
                zu: 0.034482758620689655,
                sa: 0.034482758620689655,
                ri: 0.034482758620689655,
                ru: 0.034482758620689655
            }
        },
        da: {
            value: 'da',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.19047619047619047,
                a: 0.047619047619047616,
                ha: 0.047619047619047616,
                hi: 0.09523809523809523,
                o: 0.07142857142857142,
                to: 0.07142857142857142,
                yo: 0.07142857142857142,
                za: 0.023809523809523808,
                chi: 0.023809523809523808,
                fu: 0.023809523809523808,
                ka: 0.023809523809523808,
                ma: 0.023809523809523808,
                mi: 0.023809523809523808,
                na: 0.07142857142857142,
                no: 0.047619047619047616,
                shi: 0.023809523809523808,
                ta: 0.023809523809523808,
                te: 0.023809523809523808,
                tsu: 0.047619047619047616,
                yu: 0.023809523809523808
            }
        },
        shi: {
            value: 'shi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ge: 0.28688524590163933,
                rou: 0.040983606557377046,
                chi: 0.00819672131147541,
                kou: 0.00819672131147541,
                n: 0.11475409836065574,
                zu: 0.01639344262295082,
                a: 0.00819672131147541,
                ha: 0.00819672131147541,
                hi: 0.08196721311475409,
                ka: 0.04918032786885246,
                ki: 0.02459016393442623,
                ma: 0.02459016393442623,
                mi: 0.040983606557377046,
                na: 0.040983606557377046,
                no: 0.040983606557377046,
                o: 0.01639344262295082,
                ta: 0.03278688524590164,
                tsu: 0.01639344262295082,
                ya: 0.03278688524590164,
                yu: 0.01639344262295082,
                zou: 0.00819672131147541,
                fu: 0.00819672131147541,
                i: 0.00819672131147541,
                ku: 0.00819672131147541,
                sa: 0.00819672131147541,
                shi: 0.00819672131147541,
                su: 0.00819672131147541,
                te: 0.00819672131147541,
                to: 0.01639344262295082,
                on: 0.00819672131147541
            }
        },
        ge: {
            value: 'ge',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                n: 0.1875,
                mo: 0.03125,
                ta: 0.09375,
                a: 0.03125,
                fu: 0.03125,
                ha: 0.03125,
                hi: 0.0625,
                ka: 0.03125,
                ki: 0.03125,
                ma: 0.0625,
                mi: 0.0625,
                na: 0.03125,
                no: 0.0625,
                o: 0.03125,
                ru: 0.03125,
                to: 0.0625,
                ya: 0.03125,
                yo: 0.03125,
                yu: 0.03125,
                ri: 0.03125
            }
        },
        gu: {
            value: 'gu',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {ru: 1}
        },
        yo: {
            value: 'yo',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                shi: 0.7204301075268817,
                a: 0.021505376344086023,
                fu: 0.010752688172043012,
                hi: 0.043010752688172046,
                ji: 0.010752688172043012,
                ka: 0.021505376344086023,
                mo: 0.010752688172043012,
                na: 0.010752688172043012,
                no: 0.010752688172043012,
                su: 0.010752688172043012,
                ta: 0.021505376344086023,
                yu: 0.010752688172043012,
                ma: 0.010752688172043012,
                zou: 0.010752688172043012,
                ri: 0.07526881720430108
            }
        },
        yu: {
            value: 'yu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                ki: 0.639344262295082,
                u: 0.29508196721311475,
                gi: 0.01639344262295082,
                go: 0.01639344262295082,
                ta: 0.01639344262295082,
                mu: 0.01639344262295082
            }
        },
        ra: {
            value: 'ra',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ta: 0.16666666666666666,
                no: 0.16666666666666666,
                shi: 0.16666666666666666,
                i: 0.3333333333333333,
                hi: 0.16666666666666666
            }
        },
        ta: {
            value: 'ta',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                rou: 0.12650602409638553,
                ka: 0.28313253012048195,
                mi: 0.012048192771084338,
                ru: 0.018072289156626505,
                ke: 0.15060240963855423,
                ro: 0.018072289156626505,
                ne: 0.006024096385542169,
                be: 0.006024096385542169,
                da: 0.1746987951807229,
                i: 0.04819277108433735,
                ku: 0.05421686746987952,
                mo: 0.006024096385542169,
                te: 0.006024096385542169,
                tsu: 0.08433734939759036,
                ma: 0.006024096385542169
            }
        },
        na: {
            value: 'na',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ga: 0.2153846153846154,
                ri: 0.24615384615384617,
                bu: 0.015384615384615385,
                o: 0.38461538461538464,
                mi: 0.03076923076923077,
                n: 0.015384615384615385,
                ru: 0.03076923076923077,
                ta: 0.015384615384615385,
                me: 0.015384615384615385,
                gi: 0.015384615384615385,
                tsu: 0.015384615384615385
            }
        },
        ga: {
            value: 'ga',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ku: 0.2,
                ha: 0.1,
                hi: 0.1,
                ma: 0.1,
                mi: 0.1,
                na: 0.1,
                no: 0.1,
                to: 0.2
            }
        },
        mo: {
            value: 'mo',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ri: 0.19672131147540983,
                to: 0.36065573770491804,
                n: 0.01639344262295082,
                ru: 0.01639344262295082,
                chi: 0.03278688524590164,
                ki: 0.03278688524590164,
                su: 0.01639344262295082,
                tsu: 0.01639344262295082,
                a: 0.01639344262295082,
                ha: 0.01639344262295082,
                hi: 0.08196721311475409,
                ji: 0.01639344262295082,
                ka: 0.01639344262295082,
                mi: 0.03278688524590164,
                no: 0.03278688524590164,
                ta: 0.01639344262295082,
                ya: 0.03278688524590164,
                yo: 0.01639344262295082,
                yu: 0.01639344262295082,
                e: 0.01639344262295082
            }
        },
        mu: {
            value: 'mu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.0625,
                ne: 0.625,
                ra: 0.1875,
                ku: 0.0625,
                tsu: 0.0625
            }
        },
        ya: {
            value: 'ya',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                na: 0.023255813953488372,
                to: 0.023255813953488372,
                su: 0.8604651162790697,
                hi: 0.046511627906976744,
                ta: 0.023255813953488372,
                te: 0.023255813953488372
            }
        },
        zu: {
            value: 'zu',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ma: 0.0967741935483871,
                mi: 0.16129032258064516,
                a: 0.03225806451612903,
                ha: 0.03225806451612903,
                hi: 0.12903225806451613,
                ki: 0.03225806451612903,
                na: 0.03225806451612903,
                no: 0.03225806451612903,
                o: 0.0967741935483871,
                rou: 0.03225806451612903,
                shi: 0.06451612903225806,
                ta: 0.03225806451612903,
                to: 0.0967741935483871,
                ya: 0.03225806451612903,
                yo: 0.03225806451612903,
                yu: 0.03225806451612903,
                ka: 0.03225806451612903
            }
        },
        ba: {
            value: 'ba',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                n: 0.3333333333333333,
                ru: 0.3333333333333333,
                sa: 0.3333333333333333
            }
        },
        n: {
            value: 'n',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ri: 0.02666666666666667,
                ji: 0.16,
                ta: 0.16,
                i: 0.18666666666666668,
                zo: 0.02666666666666667,
                pa: 0.013333333333333334,
                ki: 0.09333333333333334,
                pei: 0.04,
                ya: 0.05333333333333334,
                zou: 0.05333333333333334,
                ku: 0.013333333333333334,
                su: 0.05333333333333334,
                go: 0.02666666666666667,
                sa: 0.02666666666666667,
                shin: 0.013333333333333334,
                to: 0.013333333333333334,
                yu: 0.013333333333333334,
                shou: 0.013333333333333334,
                jou: 0.013333333333333334
            }
        },
        ji: {
            value: 'ji',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                rou: 0.5925925925925926,
                o: 0.037037037037037035,
                ro: 0.14814814814814814,
                i: 0.037037037037037035,
                n: 0.14814814814814814,
                me: 0.037037037037037035
            }
        },
        chi: {
            value: 'chi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ka: 0.125,
                ro: 0.020833333333333332,
                rou: 0.4583333333333333,
                ei: 0.020833333333333332,
                a: 0.0625,
                ha: 0.020833333333333332,
                hi: 0.08333333333333333,
                no: 0.020833333333333332,
                o: 0.041666666666666664,
                ta: 0.041666666666666664,
                ya: 0.020833333333333332,
                yo: 0.041666666666666664,
                to: 0.020833333333333332,
                ru: 0.020833333333333332
            }
        },
        ka: {
            value: 'ka',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ra: 0.008064516129032258,
                yo: 0.024193548387096774,
                ru: 0.016129032258064516,
                zu: 0.3064516129032258,
                tsu: 0.2661290322580645,
                ge: 0.024193548387096774,
                i: 0.016129032258064516,
                ki: 0.016129032258064516,
                ku: 0.016129032258064516,
                mu: 0.008064516129032258,
                ne: 0.08064516129032258,
                n: 0.024193548387096774,
                a: 0.008064516129032258,
                fu: 0.008064516129032258,
                hi: 0.04032258064516129,
                ma: 0.008064516129032258,
                mi: 0.008064516129032258,
                no: 0.016129032258064516,
                o: 0.016129032258064516,
                shi: 0.008064516129032258,
                to: 0.024193548387096774,
                u: 0.008064516129032258,
                ya: 0.016129032258064516,
                yu: 0.008064516129032258,
                na: 0.008064516129032258,
                e: 0.008064516129032258,
                sa: 0.008064516129032258
            }
        },
        chou: {
            value: 'chou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {e: 1}
        },
        e: {
            value: 'e',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.25,
                tsu: 0.125,
                hi: 0.25,
                ma: 0.125,
                mo: 0.125,
                sa: 0.125
            }
        },
        i: {
            value: 'i',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                chi: 0.4369747899159664,
                go: 0.025210084033613446,
                ki: 0.03361344537815126,
                ro: 0.008403361344537815,
                shin: 0.008403361344537815,
                su: 0.03361344537815126,
                zou: 0.04201680672268908,
                ha: 0.008403361344537815,
                e: 0.04201680672268908,
                k: 0.008403361344537815,
                ku: 0.01680672268907563,
                ppei: 0.008403361344537815,
                sa: 0.025210084033613446,
                ssei: 0.008403361344537815,
                ta: 0.01680672268907563,
                wa: 0.008403361344537815,
                ji: 0.08403361344537816,
                to: 0.008403361344537815,
                i: 0.058823529411764705,
                ju: 0.008403361344537815,
                no: 0.008403361344537815,
                shi: 0.03361344537815126,
                zo: 0.008403361344537815,
                gen: 0.008403361344537815,
                hou: 0.008403361344537815,
                ga: 0.008403361344537815,
                ko: 0.008403361344537815,
                o: 0.008403361344537815,
                tsu: 0.008403361344537815,
                zu: 0.008403361344537815
            }
        },
        cho: {
            value: 'cho',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {ki: 1}
        },
        chu: {
            value: 'chu',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {u: 1}
        },
        u: {
            value: 'u',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.1111111111111111,
                bei: 0.022222222222222223,
                ki: 0.06666666666666667,
                shi: 0.044444444444444446,
                ta: 0.13333333333333333,
                zou: 0.08888888888888889,
                he: 0.044444444444444446,
                ji: 0.1111111111111111,
                no: 0.022222222222222223,
                sa: 0.06666666666666667,
                sei: 0.044444444444444446,
                su: 0.06666666666666667,
                ya: 0.044444444444444446,
                go: 0.022222222222222223,
                hei: 0.022222222222222223,
                ma: 0.022222222222222223,
                me: 0.022222222222222223,
                dai: 0.022222222222222223,
                to: 0.022222222222222223
            }
        },
        go: {
            value: 'go',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.3333333333333333,
                ro: 0.3333333333333333,
                rou: 0.3333333333333333
            }
        },
        ku: {
            value: 'ku',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                to: 0.07692307692307693,
                ni: 0.3333333333333333,
                o: 0.10256410256410256,
                rou: 0.10256410256410256,
                ji: 0.10256410256410256,
                ro: 0.05128205128205128,
                ma: 0.05128205128205128,
                ra: 0.02564102564102564,
                su: 0.02564102564102564,
                mi: 0.02564102564102564,
                ya: 0.02564102564102564,
                zou: 0.02564102564102564,
                ta: 0.02564102564102564,
                ru: 0.02564102564102564
            }
        },
        shin: {
            value: 'shin',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        su: {
            value: 'su',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ke: 0.5,
                e: 0.02631578947368421,
                o: 0.039473684210526314,
                zou: 0.013157894736842105,
                gu: 0.013157894736842105,
                mi: 0.06578947368421052,
                na: 0.02631578947368421,
                su: 0.013157894736842105,
                mu: 0.013157894736842105,
                a: 0.013157894736842105,
                fu: 0.013157894736842105,
                ha: 0.013157894736842105,
                hi: 0.05263157894736842,
                ji: 0.02631578947368421,
                ka: 0.013157894736842105,
                ki: 0.013157894736842105,
                ma: 0.013157894736842105,
                no: 0.02631578947368421,
                rou: 0.013157894736842105,
                shi: 0.013157894736842105,
                ta: 0.013157894736842105,
                to: 0.02631578947368421,
                yo: 0.013157894736842105,
                yu: 0.013157894736842105,
                ba: 0.013157894736842105
            }
        },
        ke: {
            value: 'ke',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.2641509433962264,
                n: 0.3018867924528302,
                sa: 0.018867924528301886,
                hi: 0.09433962264150944,
                ma: 0.018867924528301886,
                to: 0.07547169811320754,
                tsu: 0.018867924528301886,
                a: 0.018867924528301886,
                fu: 0.018867924528301886,
                ha: 0.018867924528301886,
                ji: 0.018867924528301886,
                no: 0.018867924528301886,
                o: 0.018867924528301886,
                ru: 0.018867924528301886,
                shi: 0.018867924528301886,
                ya: 0.018867924528301886,
                yo: 0.018867924528301886,
                zou: 0.018867924528301886
            }
        },
        zou: {
            value: 'zou',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        ei: {
            value: 'ei',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                i: 0.2222222222222222,
                ji: 0.2222222222222222,
                ki: 0.1111111111111111,
                no: 0.1111111111111111,
                shu: 0.1111111111111111,
                su: 0.1111111111111111,
                zou: 0.1111111111111111
            }
        },
        rou: {
            value: 'rou',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        shu: {
            value: 'shu',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                n: 0.55,
                u: 0.4,
                ko: 0.05
            }
        },
        za: {
            value: 'za',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {ne: 1}
        },
        ne: {
            value: 'ne',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                hi: 0.14285714285714285,
                ma: 0.03571428571428571,
                mo: 0.07142857142857142,
                su: 0.03571428571428571,
                ta: 0.07142857142857142,
                to: 0.10714285714285714,
                tsu: 0.03571428571428571,
                yo: 0.07142857142857142,
                i: 0.03571428571428571,
                o: 0.10714285714285714,
                no: 0.10714285714285714,
                shi: 0.03571428571428571,
                ha: 0.03571428571428571,
                ji: 0.03571428571428571,
                mi: 0.03571428571428571,
                yu: 0.03571428571428571
            }
        },
        zo: {
            value: 'zo',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {mu: 1}
        },
        gi: {
            value: 'gi',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.25,
                n: 0.25,
                o: 0.25,
                sa: 0.25
            }
        },
        ha: {
            value: 'ha',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                chi: 0.09090909090909091,
                ka: 0.022727272727272728,
                ru: 0.75,
                tsu: 0.045454545454545456,
                ya: 0.06818181818181818,
                ji: 0.022727272727272728
            }
        },
        ru: {
            value: 'ru',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                a: 0.08,
                chi: 0.04,
                hi: 0.28,
                ki: 0.04,
                no: 0.08,
                o: 0.08,
                ta: 0.04,
                to: 0.04,
                yo: 0.08,
                ma: 0.04,
                yu: 0.04,
                e: 0.04,
                ka: 0.04,
                mi: 0.08
            }
        },
        he: {
            value: 'he',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {i: 1}
        },
        de: {
            value: 'de',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                a: 0.047619047619047616,
                ha: 0.047619047619047616,
                hi: 0.09523809523809523,
                ji: 0.047619047619047616,
                ka: 0.047619047619047616,
                ki: 0.047619047619047616,
                ma: 0.047619047619047616,
                mi: 0.09523809523809523,
                no: 0.09523809523809523,
                o: 0.047619047619047616,
                shi: 0.047619047619047616,
                ta: 0.047619047619047616,
                to: 0.09523809523809523,
                tsu: 0.047619047619047616,
                yo: 0.09523809523809523,
                yu: 0.047619047619047616
            }
        },
        ni: {
            value: 'ni',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                a: 0.1111111111111111,
                hi: 0.3333333333333333,
                mi: 0.1111111111111111,
                o: 0.1111111111111111,
                ta: 0.1111111111111111,
                yu: 0.1111111111111111,
                e: 0.1111111111111111
            }
        },
        te: {
            value: 'te',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                ru: 0.5,
                o: 0.03125,
                i: 0.125,
                ppei: 0.03125,
                tsu: 0.3125
            }
        },
        ho: {
            value: 'ho',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {
                ku: 0.3333333333333333,
                zu: 0.3333333333333333,
                ta: 0.3333333333333333
            }
        },
        k: {
            value: 'k',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {ko: 1}
        },
        ppei: {
            value: 'ppei',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        ssei: {
            value: 'ssei',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        wa: {
            value: 'wa',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                o: 0.5,
                ta: 0.5
            }
        },
        pa: {
            value: 'pa',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {chi: 1}
        },
        jou: {
            value: 'jou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                i: 0.25,
                ji: 0.25,
                ki: 0.25,
                ta: 0.25
            }
        },
        ju: {
            value: 'ju',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                u: 0.46153846153846156,
                n: 0.5384615384615384
            }
        },
        bei: {
            value: 'bei',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        pei: {
            value: 'pei',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        shou: {
            value: 'shou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                go: 0.09090909090909091,
                hei: 0.09090909090909091,
                i: 0.09090909090909091,
                ji: 0.18181818181818182,
                ma: 0.09090909090909091,
                su: 0.09090909090909091,
                ta: 0.18181818181818182,
                ya: 0.09090909090909091,
                zou: 0.09090909090909091
            }
        },
        kou: {
            value: 'kou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                he: 0.09090909090909091,
                i: 0.18181818181818182,
                ki: 0.09090909090909091,
                no: 0.09090909090909091,
                sa: 0.09090909090909091,
                sei: 0.09090909090909091,
                shi: 0.09090909090909091,
                su: 0.09090909090909091,
                ta: 0.09090909090909091,
                zou: 0.09090909090909091
            }
        },
        sei: {
            value: 'sei',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        so: {
            value: 'so',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                n: 0.3333333333333333,
                no: 0.3333333333333333,
                ra: 0.3333333333333333
            }
        },
        kyou: {
            value: 'kyou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {
                he: 0.25,
                i: 0.25,
                ji: 0.25,
                su: 0.25
            }
        },
        kyu: {
            value: 'kyu',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {ki: 1}
        },
        re: {
            value: 're',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {
                o: 0.16666666666666666,
                i: 0.6666666666666666,
                n: 0.16666666666666666
            }
        },
        ie: {
            value: 'ie',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        be: {
            value: 'be',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {i: 1}
        },
        bo: {
            value: 'bo',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {ru: 1}
        },
        ryou: {
            value: 'ryou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                he: 0.1111111111111111,
                i: 0.1111111111111111,
                ji: 0.1111111111111111,
                ma: 0.1111111111111111,
                se: 0.1111111111111111,
                su: 0.1111111111111111,
                ta: 0.2222222222222222,
                zou: 0.1111111111111111
            }
        },
        se: {
            value: 'se',
            acceptableAsFirst: true,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {
                i: 0.8666666666666667,
                n: 0.06666666666666667,
                tsu: 0.06666666666666667
            }
        },
        ryu: {
            value: 'ryu',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {u: 1}
        },
        gen: {
            value: 'gen',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        hou: {
            value: 'hou',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        hei: {
            value: 'hei',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        sou: {
            value: 'sou',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {
                gen: 0.16666666666666666,
                i: 0.3333333333333333,
                ji: 0.16666666666666666,
                su: 0.16666666666666666,
                ta: 0.16666666666666666
            }
        },
        me: {
            value: 'me',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: true,
            chain: {ji: 1}
        },
        you: {
            value: 'you',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {
                hei: 0.125,
                i: 0.25,
                ji: 0.25,
                su: 0.125,
                ta: 0.125,
                zou: 0.125
            }
        },
        dai: {
            value: 'dai',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        ze: {
            value: 'ze',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: false,
            chain: {n: 1}
        },
        jun: {
            value: 'jun',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        kyo: {
            value: 'kyo',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        do: {
            value: 'do',
            acceptableAsFirst: false,
            acceptableAsMiddle: true,
            acceptableAsLast: false,
            chain: {ri: 1}
        },
        ren: {
            value: 'ren',
            acceptableAsFirst: true,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        },
        on: {
            value: 'on',
            acceptableAsFirst: false,
            acceptableAsMiddle: false,
            acceptableAsLast: true,
            chain: {}
        }
    };

    /* jscs: enable */

    return new WMC(rules, data);
}());
