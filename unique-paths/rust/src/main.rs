fn unique_paths(m: i32, n: i32) -> i32 {
    let mut dp = vec![vec![0; n as usize]; m as usize];
    for i in 0..m {
        for j in 0..n {
            if i == 0 || j == 0 {
                dp[i as usize][j as usize] = 1;
            }
            else {
                dp[i as usize][j as usize] = dp[(i - 1) as usize][j as usize] + dp[i as usize][(j - 1) as usize];
            }
        }
    }
    dp[(m - 1) as usize][(n - 1) as usize]
}

fn assert_eq(a: i32, b: i32) {
    if a == b {
        println!("Assertion Successful - {} == {}", a, b);
    } else {
        println!("Assertion Failed - {} != {}", a, b);
    }
}

fn main() {
    assert_eq(unique_paths(3, 2), 3);
    assert_eq(unique_paths(7, 3), 28);
    assert_eq(unique_paths(1, 1), 1);
    assert_eq(unique_paths(2, 2), 2);
    assert_eq(unique_paths(3, 7), 28);
}