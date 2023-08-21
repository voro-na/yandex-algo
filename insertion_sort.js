let sort = (arr) =>{
    let answer = arr 
    let len = arr.length

    for(let i = 0; i < len - 1; i ++){

        if (arr[i] > arr[i + 1]){
            
            for(let j = i + 1; j >= 0; j --){
                if(arr[j] < arr[j - 1]){
                    let temp = arr[j]
                    arr[j] = arr[j - 1]
                    arr[j - 1] = temp 
                }else{
                    break
                }
            }
        }
    }

    return answer
}

console.log(sort([1,2,-10, 1000, -1000, 0, 10]))