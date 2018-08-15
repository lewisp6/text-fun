function checkFirstLetterUppercase(word) {
  const firstLetter = word[0];
  return firstLetter === firstLetter.toUpperCase();
};

function checkUpperCaseWord(word) {
  return word === word.toUpperCase();
}

const filter = {
  findWordsStartingWithCapitalLetter: (words) => {
    return words.filter((word) => checkFirstLetterUppercase(word));
  },

  findUppercaseWords: (words) => {
    return words.filter((word) => checkUpperCaseWord(word));
  }
};

module.exports = filter;
