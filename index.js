const removeComments = require('./lib');
const fs = require('fs');
(run = function() {
    console.log('start find and remove comment');
    let inputFilePath = process.argv[2];
    let outputFilePath = process.argv[3];
    if( inputFilePath) {
        console.log('input file path invalid');
    }
    if( outputFilePath ) {
        console.log('output file path invalid');
    }
    let codes = fs.readFileSync(inputFilePath , 'utf8');
    let resultCode = removeComments(codes);
    console.log('finish find and remove');
    console.log('strat make out file');
    fs.writeFileSync(outputFilePath,resultCode);
})();