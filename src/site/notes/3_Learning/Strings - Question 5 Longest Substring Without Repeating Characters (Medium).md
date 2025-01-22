---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Strings---Question-5-Longest-Substring-Without-Repeating-Characters-(Medium)","created-date":"2025-01-22 1:25:46 pm","date":"2025-01-22","type":"developing","tags":["developing"],"aliases":null,"name":"Strings - Question 5 Longest Substring Without Repeating Characters","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Strings---Question-5-Longest-Substring-Without-Repeating-Characters-(Medium)/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Strings - Question 5 Longest Substring Without Repeating Characters (Medium)\|Strings - Question 5 Longest Substring Without Repeating Characters (Medium)]]
## <font color="#9d0ab3">Question</font>
![Utilities/Images/Pasted image 20250122132829.jpeg|300](/img/user/Utilities/Images/Pasted%20image%2020250122132829.jpeg)
Given a string, find the length of the longest substring without repeating characters

### <font color="#76923c">Verify the constraints</font>
1. Is the substring contiguous? - Yes, look for a substring not a subsequence. ![Utilities/Images/Pasted image 20250122133100.jpeg|450](/img/user/Utilities/Images/Pasted%20image%2020250122133100.jpeg)
2. Does case sensitivity matter? - No, assume all characters in the string are lowercase.

### <font color="#76923c">Write out some test cases</font>
1. "abccabb" - 3
2. "cccccccc" - 1
3. "" - 0
4. "abcbda" - 4
5. "abcbdca" - 4

### <font color="#76923c">Figure out a solution without code</font>

1. start from the 0 index, pointer goes forward and save the letter in the object (letter : index) until it meets the same letter
2. if it meets the same letter, then pointer goes backward to the same previous letter index + 1
3. start from that index and repeat this process all over again
4. while doing this, save the max value in the max varient


### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Solution 1</font>
```run-js
function longestSubstrWithoutRepeatingChar(str){
    let i = 0;
    let charObj = {};
    let max = 0;
	while(i < str.length){
	    if(!charObj[str[i]]){
	        charObj[str[i]] = i;
	        i++;
          }else{
            let len = Object.keys(charObj).length;
            if(max < len){
                max = len;
            }
            let prevRepeatedCharIndex = charObj[str[i]];
            i = prevRepeatedCharIndex + 1;
           charObj = {}
        }
    }
  let len = Object.keys(charObj).length;
  if(max < len){
    max = len;
  }
    return max;
}

console.log(longestSubstrWithoutRepeatingChar("abccabb"))
console.log(longestSubstrWithoutRepeatingChar("ccccccccc"))
console.log(longestSubstrWithoutRepeatingChar(""))
console.log(longestSubstrWithoutRepeatingChar("abcbda"))
console.log(longestSubstrWithoutRepeatingChar("abcbdca"))
console.log(longestSubstrWithoutRepeatingChar("abcdefbaghghijklm"))
```

#### <font color="#ff0000">Sliding Window Technique!</font>

Form a window over some portion of sequential data, then move that window throughout the data to capture different parts of it! Move window like below
![Utilities/Images/Pasted image 20250122145516.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122145516.jpeg)
![Utilities/Images/Pasted image 20250122145600.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122145600.jpeg)
![Utilities/Images/Pasted image 20250122145644.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122145644.jpeg)
![Utilities/Images/Pasted image 20250122145627.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122145627.jpeg)
![Utilities/Images/Pasted image 20250122145703.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122145703.jpeg)
![Utilities/Images/Pasted image 20250122145713.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122145713.jpeg)

#### <font color="#00b050">Solution 2</font>
<font color="#ff0000">I used sliding window technique right out of my head, but this solution 2 is more optimized one!</font>

- Use a sliding window to represent the current substring.
- The size of the window will change based on new characters, and characters we've seen before.
- Our seen characters hashmap keeps track of what characters we've seen and the index we saw them at.

```run-js
function longestSubstrWithoutRepeatingChar(str){
  let L = 0;
  let R = 0;
  let charObj = {};
  let max = 0;
  while(R < str.length){
    if(charObj[str[R]] >= L){
      L = charObj[str[R]]+1;
    }
    charObj[str[R]] = R;
    let len = R - L + 1;
      if(max < len){
        max = len;
      }
      R++;
  }
  return max;
}

console.log(longestSubstrWithoutRepeatingChar("abccabb"))
console.log(longestSubstrWithoutRepeatingChar("ccccccccc"))
console.log(longestSubstrWithoutRepeatingChar(""))
console.log(longestSubstrWithoutRepeatingChar("abcbda"))
console.log(longestSubstrWithoutRepeatingChar("abcbdca"))
console.log(longestSubstrWithoutRepeatingChar("abcdefbaghghijklm"))
```


### <font color="#76923c">Analyze Space and Time Complexity</font>
- Solution 1
	- Time Complexity : O(N)
	- Space Complexity : O(N)
- Solution 2
	- Time Complexity : O(N)
	- Space Complexity : O(N)

#### <font color="#00b050">Leetcode Optimal Code</font>
<font color="#0070c0">if you use new Map(), runtime and memory usage is go way up. </font>










### <font color="#92d050">Developing References</font>
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-22 - Strings - Question 5 Longest Substring Without Repeating Characters (Medium)\|2025-01-22 - Strings - Question 5 Longest Substring Without Repeating Characters (Medium) Report]]
[[3_Learning/Report/Developing/Daily/2025-01-22 - Developing\|2025-01-22 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





