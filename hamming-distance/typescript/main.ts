// Harming distance of two numbers is the number of positions at which the corresponding bits are different. Given two integers, write a function to calculate the Hamming distance.
// Example:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

function hammingDistance(x: number, y: number): number {
    let z = x ^ y; // XOR operation to get the difference between the two numbers in binary form (0s and 1s)
    console.log(x,y,z,z.toString(2));
    let count = 0; // Initialize the count variable to 0 to count the number of 1s in the binary form of the difference between the two numbers (z)

    while (z) { // Loop until z is 0 (i.e. the binary form of the difference between the two numbers is all 0s)
        z &= z - 1; // AND operation to get the binary form of the difference between the two numbers with the least significant bit removed (i.e. the least significant bit of z is removed) (i.e. the least significant bit of z is set to 0) (i.e. the least significant bit of z is removed) (i.e. the least significant bit of z is set to 0) (i.e. the least significant bit of z is removed) (i.e. the least significant bit of z is set to 0)
        console.log(z.toString(2));
        count++; // Increment the count variable by 1 to count the number of 1s in the binary form of the difference between the two numbers (z) (i.e. the number of times the AND operation is performed) (i.e. the number of times the AND operation is performed) (i.e. the number of times the AND operation is performed) (i.e. the number of times the AND operation is performed) (i.e. the number of times the AND operation is performed) (i.e. the number of times the AND operation is performed) (i.e. the number of times the AND operation is performed)
    }

    console.log(z, count);
    return count;
}

console.log(hammingDistance(1, 1));
console.log("##########################");
console.log(hammingDistance(1, 2));
console.log("##########################");
console.log(hammingDistance(1, 3));
console.log("##########################");
console.log(hammingDistance(1, 4));
console.log("##########################");
console.log(hammingDistance(1, 5));
console.log("##########################");
console.log(hammingDistance(1, 6));
console.log("##########################");
console.log(hammingDistance(1, 7));
