const R = require('ramda');

const filterBy = criteria => R.filter(criteria);

const isWordUppercase = word => word === word.toUpperCase();
const isFirstLetterUppercase = word => word[0] === word[0].toUpperCase();

const filter = {
  findWordsStartingWithCapitalLetter: filterBy(isFirstLetterUppercase),
  findUppercaseWords: filterBy(isWordUppercase),
};

module.exports = filter;
