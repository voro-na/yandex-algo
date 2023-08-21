let sort = (arr) =>{
    let answer = arr

    for(let i = 0; i < answer.length; i ++){
        for(let j = 0; j < answer.length - i - 1; j ++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return answer
}
