



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const a = nums.map(x => 0)
    for(let i = 0; i<nums.length; i++){
        let index = i+k
        if(index >= nums.length){
            index = index%nums.length
             a[index] = nums[i]
        }else{
            a[index] = nums[i]
        }
    }
    nums = a
    return nums
}

/*
Intuition
If you want to solve in the O(1) space complexity, this is quite tricky.
If you reverse the array, you'll see that the portion of the rotated array will come in start. For example,

[1,2,3,4,5,6,7]

After reversing,

[7,6,5,4,3,2,1]

The array then can be seen in two parts,

[7,6,5, | 4,3,2,1]

Rotate the first part,

[5,6,7, | 4,3,2,1]

Reverse the second part.

[5,6,7, | 1,2,3,4]

Complexity
Time complexity: O(n)
Space complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

};

rotate([1,2,3,4,5,6,7], 3)
