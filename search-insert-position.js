/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Sequential Search
var searchInsert = function(nums, target) {
  let pos = 0
  if (target < nums[0]) return 0
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) return i
    if (nums[i] < target) {
      pos = i
    } else {
      return pos + 1
    }
  }
  return pos + 1
};

//Binary Search
var searchInsertBinary = function(nums, target) {
  let start = 0
  let end = nums.length -1

  while( start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] > target) {
      end = mid -1
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      return mid
    }
  }
  return start  
};


console.log(searchInsertBinary([1,3,5,6], 7))
