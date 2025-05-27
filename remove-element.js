/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    i = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val){
        nums[i] = nums[j]
        i++
      }
    }
    console.log(nums)
    return i
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))