/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  if (s === "") return 0
  noStart = true
  result = ""
  for (let i = 0; i < s.length; i++) {
    if(noStart){
      if(s[i] === " ") continue
      if(s[i] === "-" || s[i] === "+" || !isNaN(s[i])){
        result = s[i]
        noStart = false
      } else if(isNaN(s[i])) {
        break
      }
    } else if(isNaN(s[i]) || s[i] === " ") {
      break 
    }  else {
      result += s[i]
    }
    
  }
  if(isNaN(result)){
    return 0
  } else if (Number(result < -2147483648)) {
    return -2147483648
  } else if (Number(result > 2147483647)) {
    return 2147483647
  } else {
    return Number(result)
  }
};

console.log(myAtoi("    -88827   5655  U"))