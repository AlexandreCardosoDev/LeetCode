/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  aLenght = a.length -1
  bLenght = b.length -1
  len = aLenght > bLenght ? aLenght : bLenght
  result = []
  carry = 0
  for (let i = 0; i <= len; i++) {
    temp = carry + (Number(a[aLenght]) || 0) + (Number(b[bLenght]) || 0)
    result.unshift(temp % 2)
    if (temp > 1){
      carry = 1
    } else {
      carry = 0 
    }
    aLenght--
    bLenght--
  }
  if (carry === 1){
    result.unshift(1)
  }
  return result.join("")
};



var addBinaryUsingBigInt = function(a, b) {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};


console.log(addBinary("11", "1"))
//console.log(addBinary("1010", "1011"))