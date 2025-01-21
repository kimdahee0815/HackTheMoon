---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Arrays---Question-3-Trapping-Rainwater-(Hard)1","created-date":"2025-01-21 10:11:42 am","date":"2025-01-21","type":"developing","tags":["developing"],"aliases":null,"name":"Arrays - Question 3 Trapping Rainwater","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Arrays---Question-3-Trapping-Rainwater-(Hard)1/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Arrays - Question 3 Trapping Rainwater (Hard)1\|Arrays - Question 3 Trapping Rainwater (Hard)1]]
### <font color="#76923c">Write out our solution in code(Solution)</font>
#### Solution 1 BruteForce (O(N^2))
- Smaller height wall determines how much water can be contained
- Also, the height in the inside of the container affects how much water can be contained
- <font color="#ff0000">current water = min(maxLeft, maxRight) - currentHeight</font>

```run-js
	function getTrappedRainWater(waterArr){
		let totalWater = 0;
		let maxRightHeight = 0;
		let maxLeftHeight = 0;
		for(let i = 0; i < waterArr.length; i++){
			maxLeftHeight = getMaxHeight(0, i, waterArr);
			maxRightHeight = getMaxHeight(i+1, waterArr.length, waterArr);
			let total = Math.min(maxLeftHeight, maxRightHeight) - waterArr[i];
			if(total > 0){
				totalWater += total;
			}
		}
		return totalWater;
	}
	function getMaxHeight(a,b,waterArr){
		let maxHeight = 0;
		for(let i = a; i < b; i++){
			if(waterArr[i] > maxHeight){
				maxHeight = waterArr[i];
			}
		}
		return maxHeight;
	}

	console.log(getTrappedRainWater([0,1,0,2,1,0,3,1,0,1,2])) //8
	console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
	console.log(getTrappedRainWater([0,1,0,2,1,0,1,3,2,1,2,1])) //6
	console.log(getTrappedRainWater([3,4,3])) //0
	console.log(getTrappedRainWater([3,4,2,3])) //1
	console.log(getTrappedRainWater([5,5,1,7,1,1,5,2,7,6])) //23
	console.log(getTrappedRainWater([])) //0
	console.log(getTrappedRainWater([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])) //26
	console.log(getTrappedRainWater([2,8,5,5,6,1,7,4,5])) //12
	console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
	console.log(getTrappedRainWater([9,6,8,8,5,6,3])) //3
	console.log(getTrappedRainWater([9,2,9,3,2,2,1,4,8])) //35
	console.log(getTrappedRainWater([9,8,3,2,3,3,4,5,7,3])) //22
	console.log(getTrappedRainWater([4,3,8,3,1,5,9,9,0,4,3,4,7])) //33
	console.log(getTrappedRainWater([1,9,7,1,3,6,4,7,4,8,3,6,3,5,3,7])) //39
```

#### Solution 2 
- Identify pointer with lesser value
- Is this pointer value greater or equal to the max on that side?
	- yes : update max on that side
	- no : get the water for that pointer and add it to the total
- move the pointer inwards
- repeat this for the other pointers

```run-js
	function getTrappedRainWater(waterArr){
	    let totalWater = 0;
	    let maxRightHeight = 0;
	    let maxLeftHeight = 0;
	    let p = 0;
	    let q = waterArr.length - 1;
	    while(p <  q){
	      let total = 0;
	      if(waterArr[p] <= waterArr[q]){
	         total = maxLeftHeight - waterArr[p];
	         if(maxLeftHeight < waterArr[p]){
	            maxLeftHeight = waterArr[p];
	          }
		      p++;
	      }else{
	        total = maxRightHeight - waterArr[q];
	        if(maxRightHeight < waterArr[q]){
	          maxRightHeight = waterArr[q];
	        }
	        q--;
	     }
	      if(total > 0){
	        totalWater += total;
	      }
	    }
	    return totalWater;
	 }

  console.log(getTrappedRainWater([0,1,0,2,1,0,3,1,0,1,2])) //8
  console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
  console.log(getTrappedRainWater([0,1,0,2,1,0,1,3,2,1,2,1])) //6
  console.log(getTrappedRainWater([3,4,3])) //0
  console.log(getTrappedRainWater([3,4,2,3])) //1
  console.log(getTrappedRainWater([5,5,1,7,1,1,5,2,7,6])) //23
  console.log(getTrappedRainWater([])) //0
  console.log(getTrappedRainWater([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])) //26
  console.log(getTrappedRainWater([2,8,5,5,6,1,7,4,5])) //12
  console.log(getTrappedRainWater([4,2,0,3,2,5])) //9
  console.log(getTrappedRainWater([9,6,8,8,5,6,3])) //3
  console.log(getTrappedRainWater([9,2,9,3,2,2,1,4,8])) //35
  console.log(getTrappedRainWater([9,8,3,2,3,3,4,5,7,3])) //22
  console.log(getTrappedRainWater([4,3,8,3,1,5,9,9,0,4,3,4,7])) //33
  console.log(getTrappedRainWater([1,9,7,1,3,6,4,7,4,8,3,6,3,5,3,7])) //39
```
### <font color="#76923c">Analyze Space and Time Complexity</font>

- Solution 1(BruteForce) has bad time complexity. O(N^2) Space complexity is O(1).
- Solution 2 is the best, since it has good time complexity O(N) compared to the first one and good space comlexity as well! O(1)

















### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2025-01-21 - Arrays - Question 3 Trapping Rainwater (Hard)1\|2025-01-21 - Arrays - Question 3 Trapping Rainwater (Hard)1 Report]]
[[3_Learning/Report/Developing/Daily/2025-01-21 - Developing\|2025-01-21 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





