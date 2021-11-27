// Fix this code:
function productExceptSelf(nums: number[]): number[] {
    let result: number[] = [];
    let product: number = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }
    return result;
};

console.log(productExceptSelf([-1,1,0,-3,3])); // expect [0,0,9,0,0]
console.log(productExceptSelf([1,2,3,4])); // expect [24,12,8,6]
console.log(productExceptSelf([1,2,3,4,5])); // expect [120,60,40,30,24]