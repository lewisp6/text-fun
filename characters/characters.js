const characters = {
  getCharacterCount: (string = '') => {
    return string.length;
  },

  countVowls: (string = '') => {
    let vowls = string.match(/[aeiou]/gi);
    let count = 0;
    if (vowls) {
      count = characters.getCharacterCount(vowls);
    }
    return count;
  },

  countConsonants: (string = '') => {
    let consonants = string.match(/[bcdfghjklmnpqrstvxzwy]/ig);
    let count = 0;
    if (consonants) {
      count = characters.getCharacterCount(consonants);
    }
    return count;
  }
}

module.exports = characters;
