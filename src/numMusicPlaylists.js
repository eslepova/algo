/**
 * Your music player contains N different songs
 * and she wants to listen to L (not necessarily different) songs during your trip.
 * You create a playlist so that:
 * Every song is played at least once
 * A song can only be played again only if K other songs have been played
 *
 * Return the number of possible playlists.  As the answer can be very large, return it modulo 10^9 + 7.
 *
 * Input: N = 2, L = 3, K = 1
 * Output: 2
 * Explanation: There are 2 possible playlists. [1, 2, 1], [2, 1, 2]
 *
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
const numMusicPlaylists = (N, L, K) => {
    const dp = [];
    for (let i = 0; i <= L; ++i) {
        dp[i] = [];
        for (let j = 0; j <= N; ++j) {
            dp[i][j] = 0;
        }
    }
    dp[0][0] = 1;

    for (let i = 1; i <= L; ++i) {
        for (let j = 1; j <= N; ++j) {
            dp[i][j] = dp[i-1][j-1]*(N-(j-1));
            dp[i][j] += dp[i-1][j]*Math.max(j-K, 0);
            dp[i][j] %= 1000000007;
        }
    }

    return dp[L][N];
};
