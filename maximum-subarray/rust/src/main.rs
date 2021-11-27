fn  max_sub_array(nums: Vec<i32>) -> i32 { // Implement kadabe's
    let (mut cur, mut max) = (nums[0], nums[0]);
    for i in 1..nums.len() {
        cur = match cur < 0 {
            true => nums[i],
            _ => cur + nums[i]
        };
        max = max.max(cur);
    }
    max
}

fn main() {
    println!("{}", max_sub_array(vec![1]));
    println!("{}", max_sub_array(vec![-2, -1]));
    println!("{}", max_sub_array(vec![-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    println!("{}", max_sub_array(vec![5, 4, -1, 7, 8]));
}
