---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Hash-Tables-Concept","created-date":"2025-01-14 1:20:00 pm","date":"2025-01-14","type":"developing","tags":["developing"],"aliases":null,"title":"Hash Tables Concept","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Hash-Tables-Concept/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Hash Tables Concept\|Hash Tables Concept]]
## Hash Tables, Object, Maps, Hashes
![Utilities/Images/Pasted image 20250114132929.jpeg|300](/img/user/Utilities/Images/Pasted%20image%2020250114132929.jpeg)
- Key-Value pair
	- ex. basket.grapes = 10000;
	- Hash Key goes into hash function and return an index where we stored value
- Hash function map key to the memory address where we want to store our values
- Really fast data access. Usually O(1).
- Javascript Object is type of Hash Tables

### What is a Hash Function?
- Function that generates a value of fixed length for each input that it gets
	- ex. SHA-256, SHA-1
- Idempotent. Hash function is one way. If you give result value to anyone, It isn't possible to know what key was. 
- Hash function takes time to process

### Hash Tables Functions
![Utilities/Images/Pasted image 20250114133825.jpeg|200](/img/user/Utilities/Images/Pasted%20image%2020250114133825.jpeg)
- Insert, lookup, delete, search bigO is all O(1). Because, you have the key assigned everything becomes very simple.

### Hash Tables Example
```run-js
	let user = {
		age:  54,
		name: 'kyle',
		magic: true,
		scream: function(){
			console.log('ahhhhh!');
		}
	}
	console.log(user.age); //lookup O(1)
	user.spell = 'abra kadabra'; //Insert O(1)
	console.log(user); 
	user.scream(); //lookup O(1)

```

## Hash Table Problem
![Utilities/Images/Pasted image 20250114134307.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250114134307.jpeg)
![Utilities/Images/Pasted image 20250114134445.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250114134445.jpeg)
- Collision!
	- Hash Function can generate same memory space for different keys, since memory is limited
	- When we put different data in the same memory space, we use linked list(separate chaining)
	- You will get O(N/K). K = size of the hash table. In worst case scenario, K could be 1, which every data goes into same buckets. Then, bigO will be O(N). 

## Arrays vs Hash Tables
![Utilities/Images/Pasted image 20250114135104.jpeg|500](/img/user/Utilities/Images/Pasted%20image%2020250114135104.jpeg)
- Hash tables are great for searching, arrays are bad for searching
- keys can be picked in Hash Tables, but array's key is set(index).
- Hash tables data is all over the place, but arrays data will be contiguous






















### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2025-01-14 - Hash Tables Concept\|2025-01-14 - Hash Tables Concept Report]]
[[3_Learning/Report/Developing/Daily/2025-01-14 - Developing\|2025-01-14 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-3th - Developing\|2025-01-3th - Developing Weekly Report]]





