use std::collections::HashSet;
use std::iter::FromIterator;

fn main() {
    println!("{:?}",find_dissapeared_numbers([4,3,2,7,8,2,3,1].to_vec()));
    println!("{:?}",find_dissapeared_numbers([1,1].to_vec()));
    println!("{:?}",find_dissapeared_numbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105].to_vec()));
}

fn find_dissapeared_numbers(nums: Vec<i32>) -> Vec<i32> {
    let set: HashSet<i32> = HashSet::from_iter(nums.iter().cloned());
    let mut vec = Vec::<i32>::new();

    for i in 1..nums.len() + 1 {
        if !set.contains(&(i as i32)) {
            vec.push(i as i32);
        }
    }

    vec
}

/*
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/discuss/661425/Rust%3A-8-ms-2.7-MB-three-lines-functional-programming-iterators-essay-explanation...!
*/
pub fn find_disappeared_numbers_2(nums: Vec<i32>) -> Vec<i32> {
    let mut seq: Vec<i32> = [0].repeat(nums.len());
    nums.into_iter()
        .for_each(|num|
            seq[(num - 1) as usize] += 1
        );
    seq.into_iter()
        .enumerate()
        .filter(|&(x, y)| y == 0)
        .map(|(x, y)| (x + 1) as i32)
        .collect::<Vec<i32>>()
}