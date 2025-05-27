/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let j = 1
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[j - 1]) {
        nums[j] = nums[i] 
        j++
      }      
    }
    console.log(nums)
  return j
};

console.log(removeDuplicates([0,1,1,1,1,2,2,3,3,4]))