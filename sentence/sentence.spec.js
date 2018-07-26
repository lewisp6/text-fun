const sentenceFunctions = require('./sentenceFunctions');

describe('getListOfWords', () => {
  it ('should get a list of words given a sentence', () => {
    const sentence = 'This is a test';
    const expected = ['This', 'is', 'a', 'test'];
    expect(sentenceFunctions.getListOfWords(sentence)).toEqual(expected);
  });

  it ('should return null for no sentence provided', () => {
    expect(sentenceFunctions.getListOfWords()).toEqual(null);
  });
});

describe('stripPunctuation', () => {
  it ('should return a sentence with punctuation stripped out', () => {
    const sentence = 'Wow, what a sentence!';
    const expected = 'Wow what a sentence';
    expect(sentenceFunctions.stripPunctuation(sentence)).toEqual(expected);
  });

  it ('should return null for no sentence provided', () => {
    expect(sentenceFunctions.stripPunctuation()).toEqual(null);
  });
});
