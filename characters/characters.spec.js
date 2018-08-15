const characters = require('./characters');

describe ('getCharacterCount', () => {
  it('should return a count of the characters in a string', () => {
    expect(characters.getCharacterCount('test')).toEqual(4);
  });

  it('should return 0 if no string passed', () => {
    expect(characters.getCharacterCount()).toEqual(0);
  });
});

describe ('countVowls', () => {
  it('should return the right number of vowls given a string', () => {
    expect(characters.countVowls('This is a test')).toEqual(4);
  });
});
