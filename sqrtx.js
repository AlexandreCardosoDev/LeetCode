/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    let left = 1;
    let right = Math.floor(x / 2) +1
    while (left < right){
      let mid = Math.floor((left + right) / 2)
      if (mid * mid === x) {
        return mid
      } else if (mid * mid < x){
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left - 1;
};

console.log(mySqrt(8))

