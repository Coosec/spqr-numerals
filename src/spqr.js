const ROMANS_MAP = new Map([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
]);

const Spqr = {
  toRoman(arabicNumber) {
    let romanNumeral = '';
    if (arabicNumber <= 0 || arabicNumber > 10000) {
      return ;
    }
    for (let [key, value] of ROMANS_MAP) {
      while (value <= arabicNumber) {
        romanNumeral += key;
        arabicNumber -= value;
      }
    }
    return romanNumeral;
  },
  toArabic(romanNumeral) {
    const romanNumeralValidator = /^M{0,10}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    let str = '';
    let arabicNumber = 0;
    if (!(typeof romanNumeral === 'string')) {
      return ;
    }
    str = romanNumeral.toUpperCase();
    if (!romanNumeralValidator.test(str)) {
      return ;
    }
    for (let [key, value] of ROMANS_MAP) {
      while (str.startsWith(key)) {
        arabicNumber += value;
        str = str.slice(key.length, str.length);
      }
    }
    return arabicNumber;
  }
};

export default Spqr;
