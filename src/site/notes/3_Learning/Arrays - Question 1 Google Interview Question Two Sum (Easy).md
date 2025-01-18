---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Arrays---Question-1-Google-Interview-Question-Two-Sum-(Easy)","created-date":"2025-01-14 10:30:29 am","date":"2025-01-14","type":"developing","tags":["developing"],"aliases":null,"title":"Arrays - Question 1 Google Interview Question Two Sum (Easy)","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Arrays---Question-1-Google-Interview-Question-Two-Sum-(Easy)/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Arrays - Question 1 Google Interview Question Two Sum (Easy)\|Arrays - Question 1 Google Interview Question Two Sum (Easy)]]
## <font color="#9d0ab3">Question</font>
Given an array of integers, return the indices of the two numbers that add up to a given target.
ex. [1, 3, 7, 9, 2]  sum: 11 return 9, 2

### <font color="#76923c">Verify the constraints</font>
- Are all the numbers positive or can there be negatives? - All numbers are positive
- Are there duplicate numbers in the array? - No, there are no duplicates
- Will there always be a solution available? - No, there may not always be a solution 
	- ex. [1,3,7,9,2] sum: 25
	- ex. [3] sum: 5
- What do we return if there's no slution? - Just return null
- Can there be multiple pairs that add up to the target? - No, only 1 pair of numbers will add up to the target
	- ex. [1,3,7,9,2,4] sum:11 => 2,9 and 7,4

### <font color="#76923c">Write out some test cases</font>
- Best Test case [1, 3, 7, 9, 2] target = 11 [3, 4]
- [1, 3, 7, 9, 2] target = 25 null
- [] target = 1 null
- array [5] target = 5 null
- [1, 6] target = 7 [0, 1]

### <font color="#76923c">Figure out a solution without code</font>
- Using two loops to figure out the answer 

### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Using two loops (Brute Force)</font>
```run-js
function findTwoSumIndex(array, target){
	for(let p = 0; p < array.length; p++){ //O(N)
		const numberToFind = target - array[p]; 
		for(let q = p + 1; q < array.length; q++){ //O(N^2)
			if(array[q] === numberToFind){
				return [p, q];
				break;
			}
		}
	}
	return null;
}
console.log(findTwoSumIndex([1,3,7,9,2], 11));
console.log(findTwoSumIndex([1,3,7,9,2], 25));
console.log(findTwoSumIndex([], 1));
console.log(findTwoSumIndex([5], 5));
console.log(findTwoSumIndex([1,6], 7));
```

- Time complexity: O(N^2)
- Space complexity: O(1)
#### <font color="#00b050">Using my solution</font>
```run-js
	function findTwoSumIndex(array, sum){
		const findPairObj = {};
		for(let i = 0; i < array.length; i ++){ //O(N)
			if(findPairObj[array[i]] !== undefined){
				return [findPairObj[array[i]],i];
			}
			const pairNum = sum - array[i];
			findPairObj[pairNum] = i;
		}
		return null;
	}
	console.log(findTwoSumIndex([1,3,7,9,2], 11));
	console.log(findTwoSumIndex([1,3,7,9,2], 25));
	console.log(findTwoSumIndex([], 1));
	console.log(findTwoSumIndex([5], 5));
	console.log(findTwoSumIndex([1,6], 7));
```
- Time complexity: O(N)
- Space complexity: O(N)
### <font color="#76923c">Double check for errors</font>
### <font color="#76923c">Test our code with our test cases</font>
### <font color="#76923c">Analyze Space and Time Complexity</font>

## <font color="#9d0ab3">Complexity Kinds</font>
### <font color="#76923c">Polynomial Complexity</font>

1. O(LogN): Logarithmic
2. O(N): Linear
3. O(NLogN): Linearithmic
4. O(N^2): Quadratic
5. O(N^3): Cubic

- If there's anything that is dynamic inside of this complexity, it's in the baase, not in the exponent.

### <font color="#76923c">Exponential Complexity</font>

1. O(2^N): Exponential
2. O(!N): Factorial
3. O(N^N): Exponential

Exponent is the dynamic variable.
As number grows, we are multiplying more values overall.
Sign that your solution can be definitely optimized









### <font color="#76923c">Developing References</font>
##### Developing Report
[[3_Learning/Report/Developing/2025-01-14 - Arrays - Question 1 Google Interview Question Two Sum (Easy)\|2025-01-14 - Arrays - Question 1 Google Interview Question Two Sum (Easy) Report]]
[[3_Learning/Report/Developing/Daily/2025-01-14 - Developing\|2025-01-14 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-3th - Developing\|2025-01-3th - Developing Weekly Report]]





