---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Arrays---Question-3-Trapping-Rainwater","created-date":"2025-01-15 2:11:49 pm","date":"2025-01-15","type":"developing","tags":["developing"],"aliases":null,"title":"Arrays - Question 3 Trapping Rainwater","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Arrays---Question-3-Trapping-Rainwater/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Arrays - Question 3 Trapping Rainwater\|Arrays - Question 3 Trapping Rainwater]]
## <font color="#9d0ab3">Question</font>
![Utilities/Images/Pasted image 20250115141625.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250115141625.jpeg)
Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.

### <font color="#76923c">Verify the constraints</font>
1. Do the left and right sides of the graph count as walls? - No, the sides are not walls. ![Utilities/Images/Pasted image 20250115142031.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250115142031.jpeg)
2. Will there be negative integers as well? - No, assume all integers are positive.

### <font color="#76923c">Write out some test cases</font>
1. [3,4,3] 0
2. [] 0
3. array [3] 0
4. [0,1,0,2,1,0,3,1,0,1,2] 8
5. [3,4,2,3] 1

### <font color="#76923c">Figure out a solution without code</font>
ex. [0,1,0,2,1,0,3,1,0,1,2]

- loop over elements until the height is higher than max height value, stop the loop for a second and calculate the area. Then, set max value to newly created max value and loop until the next max value comes up. 
- What if the height is lower than max height value and we reached the end of the array? That's the exception case. We just find the secondMax constantly and if loop reached secondMax height value then we move maxHeight to secondMaxHeight value.
### <font color="#76923c">Write out our solution in code(Brute Force solution)</font>
```run-js
function getTrappedRainWater(array){
  let leftHeight = 0;
  let leftHeightIndex = 0;
  let secondMaxIndex = 0;
  let walls = 0;
  let trappedWater = 0;
  let wallsPoint = [];
  let wallsEndPoint = [];
  let point = 0;
  let secondMax = 0;

  for(let i = 0; i < array.length-1; i++){
    if(wallsPoint.length === 0){ //initWall
      if(array[i] > array[i+1]){
        wallsPoint.push(i);
        leftHeight = array[i];
        leftHeightIndex = i;
      }
    }else if((array[i-1] < array[i] && array[i] >= array[i+1])){//walls
      if(leftHeight <= array[i]){
        wallsPoint.push(i);
        leftHeight = array[i];
        leftHeightIndex = i;
        wallsEndPoint = [];
        secondMax = 0;
      }else{
        if(secondMax < array[i]){
          secondMax = array[i];
          wallsEndPoint=[];
        }
        if(wallsEndPoint.length !== 0){
          if(array[wallsEndPoint[wallsEndPoint.length - 1]] < array[i]){
            wallsEndPoint = wallsEndPoint.slice(0, wallsEndPoint.length-1)
          }
        }
        wallsEndPoint.push(i);
      }
    }else{
      if(secondMax < array[i]){
        secondMax = array[i]
      }
    }
  }

  if(array[array.length-1] < leftHeight && wallsEndPoint.length !== 0){
    wallsEndPoint.push(array.length-1);
    while(leftHeightIndex !== wallsEndPoint[wallsEndPoint.length - 1]){
      let lookupArr = wallsEndPoint.filter(p => p > leftHeightIndex);
      if(lookupArr.length > 1){
        secondMaxIndex = lookupArr.reduce( function (previous, current) {
          return array[previous] > array[current] ? previous:current;
        });
      }else{
        break;
      }
      let tempArr = wallsEndPoint.slice();
      let point = 0;
      for(let i = 0; wallsEndPoint[i]<secondMaxIndex;i++){
        if(wallsEndPoint[i] === secondMaxIndex){
          break;
        }
        
        if(array[wallsEndPoint[i]] < array[secondMaxIndex]){
          tempArr.splice(point, 1)
          point--;
        }
        point++;
      }
      wallsEndPoint = tempArr;
      leftHeightIndex = secondMaxIndex;
    }
    wallsEndPoint = wallsEndPoint.slice(0, wallsEndPoint.length - 1)
    wallsPoint.push(...wallsEndPoint)
  }

  if(array[array.length-1] > array[array.length-2]){ //endWall
    wallsPoint.push(array.length-1);
  }

  for(let i = wallsPoint[0]+1; i < array.length; i++){
      if(i === Number(array.length - 1)){
        if(array[i] > array[i-1]){
          let width = i - wallsPoint[point];
          let height = Math.min(array[i], array[wallsPoint[point]]);
          trappedWater += width * height - (walls+height);
        }
        break;
      }

      if(i === wallsPoint[point+1]){//walls
        let width = i - wallsPoint[point];
        let height = Math.min(array[i], array[wallsPoint[point]]);
        trappedWater += width * height - (walls+height);
        walls = 0;
        point++;
      }else{
        let minHeight = Math.min(array[wallsPoint[point]], array[wallsPoint[point+1]]);
        if(array[i] <= minHeight){
          walls+= array[i];
        }else{
          walls+= minHeight;
        }
      }
  }

  return trappedWater;
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



### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2025-01-15 - Arrays - Question 3 Trapping Rainwater\|2025-01-15 - Arrays - Question 3 Trapping Rainwater Report]]
[[3_Learning/Report/Developing/Daily/2025-01-15 - Developing\|2025-01-15 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-3th - Developing\|2025-01-3th - Developing Weekly Report]]





