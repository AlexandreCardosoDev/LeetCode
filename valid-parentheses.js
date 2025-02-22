/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var openBracket = []
  if (s.length === 0 || s.length % 2 != 0) return false
  if (s[0] === '}' || s[0] === ')' || s[0] === ']') return false
  for (let i = 0; i < s.length; i++) {
    console.log(openBracket)
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      openBracket.push(s[i])
    }
    else if (s[i] == '}' && openBracket[openBracket.length -1] == '{'){
      openBracket.pop()
    } else if (s[i] == ')' && openBracket[openBracket.length -1] == '('){
      openBracket.pop()
    } else if (s[i] == ']' && openBracket[openBracket.length -1] == '['){
      openBracket.pop()
    }  else {
      return false
    }     
      
  }
  return openBracket.length === 0 
};

console.log(isValid("(]()()"))
