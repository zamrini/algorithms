/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

var search = (nums, target) => {
  // set parameters to modify search midpoint
  let left = 0;
  let right = nums.length - 1; // 5

  // while there are still valid indices to search
  while (left <= right) {
    // if we find the target, return the index
    // if the target is less than the nums[midpoint], adjust right border left of midpoint
    // if target is greater, adjust left border
    let pivot = Math.floor(left + right) / 2;

    if (nums[pivot] == target) {
      return pivot;
    }

    if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  // if target does not exist in nums, return -1
  return -1;
};

console.log('expect to be 4: ', search([-1, 0, 3, 5, 9, 12], 9)); // expect to be 4
console.log('expect to be -1: ', search([-1, 0, 3, 5, 9, 12], 2)); // expect to be 2
