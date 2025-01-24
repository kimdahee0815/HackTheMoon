---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Linked-List---Question-7-M,-N-Reversals-(Medium)","created-date":"2025-01-23 3:39:08 pm","date":"2025-01-23","type":"developing","tags":["developing"],"aliases":null,"name":"Linked List - Question 7 M, N Reversals (Medium)","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Linked-List---Question-7-M,-N-Reversals-(Medium)/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Linked List - Question 7 M, N Reversals (Medium)\|Linked List - Question 7 M, N Reversals (Medium)]]
## <font color="#9d0ab3">Question</font>
![Utilities/Images/Pasted image 20250123154056.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123154056.jpeg)
Given a linked list and numbers m and n, return it back with only positions m to n in reverse.

### <font color="#76923c">Verify the constraints</font>
1. Will m and n always be within the bounds of the linked list? - Yes, assume 1<= m <= n <= length of linked list.
2. Can we receive m and n values for the whole linked list? - Yes, we can receive m=1 and n=length of linked list.

### <font color="#76923c">Write out some test cases</font>
- 1->2->3->4->5->null m=2, n=4 //1->4->3->2->5->null
- 1->2->3->4->5->null m=1, n=5 //5->4->3->2->1->null
- 5->null m=1, n=1 //5->null
- null m=0, n=0 //null

### <font color="#76923c">Figure out a solution without code</font>
- apply reverse linked list function and set start and end point

### <font color="#76923c">Write out our solution in code</font>
1. We need to keep track of the value before the index m, so that this value can connect to the linked list that was reversed
2. we also need to keep track of the value of index m, so that we set the previous node when the linked list reversion is finished 
3. if we reach index n, then the current value is pointing to the reversed linked list (m to n). we should connect the value that was saved before index m to this current reversed linked list. 
4. previous node should be now set with node saved in number 2 process.

```run-js
class LinkedListNode{
	constructor(val, next = null){
		this.val = val;
		this.next = next;
	}
}
const linkedList = [5,4,3,2,1].reduce((acc, val) => new LinkedListNode(val, acc), null);
const linkedList2 = [5,3].reduce((acc, val) => new LinkedListNode(val, acc), null);
const printList = (head) => {
	let result = "";
        let curNode = head;
        while (curNode !== null) {
            result += curNode.val + "--> ";
            curNode = curNode.next;
        }
        return result;
}
function reverseMtoNLinkedList(head, m, n){
  let curNode = head;
    let prevNode = null;
    let startNode = null;
    let finishNode = null;
    let count = 1;
    while(curNode !== null){
        let nextNode = curNode.next;
        if(m <= count && count <= n && m < n){
            if(count === m){
                curNode.next = null;
                finishNode = curNode;
            }else if(count === n){
        curNode.next = prevNode;
        if(startNode !== null){
          startNode.next = curNode;
        }
        finishNode.next = nextNode;
        prevNode = finishNode;  
        if(m === 1){
          head = curNode;
        }
        curNode = nextNode;
        count++;
        continue;
     }else{
       curNode.next = prevNode;
      }
   }else{
     startNode = curNode;
   }
   prevNode = curNode;
   curNode = nextNode;
   count++;
  }
 return head;
}
console.log(printList(linkedList));
//console.log(printList(reverseMtoNLinkedList(linkedList, 2,4)));
console.log(printList(reverseMtoNLinkedList(linkedList, 1,4)));
console.log(printList(reverseMtoNLinkedList(linkedList2, 1,1)));
```


















### <font color="#92d050">Developing References</font>
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-23 - Linked List - Question 7 M, N Reversals (Medium)\|2025-01-23 - Linked List - Question 7 M, N Reversals (Medium) Report]]
[[3_Learning/Report/Developing/Daily/2025-01-23 - Developing\|2025-01-23 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





