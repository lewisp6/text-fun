const R = require('ramda');

const countRegexMatches = (regex) => {
  return R.compose(R.length, R.match(regex));
}

const characters = {
  getCharacterCount: (characters = '') => characters.length,
  countVowls: countRegexMatches(/[aeiou]/gi),
  countConsonants: countRegexMatches(/[bcdfghjklmnpqrstvxzwy]/ig),
}

module.exports = characters;
