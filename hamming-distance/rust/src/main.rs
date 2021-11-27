fn main() {
    println!("{}", hamming_distance(1, 4));
    println!("{}", hamming_distance(8, 4));
    println!("{}", hamming_distance(8, 8));
    println!("{}", hamming_distance(1, 1));
    println!("{}", hamming_distance(1, 0));
    println!("{}", hamming_distance(0, 1));
    println!("{}", hamming_distance(0, 0));
}

// Hamming distance between two integers is the number of positions at which the corresponding bits are different.

fn hamming_distance(x: i32, y: i32) -> i32 {
    let mut z = x ^ y;
    let mut count = 0;

    while z > 0 {
        z &= z - 1;
        count += 1;
    }

    return count;
}