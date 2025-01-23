---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Linked-Lists-Concept","created-date":"2025-01-23 1:01:53 pm","date":"2025-01-23","type":"developing","tags":["developing"],"aliases":null,"name":"Linked Lists Concept","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Linked-Lists-Concept/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Linked Lists Concept\|Linked Lists Concept]]
## Array vs Linked List
### Array
- Static Array needs to double up the array to create more memories (O(N))
- Bad performance when you have to shift indeces over for insert or delete
### Hash Table
- data structure is not ordered
### Linked List
![Utilities/Images/Pasted image 20250123135446.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123135446.jpeg)
![Utilities/Images/Pasted image 20250123132857.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123132857.jpeg)
- data is in order
- traversing takes time to read data since memory is scattered
#### call by reference (change the data inside of object)
```run-js
let obj1 = {a:true};
let obj2 = obj1;
obj1.a = 'booya';
console.log('1', obj1);
console.log('2', obj2);
```
#### call by reference (delete object)
```run-js
let obj1 = {a:true};
let obj2 = obj1;
delete obj1 //don't delete the object, since obj2 is still referencing obj1. 
console.log('1', obj1);
console.log('2', obj2);
```
```run-js
let obj1 = {a:true};
obj1 = undefined;
delete obj1 //delete the obj1 data in memory since there is not reference to this data
console.log(obj1)
```
## Linked Lists Kinds
### Singly Linked List
- ![Utilities/Images/Pasted image 20250123132941.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123132941.jpeg)
	- ![Utilities/Images/Pasted image 20250123133701.jpeg|200](/img/user/Utilities/Images/Pasted%20image%2020250123133701.jpeg)
	- Simple implementation
	- less memory
	- delte and insert is a bit faster than doubly linked list
	- No way to know the previous node, can't traverse from the back to front
### Doubly Linked List
- ![Utilities/Images/Pasted image 20250123134848.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123134848.jpeg)
	- can traverse from the front and from the back
	- requires more memory or storage
	- fairly complex to implement























### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2025-01-23 - Linked Lists Concept\|2025-01-23 - Linked Lists Concept Report]]
[[3_Learning/Report/Developing/Daily/2025-01-23 - Developing\|2025-01-23 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





