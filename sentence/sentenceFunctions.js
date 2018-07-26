const sentenceFunctions = {};

sentenceFunctions.getListOfWords = function getListOfWords(sentence) {
  if (!sentence) {
    return null;
  }

  return sentence.split(' ');
}

sentenceFunctions.stripPunctuation = function stripPunctuation(sentence) {
  if (!sentence) {
    return null;
  }

  return sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

module.exports = sentenceFunctions;
