const characters = require('./characters');

describe ('getCharacterCount', () => {
  it ('should return a count of the characters in a string', () => {
    expect(characters.getCharacterCount('test')).toEqual(4);
  });

  it ('should return 0 if no string passed', () => {
    expect(characters.getCharacterCount()).toEqual(0);
  });
});

describe ('countVowls', () => {
  it ('should return the right number of vowls given a string', () => {
    expect(characters.countVowls('This is a test')).toEqual(4);
  });

  it ('should return 0 if there are no vowls', () => {
    expect(characters.countVowls('tst')).toEqual(0);
  });
});

describe('countConsonants', () => {
  it ('should return the right number of consonants given a string', () => {
    expect(characters.countConsonants('This is a test')).toEqual(7);
  });

  it ('should return 0 if there are no consonants', () => {
    expect(characters.countConsonants('aei')).toEqual(0);
  })
});
