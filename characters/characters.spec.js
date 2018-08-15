const characters = require('./characters');

describe ('getCharacterCount', () => {
  it('should return a count of the characters in a string', () => {
    expect(characters.getCharacterCount('test')).toEqual(4);
  });

  it('should return 0 if no string passed', () => {
    expect(characters.getCharacterCount()).toEqual(0);
  })
});
