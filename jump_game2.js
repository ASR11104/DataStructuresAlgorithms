/**
 * Jump Game II
 You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
It's guaranteed that you can reach nums[n - 1].
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length === 1) {
        return 0
    }
    const last = nums.length - 1
    let jump = 0;
    let jumpCount = 0;
    let far = 0
    for (let i = 0; i < nums.length; i++) {
        jump = Math.max(jump, nums[i] + i)
        if (i === far) {
            far = jump
            jumpCount++
        }
        if (far >= last) {
            break
        }
    }
    return jumpCount
};



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function(nums) {
//     var output = 0
//     var jump = 0
//     var far = 0
//     for(i=0;i<nums.length-1;i++){
//         jump = Math.max(jump , nums[i] + i)
//         if(i == far){
//             far = jump
//             output ++
//         }
//     }
//     return output
// };

jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3])