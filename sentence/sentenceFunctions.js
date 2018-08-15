const sentenceFunctions = {
  getListOfWords: (sentence) => {
    if (!sentence) {
      return null;
    }

    return sentence.split(' ');
  },

  stripPunctuation: (sentence) => {
    if (!sentence) {
      return null;
    }

    return sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  }
};

module.exports = sentenceFunctions;
