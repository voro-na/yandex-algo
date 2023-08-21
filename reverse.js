function reverseList(head) {
    let cur = head, next = cur, prev = null;
    if (!head)
        return head
    while(cur){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev
}
