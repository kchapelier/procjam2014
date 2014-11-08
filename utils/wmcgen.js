/**
 * Example usage : node utils/wmcgen.js data/names/japanese-feminine-firstnames.js > file.json
 */

"use strict";



var fs = require('fs');

var file = process.argv.length > 2 ? process.argv[2]: null;

if(!file) {
    throw new Error('wmcgen need to be given a filepath');
}

fs.readFile(file, { encoding: 'utf8' }, function(error, data) {
    generation(data);
});

var generation = function(content) {
    var names = content.toString().split('\n');

    var values = {};

    //var maxFirst = 0;
    //var maxLast = 0;
    //var maxMiddle = 0;

    names
        .filter(function(name) { return name.trim() !== '' && name[0] !== '#'; })
        .forEach(function(name) {

            name = name.split(' ');

            var previous = null;

            for(var x = 0; x < name.length; x++) {
                var syl = name[x];

                var syllable = (!!values[syl] ? values[syl] : (values[syl] = {value : syl, acceptableAsFirst : 0, acceptableAsMiddle : 0, acceptableAsLast : 0, chain : {}}));

                if(previous) {
                    previous.chain[syl] = (!!previous.chain[syl] ? previous.chain[syl] + 1 : 1);
                }

                if(x === 0) {
                    syllable.acceptableAsFirst++;
                    //maxFirst = Math.max(maxFirst, syllable.acceptableAsFirst);
                }

                if(x === name.length - 1) {
                    syllable.acceptableAsLast++;
                    //maxLast = Math.max(maxLast, syllable.acceptableAsLast);
                }

                if(x > 0 && x < name.length - 1) {
                    syllable.acceptableAsMiddle++;
                    //maxMiddle = Math.max(maxMiddle, syllable.acceptableAsMiddle);
                }

                previous = syllable;
            }
        });

    //maxFirst = Math.max(1, maxFirst / 8);
    //maxLast = Math.max(1, maxLast / 8);
    //maxMiddle = Math.max(1, maxMiddle / 8);

    for(var k in values) {
        if(values.hasOwnProperty(k)) {
            var syllable = values[k];

            syllable.acceptableAsFirst = syllable.acceptableAsFirst > 0; //Math.min(1, syllable.acceptableAsFirst / maxFirst);
            syllable.acceptableAsLast = syllable.acceptableAsLast > 0; //Math.min(1, syllable.acceptableAsLast / maxLast);
            syllable.acceptableAsMiddle = syllable.acceptableAsMiddle > 0; //Math.min(1, syllable.acceptableAsMiddle / maxMiddle);

            var total = 0;
            for (var syl in syllable.chain) {
                if (syllable.chain.hasOwnProperty(syl)) {
                    total += syllable.chain[syl];
                }
            }

            for (var syl in syllable.chain) {
                if (syllable.chain.hasOwnProperty(syl)) {
                    syllable.chain[syl] = (syl === k ? 0.6 : 0.9) * syllable.chain[syl] / total;
                }
            }
        }
    }

    console.log(values);
};
