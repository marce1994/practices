// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: Output: [5,6]

// Input: nums = [1,1]
// Output: [2]

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

function findDisappearedNumbers(nums: number[]): number[] { // O(n)
    var set = new Set(nums);
    var missed: number[] = [];

    for (let i = 0; i < nums.length; i++)
        if(!set.has(i+1)) missed.push(i+1);
    
    return missed;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));
console.log(findDisappearedNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105]));