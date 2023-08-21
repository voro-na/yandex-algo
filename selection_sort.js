let sort = (arr) =>{
    let answer = arr 
    let len = arr.length

    for(let i = 0; i < len; i ++){

        let min = i

        for(let j = i + 1; j < len; j ++){
            if (arr[min] > arr[j]){
                min = j
            }
        }
        if (min !== i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return answer
}

console.log(sort([1,2,-10]))