---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Basics-and-Reverse-A-Linked-List","created-date":"2025-01-23 1:59:35 pm","date":"2025-01-23","type":"developing","tags":["developing"],"aliases":null,"name":"Basics and Reverse A Linked List","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Basics-and-Reverse-A-Linked-List/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Basics and Reverse A Linked List\|Basics and Reverse A Linked List]]
## <font color="#9d0ab3">Question</font>
![Utilities/Images/Pasted image 20250123140240.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123140240.jpeg)
Given a linked list, return it in reverse.

### <font color="#76923c">Verify the constraints</font>
- What do we return if we get null or a single node? - Just return null and the node back respectively.


### <font color="#76923c">Write out some test cases</font>
1. 1,2,3,4,5,null => 5,4,3,2,1,null
2. 1 => 1
3. null => null

### <font color="#76923c">Figure out a solution without code</font>
- We won't know the full length of the linked list unless we traverse it! - so we have to implement iterative technique

### <font color="#76923c">Write out our solution in code</font>
```run-js
class ListNode{
	constructor(val, next = null){
		this.val = val;
		this.next = next;
	}
}
const linkedList = [5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);
const printList = (head) => {
	let result = "";
        let curNode = head;
        while (curNode !== null) {
            result += curNode.val + "--> ";
            curNode = curNode.next;
        }
        return result;
}
function getReversedLinkedList(head){
	let curNode = head;
	let prevNode = null;
	while(curNode){
		const next = curNode.next;
		curNode.next = prevNode;
		 prevNode = curNode;
		curNode = next;
	}
	head = prevNode;
	return head;
}
console.log(printList(linkedList));
console.log(printList(getReversedLinkedList(linkedList)))
```

### <font color="#76923c">Analyze Space and Time Complexity</font>
- Time Complexity: O(N)
- Space Complexity: O(1)
















### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2025-01-23 - Basics and Reverse A Linked List\|2025-01-23 - Basics and Reverse A Linked List Report]]
[[3_Learning/Report/Developing/Daily/2025-01-23 - Developing\|2025-01-23 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





