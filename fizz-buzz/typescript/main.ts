// Input: 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

function solution(n: number): string[] {
    const res: string[] = [];
    for(let i = 1; i <= n; i++){
        let _str = "";
        if(i%3 === 0)
            _str += "Fizz";

        if(i%5 === 0)
            _str += "Buzz";
        
        if(i%3 !== 0 && i%5 !== 0)
            _str += i;
            
        res.push(_str);
    }

    return res;
}

console.log(solution(15));
console.log(solution(5));
console.log(solution(1));
console.log(solution(0));
console.log(solution(3));
console.log(solution(10));
console.log(solution(15));
console.log(solution(20));
console.log(solution(30));
console.log(solution(40));
console.log(solution(50));