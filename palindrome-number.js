/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    word = x.toString()
    half = Math.floor(word.length  / 2)
    count = 0
    if (word.length == 1) return true
    
    while(count <= half) {
      if(word[count] !== word[word.length -1 -count])
        return false
      count++
    }
    return true
};

console.log(isPalindrome(1111))
