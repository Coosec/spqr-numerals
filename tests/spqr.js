import spqr from '../src/spqr';

describe('Spqr', () => {
  it('is an object', () => {
    if (typeof spqr !== 'object') {
      throw Error('Spqr should be an object.');
    }
  });

  it('has toRoman method', () => {
    if (typeof spqr.toRoman !== 'function') {
      throw Error('Spqr.toRoman should be a function.');
    }
  });

  it('has toArabic method', () => {
    if (typeof spqr.toArabic !== 'function') {
      throw Error('Spqr.toArabic should be a function.');
    }
  });
});

describe('Spqr.toRoman', () => {
  it('should not convert numbers under 1', () => {
    if (spqr.toRoman(0) !== undefined) {
      throw Error('Spqr.toRoman should not convert numbers under 1.');
    }
    if (spqr.toRoman(-1) !== undefined) {
      throw Error('Spqr.toRoman should not convert numbers under 1.');
    }
  });

  it('should not convert numbers above 10000', () => {
    if (spqr.toRoman(10001) !== undefined) {
      throw Error('Spqr.toRoman should not convert numbers above 10000.');
    }
  });

  it('Should returns correct roman numerals', () => {
    const testData = [
      {'input': 1, 'expected': 'I'},
      {'input': 2, 'expected': 'II'},
      {'input': 3, 'expected': 'III'},
      {'input': 4, 'expected': 'IV'},
      {'input': 5, 'expected': 'V'},
      {'input': 8, 'expected': 'VIII'},
      {'input': 748, 'expected': 'DCCXLVIII'},
      {'input': 1900, 'expected': 'MCM'},
      {'input': 1984, 'expected': 'MCMLXXXIV'},
      {'input': 8394, 'expected': 'MMMMMMMMCCCXCIV'},
      {'input': 10000, 'expected': 'MMMMMMMMMM'}
    ];

    testData.forEach((e) => {
      if (spqr.toRoman(e.input) !== e.expected) {
        throw Error('Spqr.toRoman returns wrong roman numerals.');
      }
    });
  });
});
