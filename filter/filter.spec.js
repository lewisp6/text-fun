const filter = require('./filter');

describe('findWordsStartingWithCapitalLetter', () => {
  it('should return an array of words that begin with a capital letter', () => {
    const words = ['hello', 'my', 'name', 'is', 'Bob'];
    const expected = ['Bob'];
    expect(filter.findWordsStartingWithCapitalLetter(words)).toEqual(expected);
  });
});

describe('findUppercaseWords', () => {
  it('should find all upper case words in an array', () => {
    const words = ['HELLO', 'my', 'NAME', 'is', 'bob'];
    const expected = ['HELLO', 'NAME'];
    expect(filter.findUppercaseWords(words)).toEqual(expected);
  });
});
