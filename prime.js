function primeNumbers(num) {
    const result = [];
    let arr = []

    for(let i = 2; i <= num; i ++){
        arr.push(i)
    }

    for(let i =0; i < Math.ceil(Math.pow(num ,0.5)); i ++){
        if (arr[i] !== 0){
            for(let j = i  + 1; j < arr.length; j ++){
                if (arr[j] % arr[i] === 0){
                    arr[j] = 0
                }
            }
        }

    }
    for(let i =0; i < arr.length; i ++){
        if (arr[i] !== 0){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(primeNumbers(20))