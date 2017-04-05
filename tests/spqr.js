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

describe('Spqr.toArabic', () => {
  it('should not convert not correct roman numerals', () => {
    if (spqr.toArabic('IIIII') !== undefined) {
      throw Error('Spqr.toArabic should not convert not correct roman numerals');
    }
    if (spqr.toArabic('Sometext') !== undefined) {
      throw Error('Spqr.toArabic should not convert not correct roman numerals');
    }
    if (spqr.toArabic(20) !== undefined) {
      throw Error('Spqr.toArabic should not convert not correct roman numerals');
    }
  });

  it('should convert uppercase or downcase or mixed roman numerals', () => {
    const testData = [
      {'input': 'DcCxLvIiI', 'expected': 748},
      {'input': 'mcm', 'expected': 1900},
      {'input': 'MCMLxxxiv', 'expected': 1984}
    ];

    testData.forEach((e) => {
      if (spqr.toArabic(e.input) !== e.expected) {
        throw Error('Spqr.toArabic should convert uppercase or downcase or mixed roman numerals');
      }
    });
  });

  it('should returns correct arabic numbers', () => {
    const testData = [
      {'input': 'I', 'expected': 1},
      {'input': 'II', 'expected': 2},
      {'input': 'III', 'expected': 3},
      {'input': 'IV', 'expected': 4},
      {'input': 'V', 'expected': 5},
      {'input': 'VIII', 'expected': 8},
      {'input': 'DCCXLVIII', 'expected': 748},
      {'input': 'MCM', 'expected': 1900},
      {'input': 'MCMLXXXIV', 'expected': 1984},
      {'input': 'MMMMMMMMCCCXCIV', 'expected': 8394},
      {'input': 'MMMMMMMMMM', 'expected': 10000}
    ];

    testData.forEach((e) => {
      if (spqr.toArabic(e.input) !== e.expected) {
        throw Error('Spqr.toArabic returns wrong arabic numbers.');
      }
    });
  });
});
