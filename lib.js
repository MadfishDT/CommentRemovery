const extract = require('extract-comments');

function removeByIndex(source, startIndex , endIndex) {
    return source.substr(0,startIndex) + source.substr(startIndex + (endIndex - startIndex +1));
}

function runRemoveComment(code) {
    let comments = extract(code);
    let resultCode = '';
    if(comments && comments.length >0 ) {
        resultCode = removeByIndex(code, comments[0].range[0] , comments[0].range[1]);
        return runRemoveComment(resultCode);
    } else{
        return code;
    }
}

module.exports = runRemoveComment;

