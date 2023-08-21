function binarySearch(arr, value) {
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let m = (right + left - (right + left) % 2) / 2

        if (arr[m] > value){
            right = m - 1
        }else if(arr[m] < value){
            left = m + 1
        }else{
            return m
        }
    }
    return arr[left] === value ? left : undefined

}
//console.log(binarySearch([1,2,3,4], 4))