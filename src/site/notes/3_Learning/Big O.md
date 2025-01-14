---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Big-O","created-date":"2025-01-13 9:57:42 am","date":"2025-01-13","type":"developing","tags":["developing"],"aliases":null,"title":"Big O","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Big-O/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Big O\|Big O]]
## What is Good Code?
![Utilities/Images/Pasted image 20250113100222.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250113100222.jpeg)

- Just like kitchen, we have to give coding instructions to computer
- instructions can be different in various ways
### Readable
- Clean code that others can read that is maintainable
### Scalable
- Speed: As input grows bigger and bigger, How slow the algorithm or function gets
- Memory: As input grows bigger and bigger, How much space it takes 
	- Heap: Where we store variables that we assign values to
	- Stack: Where we keep track of function calls

- Readability and Scalability are both important. In some cases, writing clean code that is easier to understand for others can be more important than caring about Scalability.
#### Example Code
```run-js
const nemo = ['nemo'];

function findNemo(array){
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('FOUND NEMO!');
		}
	}
}
findNemo(nemo);
```

##### Question to Ask
- How can we measure the big o or efficiency?
- How long does it take to run a certain problem through a function or a task?

```run-js
const nemo = ['nemo'];

function findNemo(array){
	let t0 = performance.now();
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('FOUND NEMO!');
		}
	}
	let t1 = performance.now();
	console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}
findNemo(nemo);
```

```run-js
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array){
	let t0 = performance.now();
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('FOUND NEMO!');
		}
	}
	let t1 = performance.now();
	console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}
findNemo(everyone);
```

- There are not much of a difference between 10 loops and 1 loop!

```run-js
const large = new Array(10000000).fill('nemo');

function findNemo(array){
	let t0 = performance.now();
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			//console.log('FOUND NEMO!');
		}
	}
	let t1 = performance.now();
	console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}
findNemo(large);
```

- This takes long time.
- Which code is more efficient and how can we reduce time to execute regardless of our computer differences?

## Big O
![Utilities/Images/Pasted image 20250113102901.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250113102901.jpeg)

- When we grow bigger and bigger with our input, how much does the algorithm or function slow down?

### O(N) Example
```run-js
const large = new Array(10000000).fill('nemo');

function findNemo(array){
	let t0 = performance.now();
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			//console.log('FOUND NEMO!');
		}
	}
	let t1 = performance.now();
	console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}
findNemo(large);
```

- This function loops 10000000 times. As inputs grow, loops increase by the same amount. O(N).

### O(1) Example
```js
const boxes = new Array(100).fill('box');
function compressFirstBox(boxes){
	console.log(boxes[0]);
}
compressFirstBox(boxes);
```

- This function doesn't really get affected by the numbers of boxes, since it only logs first box.

```js
const boxes = [0,1,2,3,4,5];
function compressFirstBox(boxes){
	console.log(boxes[0]); 
	console.log(boxes[1]); 
}
compressFirstBox(boxes); //O(1)
```

- This function doesn't really affected by the numbers of boxes, since it only logs first box and second box.
- We call this function once, so big O is O(1).

### O(N * N) Example
```run-js
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) { //O(2N)
    for (let j = 0; j < array.length; j++) { //O(2 * N^2)
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)
```

- O(2 * N^2 + 2N) => O(2 * N^2) => O(N^2)

```js
function compressBoxesTwice(boxes, boxes2){
	boxes.forEach(function(boxes){ //O(N)
		console.log(boxes);	
		boxes.forEach(function(boxes2){ //O(N * M)
			console.log(boxes);	
		})
	})
}
```

- O(N * M + N) => O(N * M) 
- [[3_Learning/Big O#Simplifying Big O\|#Simplifying Big O#Different terms for inputs]]

### O(N!) 
- Adding nested loop for every element that's being iterated

### What is the Big O of the below function? 
```js
function funChallenge(input) {
  let a = 10;  
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) { //O(2N)
    anotherFunction();  //O(N)
    let stranger = true;  
    a++; //O(N)
  }
  return a; 
}
```

- Answer: O(4N + 1) => O(N)

### What is the Big O of the below function?
```js
function anotherFunChallenge(input) {
    let a = 5; 
    let b = 10; 
    let c = 50; 
    for (let i = 0; i < input; i++) { // O(2N)
      let x = i + 1; // O(N)
      let y = i + 2; // O(N)
      let z = i + 3; // O(N)

    }
    for (let j = 0; j < input; j++) { // O(2N)
      let p = j * 2; // O(N)
      let q = j * 2; // O(N)
    }
    let whoAmI = "I don't know"; 
  }
```

- Answer: O(9N) => O(N)

##### What is the difference between big O, big Omega, big Theta?
What is the mileage that your car gives?

So let's discuss different scenarios.

Let's say the car gives an average of 12 km/hr in Traffic, an average of 20 km/hr on Highway and an average of 16 km/hr in Normal City Traffic.

Traffic is your worst case, Highway is your best case and Normal City Traffic is your average case.

This is similar to the notations that we use for Algorithm runtime Analysis.

Omega Notation ( Ω ) gives the best case complexity (highway in above case), Big O Notation ( O ) gives the worst case complexity (traffic in above case) and Theta Notation ( θ ) gives the average case complexity of an algorithm (normal city traffic in above case).

Storytelling and real life examples make you understand concepts clearly.

## Simplifying Big O
- You don't have to caluclate every single details

### Worse Case
```run-js
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array){
	let t0 = performance.now();
	for(let i = 0; i < array.length; i++){
		if(array[i] === 'nemo'){
			console.log('FOUND NEMO!');
			break;
		}
	}
	let t1 = performance.now();
	console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}
findNemo(everyone);
```

- In here, you don't have to run everyone array's every single elements. You can just stop when you found Nemo. This is more efficient, for sure.
- <font color="#ff0000">But when you calcualte Big O, you always have to consider the worst case!  </font>Since, the result can be always different depending on inputs.
### Remove Constants
```js
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); 

    var middleIndex = Math.floor(items.length / 2); //O(1)
    var index = 0; 

    while (index < middleIndex) { // O(N/2)
        console.log(items[index]); 
        index++; //O(N/2)
    }

    for (var i = 0; i < 100; i++) { //O(200)
        console.log('hi'); 
    }
}

```

- O(N/2 + N/2 + 1 + 200) => O(N/2 + 201) => O(N/2) => O(N) (Ignore variable assignments and small calcuations here)

```js
function compressBoxesTwice(boxes){
	boxes.forEach(function(boxes){ //O(N)
		console.log(boxes);	
	})
	boxes.forEach(function(boxes){ //O(N)
		console.log(boxes);	
	})
}
```

- O(2N) => O(N)
### Different terms for inputs
```js
function compressBoxesTwice(boxes, boxes2){
	boxes.forEach(function(boxes){ //O(N)
		console.log(boxes);	
	})
	boxes.forEach(function(boxes2){ //O(M)
		console.log(boxes);	
	})
}
```

- O(N + M)
- There are two different inputs. 
### Drop non-dominants
```js
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function(number) { //O(N)
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function(firstNumber) { //O(N)
    numbers.forEach(function(secondNumber) { //O(N^2)
      console.log(firstNumber + secondNumber); //O(N^2)
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); 
```

- O(2 x N^2 + 2N) => O(2 x N^2) => O(N^2)
- N^2 is way more increasing than N. So, we remove non-dominants.
- Ex. O(X^2 + 3X + 100 + X/2) => O(X^2 + 7/2X + 100) => O(X^2)

## What can cause time in a function?
- Operations (+, -, x, /) 
- Comparisons (>, <, ==)
- Looping (for, while)
- Outside Function Call (funciton())

## What can cause Space complexity?
- Variables
- Data structures
- Function call
- Allocations

### Space Complexity Example
```run-js
function booo(n){
	for(let i = 0; i < n.length; i++){
		console.log('boooooo!');
	}
}
booo([1,2,3,4,5]);
```

- We can't control input we receives, we only can control what happens inside the function
- We didn't add any space here. i = 0 assigning is the only thing that takes up memory. => O(1)

```run-js
function arrayOfHiNTimes(n){
	let hiArray = [];
	for(let i = 0; i < n; i++){
		hiArray[i] = 'hi';
	}
	return hiArray;
}
console.log(arrayOfHiNTimes(6))
```

- We are assigning the array in this function, which is data structure. 
- We filled the array with N loops. => O(N)

```js
const array = ['hi', 'my', 'post'];
array[0]; //O(1) => Oldest tweet
array[array.length - 1] // O(1) => Newest tweet
```

```js
const array=[
	{
		tweet: 'hi',
		date: 2020
	},
	{
		tweet: 'my',
		date: 2021
	},
	{
		tweet: 'post',
		date: 2022
	}
]
```

- If you want to compare dates of tweets, then you have to compare each post for every other posts. => O(N^2)
- ex. 'hi' post date => 'my', 'post', 'my' post date => 'hi', 'post',  'post' post date => 'hi', 'my'

```js
'asdfkl;waelij;awlerjawler'.length; 
```

- BigO depends on the language you are working with. Length function can iterate over each element all the way until the length finishes.
- In case of Javascript, length is just a simple property of object. => O(1)

## Data Structure and Algorithms?
- Data Structure : ways to store data
- Algorithms : functions or ways to use data structures to write our program



### Developing References
https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations
[Master the Coding Interview: Big Tech (FAANG) Interviews](https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/)
##### Developing Report
[[3_Learning/Report/Developing/2025-01-13 - Big O\|2025-01-13 - Big O Report]]
[[3_Learning/Report/Developing/Daily/2025-01-13 - Developing\|2025-01-13 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-3th - Developing\|2025-01-3th - Developing Weekly Report]]





