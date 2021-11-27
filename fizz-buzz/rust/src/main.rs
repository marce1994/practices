fn fizz_buzz(n: i32) -> Vec<String> {
    let mut result: Vec<String> = Vec::new();
    for i in 1..n+1 {
        if i % 3 == 0 && i % 5 == 0 {
            result.push("FizzBuzz".to_string());
        } else if i % 3 == 0 {
            result.push("Fizz".to_string());
        } else if i % 5 == 0 {
            result.push("Buzz".to_string());
        } else {
            result.push(i.to_string());
        }
    }
    result
}

fn main() {
    println!("{:?}", fizz_buzz(1));
    println!("{:?}", fizz_buzz(3));
    println!("{:?}", fizz_buzz(5));
    println!("{:?}", fizz_buzz(15));
}
