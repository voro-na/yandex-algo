function permutations(n) {
    const result = [];

    let arr = []
    for(let i =0; i < n; i ++){
        arr.push(i)
    }
    let func = (arr, temp) =>{
        if(arr.length === temp.length){
            result.push([...temp])
        }
        for(let i = 0; i < arr.length; i ++){
            if(!temp.includes(arr[i])){
                temp.push(arr[i])
                func(arr, temp)
                temp.pop()
            }
        }
    }

    func(arr, [])

    return result;
}
console.log(JSON.stringify(permutations(3)))