function bfs(tree) {
    const result = [];

    let queue = [tree]

    while(queue.length !== 0){
        let node = queue.shift()
        result.push(node.val)

        if(node.left !== null){
            queue.push(node.left)
        }
        if(node.right !== null){
            queue.push(node.right)
        }
    }

    return result;
}
