/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  let firstWord = strs[0]
  let prefix = firstWord.length
  for (let i = 0; i < firstWord.length; i++) {
    if (prefix !== firstWord.length) break
    for (let j = 1; j < strs.length; j++) {
      if(firstWord[i] !== strs[j][i]){
        prefix = i
        break
      }      
    }
  }
  if (prefix === 0) return ""
  return firstWord.slice(0,prefix)
    
};


console.log(longestCommonPrefix(["flower","flower","falower"]))