/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  for (let i = s.length -1; i >= 0; i--) {
    if (s[i] !== ' '){
      let stringLength = 1
      if (i > 0) {
        for (let j = i -1; j>=0 && s[j] !== ' '; j--) {
          stringLength++
        }
      }
      return stringLength
    }
  }
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("l"))
console.log(lengthOfLastWord("laa    "))