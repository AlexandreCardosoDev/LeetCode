/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n === 0) {
      return
    }

    let lengthNum = m + n - 1
    m = m - 1
    n = n - 1
    while (n >= 0){
      if (m >= 0 && nums1[m] > nums2[n]){
        nums1[lengthNum] = nums1[m]
        m--
      } else {
        nums1[lengthNum] = nums2[n]
        n--
      }
      lengthNum--
    }
}



merge([1,2,3,0,0,0], 3, [2,5,6], 3)
//merge([1], 1, [], 0)
//merge([0], 0, [1], 1)

