---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Linked-List---Question-8-Merge-Multi-Level-Doubly-Linked-List-(Medium)","created-date":"2025-01-24 11:00:22 am","date":"2025-01-24","type":"developing","tags":["developing"],"aliases":null,"name":"Linked List - Question 8 Merge Multi-Level Doubly Linked List","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Linked-List---Question-8-Merge-Multi-Level-Doubly-Linked-List-(Medium)/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Linked List - Question 8 Merge Multi-Level Doubly Linked List (Medium)\|Linked List - Question 8 Merge Multi-Level Doubly Linked List (Medium)]]
## <font color="#9d0ab3">Question</font>
![Utilities/Images/Pasted image 20250124110422.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124110422.jpeg)
![Utilities/Images/Pasted image 20250124110436.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124110436.jpeg)
![Utilities/Images/Pasted image 20250124110717.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124110717.jpeg)
![Utilities/Images/Pasted image 20250124110730.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124110730.jpeg)
![Utilities/Images/Pasted image 20250124110753.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124110753.jpeg)
![Utilities/Images/Pasted image 20250124110825.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124110825.jpeg)
Given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list. These child lists can also have one or more child doubly linked lists of their own, and so on.
Return the list as a single level flattened doubly linked list.

### <font color="#76923c">Verify the constraints</font>
1. Can a doubly linked list have multiple child list nodes? - Yes, every list node can have multiple levels of children ![Utilities/Images/Pasted image 20250124111030.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250124111030.jpeg)
2. What do we do with child properties after flattening? - Jest set the child property value to null

### <font color="#76923c">Write out some test cases</font>
1. 1 - 2 - 3 - 4 - 5 - 6 (2 -7 - 8 - 9) (8 - 10 - 11) (5 - 12 - 13) // 1 - 2 - 7 - 8 - 10 - 11 - 9 - 3 - 4 - 5 - 12 - 13 - 6

### <font color="#76923c">Figure out a solution without code</font>

### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Solution 1</font>
```run-js
function flattenMultiLevelDoublyLinkedList(head){
	let currentNode = head;
	let spinPointNode = [];
	let spinPointNextNode = [];
	while(currentNode){
		if(currentNode.child !== null){
	           spinPointNode.push(currentNode); //child로 빠지는 시점의 node를 spinPointNode에 저장
	            if(currentNode.next !== null){
	                spinPointNextNode.push(currentNode.next); //child로 빠지는 시점의 node의 다음 노드를 spinPointNextNode에 저장
	            }
		    currentNode.next = currentNode.child; //child로 빠질 때 그 다음 노드(next node)와의 연결 끊고 child를 next노드로 만들기
	            currentNode.child.prev = currentNode; //child의 prev노드를 currentNode로 가리키게 만들기
	            let child = currentNode.child; //연결 끊기 전에 child를 따로 저장
	            currentNode.child = null; //child 노드 없애기
	            currentNode = child; //childNode로 이동
	        }else{
	            if(currentNode.next === null){ //노드의 끝 도착
	                if(spinPointNextNode.length === 0){ //만약 spinPointNextNode 배열에서 뽑을 노드가 더 이상 없으면 break해서 빠져나오기
	                    break;
	                }
	                const nextNode = spinPointNextNode.pop(); //그 다음 노드를 저장해둔 spinPointNextNode 배열에서 뽑기
	                currentNode.next = nextNode; //현재 노드의 다음 노드를 spinPointNextNode 배열에서 뽑은 노드와 연결하기
	                currentNode.next.prev = currentNode; //다음 노드의 prev노드를 현재 노드를 가리키게 만들기
            }
            currentNode = currentNode.next; //다음 노드로 이동
        }
    }
    return head;
}
```
#### <font color="#00b050">Solution 2</font>
```run-js

class ListNode {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]

const buildMultiLevel = function(nodes) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for(let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if(Array.isArray(val)) {
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }
  
  return head;
}

let multiLinkedList = buildMultiLevel(nodes);

// ---- Generate our linked list ----

const printListMulti = head => {
  if(!head) {
    return;
  }

  console.log(head.val)

  if(head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
}

const printList = head => {
  if(!head) {
    return;
  }

  console.log(head.val);
  
  printList(head.next);
}

// --------- Our solution -----------

var flatten = function (head) {
  if (!head) return head;

  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};

printListMulti(multiLinkedList);
console.log('after flatten');
printList(flatten(multiLinkedList));
```
### <font color="#76923c">Analyze Space and Time Complexity</font>
- Solution 1
	- Time Complexity: O(N)
	- Space Complexity: O(N)
- Solution 2
	- Time Complexity: O(N)
	- Space Complexity: O(1)












### <font color="#92d050">Developing References</font>
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-24 - Linked List - Question 8 Merge Multi-Level Doubly Linked List (Medium)\|2025-01-24 - Linked List - Question 8 Merge Multi-Level Doubly Linked List (Medium) Report]]
[[3_Learning/Report/Developing/Daily/2025-01-24 - Developing\|2025-01-24 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





