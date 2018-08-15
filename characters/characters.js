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
  }
}

module.exports = characters;
