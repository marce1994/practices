
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Input = [2,1,3,5,6,4,7]
// Output = [2,3,6,7,1,5,4]

function oddEvenList(head: ListNode | null): ListNode | null {
    if(head === null) return null; // edge case
    
    let odd = head; // odd pointer
    let even = head.next; // even pointer
    
    let evenHead = even; // even head
    
    while(even !== null && even.next !== null) { // loop until even pointer reaches end
        odd.next = even.next; // odd pointer points to even pointer's next
        odd = odd.next; // odd pointer moves to next
        even.next = odd.next; // even pointer points to odd pointer's next
        even = even.next; // even pointer moves to next
    }

    odd.next = evenHead; // odd pointer points to even head
    
    return head;
};