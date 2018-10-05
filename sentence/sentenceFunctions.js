const R = require('ramda');

const sentenceFunctions = {
  getListOfWords: (sentence) => sentence ? R.split(' ', sentence) : null,
  stripPunctuation: (sentence) => sentence ?
    R.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"", sentence) : null,
};

module.exports = sentenceFunctions;
