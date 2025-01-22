---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Strings---Question-4-Typed-Out-Strings-(Easy)","created-date":"2025-01-21 2:22:00 pm","date":"2025-01-21","type":"developing","tags":["developing"],"aliases":null,"name":"Strings - Question 4 Typed Out Strings (Easy)","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Strings---Question-4-Typed-Out-Strings-(Easy)/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Strings - Question 4 Typed Out Strings (Easy)\|Strings - Question 4 Typed Out Strings (Easy)]]
## <font color="#9d0ab3">Question</font>
![Utilities/Images/Pasted image 20250121143111.jpeg|200](/img/user/Utilities/Images/Pasted%20image%2020250121143111.jpeg)
![Utilities/Images/Pasted image 20250121143148.jpeg|400](/img/user/Utilities/Images/Pasted%20image%2020250121143148.jpeg)
Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace.


### <font color="#76923c">Verify the constraints</font>
1. What happens when two #'s appear beside each other? - Delete the two values before the first # 
 ![Utilities/Images/Pasted image 20250121143238.jpeg|200](/img/user/Utilities/Images/Pasted%20image%2020250121143238.jpeg)
2. What happens to # when there is no character to remove? - It deletes nothing then, just like backspace would. 
 ![Utilities/Images/Pasted image 20250121143408.jpeg|200](/img/user/Utilities/Images/Pasted%20image%2020250121143408.jpeg)
3. Are two empty strings equal to each other? - Yes, consider two empty strings as equal
![Utilities/Images/Pasted image 20250121143549.jpeg|500](/img/user/Utilities/Images/Pasted%20image%2020250121143549.jpeg)
4. Does case sensitvity matter? - Yes, it does. 'a' doesn't equal 'A'.

### <font color="#76923c">Write out some test cases</font>
1. "a###b"
2. S: "x#y#z#", T: "a#"
3. "ab##"
4. S: "ab#c", T: "#a####b##c"

### <font color="#76923c">Figure out a solution without code</font>
- remove previous letter that was typed before when it meets letter '#'. 
- case 1 : current index = 0
- case 2 : current index = string.length - 1
- case 3 : current index is between case1 and case2


### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Solution 1</font>
```run-js
function removeLetterSharp(S, T){
  let i = 0;
  let j = 0;
  while(i < S.length){
    if(S[i] === "#"){
      if(i >= 1 && i < S.length - 1){
        S = S.slice(0, i-1) + S.slice(i+1);
        i-=2;
      }else if(i===0){
        S = S.slice(1);
        i--;
      }else{
        S = S.slice(0, i-1);
      }
    }
    i++;
  }
  while(j < T.length){
    if(T[j] === "#"){
      if(j >= 1 && j < T.length - 1){
        T = T.slice(0, j-1) + T.slice(j+1);
        j-=2;
      }else if(j===0){
        T = T.slice(1);
        j--;
      }else{
        T = T.slice(0, j-1);
      }
    }
    j++;
  }
  console.log(S, T)
  if(S === T){
    return true;
  }
  return false;
}

console.log(removeLetterSharp("ab#c", "#a####b##c")) //false
console.log(removeLetterSharp("ab#z", "az#z")) //true
console.log(removeLetterSharp("abc#d", "acc#c")) //false
console.log(removeLetterSharp("x#y#z#", "a#")) //true
console.log(removeLetterSharp("a###b", "b")) //true
console.log(removeLetterSharp("Ab#z", "ab#z")) //false
```
#### <font color="#00b050">Solution 2</font>
```run-js
function removeLetterSharp(S, T){
  let i = 0;
  let j = 0;
  let SArr = [];
  let TArr = [];
  while(i < S.length){
    if(S[i] === "#"){
	if(i >= 1){
	      SArr.pop();
	}
    }else{
        SArr.push(S[i]);
    }
    i++;
  }
  while(j < T.length){
    if(T[j] === "#"){
	    if(j >= 1){
		    TArr.pop();
	    }
    }else{
	    TArr.push(T[j]);
    }
    j++;
  }
  console.log(S, T)
  if(SArr.join("") === TArr.join("")){
    return true;
  }
  return false;
}

console.log(removeLetterSharp("ab#c", "#a####b##c")) //false
console.log(removeLetterSharp("ab#z", "az#z")) //true
console.log(removeLetterSharp("abc#d", "acc#c")) //false
console.log(removeLetterSharp("x#y#z#", "a#")) //true
console.log(removeLetterSharp("a###b", "b")) //true
console.log(removeLetterSharp("Ab#z", "ab#z")) //false
```

### <font color="#76923c">Double check for errors</font>
### <font color="#76923c">Test our code with our test cases</font>
### <font color="#76923c">Analyze Space and Time Complexity</font>
- Solution 1
	- Time Complexity : O(A + B)
	- Space Complexity : O(1)
- Solution 2
	- Time Complexity : O(A + B)
	- Space Complexity : O(A + B)





### <font color="#92d050">Developing References</font>
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-21 - Strings - Question 4 Typed Out Strings (Easy)\|2025-01-21 - Strings - Question 4 Typed Out Strings (Easy) Report]]
[[3_Learning/Report/Developing/Daily/2025-01-21 - Developing\|2025-01-21 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





