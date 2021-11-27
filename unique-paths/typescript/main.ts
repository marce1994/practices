function uniquePaths(m: number, n: number): number { // O(m*n) time, O(m*n) space
    let dp: number[][] = [];

    for(let i = 0; i < m; i++) {
        dp[i] = [];
        for(let j = 0; j < n; j++) {
            if(i === 0 || j == 0)
                dp[i][j] = 1;
            else
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    for(let i = 0; i < m; i++) {
        console.log(dp[i].join("\t"));
        console.log("");
        console.log("");
    }

    return dp[m - 1][n - 1];
};

console.log(uniquePaths(25, 20));