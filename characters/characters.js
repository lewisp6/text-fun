const R = require('ramda');

const countRegexMatch = (regex) => {
  return R.compose(R.length, R.match(regex));
}

const characters = {
  getCharacterCount: (characters = '') => characters.length,
  countVowls: countRegexMatch(/[aeiou]/gi),
  countConsonants: countRegexMatch(/[bcdfghjklmnpqrstvxzwy]/ig),
}

module.exports = characters;
