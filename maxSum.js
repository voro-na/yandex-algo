function maximumSubarray(arr) {
    let dp = [arr[0]]

    for(let i = 1; i < arr.length; i ++){
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])

    }
    let max = arr[0]
    for(let i =0; i < dp.length; i ++){
        if(dp[i] > max){
            max = dp[i]
        }
    }
    return max
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))