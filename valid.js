function isValid(str) {
    let stack = [str[0]]

    let obj ={
        '{': '}',
        '[': ']',
        '(' : ')'
    }

    for(let i = 1; i < str.length; i ++){
        if (str[i] === '(' || str[i] === '[' || str[i] === '{'){
            stack.push(str[i])
        }else{
            let temp = stack.pop()
            if (obj[temp] !== str[i]){
                return false
            }
        }
    }
    return stack.length === 0
}
