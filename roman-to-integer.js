/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000]     
    ])
    let result = 0

    for (let index = s.length -1; index >= 0; index--) {
      let value = roman.get(s[index])
      if (index < s.length -1 && value < roman.get(s[index + 1])){
        result -= value 
      } else {
        result += value
      }
    }
    return result
};


console.log(romanToInt('MCMXCIV'))