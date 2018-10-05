const R = require('ramda');

const countRegexMatch = (regex) => {
  return function(string) {
    const match = string.match(regex);
    return match.length;
  }
}

const characters = {
  getCharacterCount: (characters = '') => characters.length,
  countVowls: countRegexMatch(/[aeiou]/gi),
  countConsonants: countRegexMatch(/[bcdfghjklmnpqrstvxzwy]/ig),
}

module.exports = characters;
