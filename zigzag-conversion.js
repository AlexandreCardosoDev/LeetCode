/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s
  const rows = Array.from({ length: numRows }, () => "");
  r = 0
  down = true
  for (let i = 0; i < s.length; i++) {
    rows[r] += s[i]
    if (down) {
      r++
    }
    else {
      r--
    }
    if (r === numRows) {
      down = false
      r = r - 2
    }
    if (r === -1) {
      down = true
      r = r + 2
    }
  }
  return rows.join("")
};


function convertChatGPT(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array.from({ length: numRows }, () => "");
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
}


console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
console.log(convert("A", 1))


