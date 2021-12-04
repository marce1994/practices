// maximum product subarray
function maxProduct(nums: number[]): number {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = max;

        max = Math.max(
            Math.max(max * nums[i], min * nums[i]),
            nums[i]
        );
        
        min = Math.min(
            Math.min(temp * nums[i], min * nums[i]),
            nums[i]
        );

        result = Math.max(result, max);
    }
    return result;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0