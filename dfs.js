const dfs = (root) =>{
    let answer = []

    answer.push(tree.val)
    if(tree.left !== null){
        answer.push(...dfs(tree.left))
    }
    if(tree.right !== null){
        answer.push(...dfs(tree.right))
    }
    return answer
}
