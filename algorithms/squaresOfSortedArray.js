/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

var sortedSquares = (nums) => {
  const resultArray = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const smaller = nums[left];
    const larger = nums[right];
    if (Math.abs(smaller) > Math.abs(larger)) {
      resultArray[i] = smaller * smaller;
      left++;
    } else {
      resultArray[i] = larger * larger;
      right--;
    }
  }
  return resultArray;
};

console.log('expect to be [4,9,9,49,121]: ', sortedSquares([-7, -3, 2, 3, 11]));
console.log('expect to be [0,1,9,16,100]: ', sortedSquares([-4, -1, 0, 3, 10]));
