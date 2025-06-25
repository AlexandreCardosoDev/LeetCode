/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length
  let letter = new Set()
  let count = 0
  let biggest = 0
  for (let i = 0; i < s.length; i++) {
    letter.clear()
    count = 0
    if (biggest + i >= s.length) break
    for (let j = i; j < s.length; j++) {
      if (!letter.has(s[j])){
        letter.add(s[j])
        count++
      } else {
        break
      }
    }
    if(biggest < count) biggest = count    
  }
  return biggest
};


var lengthOfLongestSubstringBest = function(s) {
  let current = "";  // store current substring without repeats
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        // If character is already in current string, remove up to that point
        if (current.includes(ch)) {
            let index = current.indexOf(ch);
            current = current.slice(index + 1);
        }

        current += ch;  // Add current character
        maxLen = Math.max(maxLen, current.length);  // Update max
    }

    return maxLen;
    
};


function lengthOfLongestSubstringChatGPT(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring("asdfg"))
console.log(lengthOfLongestSubstringChatGPT("aaaadvdfaaaa123456789"))







 // if (s.length <= 1) return s.length
 // let letter = new Set()
 // let count = 0
 // let biggest = 0
 // for (let i = 0; i < s.length; i++) {
 //   if(biggest < count) biggest = count
 //   letter.clear()
 //   count = 0
 //   for (let j = i; j < s.length; j++) {
 //     if (!letter.has(s[j])){
 //       count++
 //     } else {
 //       exit
 //     }
 //     letter.add(s[j])
 //   }
 // }
 // return biggest > count ? biggest : count