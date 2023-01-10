// https://leetcode.cn/problems/longest-palindromic-subsequence/

function longestPalindromeSubseq(s: string): number {
  const length: number = s.length
  const dp: number[][] = new Array(length).fill(0).map(() => new Array(length).fill(0))
  for (let i = 0; i < length; i++) {
    dp[i][i] = 1
  }
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][length - 1]
};

export { }