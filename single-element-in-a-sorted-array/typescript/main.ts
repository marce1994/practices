function singleNonDuplicate(nums: number[]) : number {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) { // O(log n) time complexity and O(1) space complexity
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === nums[mid - 1]) {
            if (mid % 2 === 0) {
                right = mid - 2;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid] === nums[mid + 1]) {
            if (mid % 2 === 0) {
                left = mid + 2;
            } else {
                right = mid - 1;
            }
        } else {
            return nums[mid];
        }
    }
    return nums[left] || 0;
}

function singleNonDuplicate1(nums: number[]) : number {
    var xor = 0;

    for (var i = 0; i < nums.length; i++) {  // O(n) time and O(1) space complexity
        xor ^= nums[i]; // XOR each element with the previous result to get the single non-duplicate element in the array.
    }

    return xor;
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([1,1,2,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([1,1,2,2,3,3,4,4,8,8,9,9]));

console.log(singleNonDuplicate1([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate1([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate1([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate1([1,1,2,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate1([1,1,2,2,3,3,4,4,8,8,9,9]));