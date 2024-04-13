/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map()
    for (let index = 0; index < nums.length; index++) {
        let rest = target - nums[index]
        if (numMap.has(rest)){
            return [numMap.get(rest), index]
        }
        numMap.set(nums[index],index)        
    }
    return []
};

console.log(twoSum([1,2,3],3))