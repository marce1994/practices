fn max_product(nums: Vec<i32>) -> i32 {
    let mut max = nums[0];
    let mut min = nums[0];
    let mut res = nums[0];
    for i in 1..nums.len() {
        let mut tmax = max;
        max = std::cmp::max(nums[i], std::cmp::max(nums[i] * max, nums[i] * min));
        min = std::cmp::min(nums[i], std::cmp::min(nums[i] * tmax, nums[i] * min));
        res = std::cmp::max(res, max);
    }
    res
}

fn main() {
    assert_eq!(max_product(vec![2, 3, -2, 4]), 6);
    assert_eq!(max_product(vec![-2, 0, -1]), 0);
    assert_eq!(max_product(vec![-2, 3, -4]), 24);
}