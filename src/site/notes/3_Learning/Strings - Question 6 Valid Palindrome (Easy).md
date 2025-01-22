---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Strings---Question-6-Valid-Palindrome-(Easy)","created-date":"2025-01-22 4:31:55 pm","date":"2025-01-22","type":"developing","tags":["developing"],"aliases":null,"name":"Valid Palindrome (Easy)","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Strings---Question-6-Valid-Palindrome-(Easy)/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Strings - Question 6 Valid Palindrome (Easy)\|Strings - Question 6 Valid Palindrome (Easy)]]
### <font color="#92d050">subproblem? </font>
sub problem is a problem we have to solve along the way to solving the main problem!
![Utilities/Images/Pasted image 20250122163342.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122163342.jpeg)
### <font color="#92d050">Palindrome?</font>
palindrome is a string that reads the same forwards and backwards
![Utilities/Images/Pasted image 20250122163813.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250122163813.jpeg)
1. we set two pointers and one pointer starts from the beginning, the other pointer starts from the end of the sentence, compare those characters
2. we set two pointers from the center of the sentence, and one pointer goes towards the beginning of the sentence, the other pointer goes towards the end of the sentence, compare those characters
3. we reverse the whole string and compare original strings and reversed strings match

## <font color="#9d0ab3">Question</font>
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity.

### <font color="#76923c">Verify the constraints</font>
- we can ignore the constraints because the question is very clear.

### <font color="#76923c">Write out some test cases</font>
1. "aabaa" //true
2. "aabbaa" //true
3. "abc" //false
4. "a" //true
5. "" //true
6. "A man, a plan, a canal:Panama" //true

### <font color="#76923c">Figure out a solution without code</font>
- remove all the characters that are not alphanumeric characters
- reverse the string
- compare the whole string

### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Solution 1</font>
```run-js
function isValidPalindrome(s){
 s = s.toLowerCase();
  let regex = /[^a-z0-9]/g
  for(let i = 0; i < s.length; i++){
    if(!s[i].match(regex)){
      s = s.slice(0, i) + s.slice(i+1)
      i--;
    }
  }
  let i = 0;
  let j = s.length - 1;
  while(i < j){
    if(s[i] !== s[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isValidPalindrome("aabaa"))
console.log(isValidPalindrome("aabbaa"))
console.log(isValidPalindrome("abc"))
console.log(isValidPalindrome("a"))
console.log(isValidPalindrome(""))
console.log(isValidPalindrome(" A man, a plan, a canal:Panama"))
console.log(isValidPalindrome("aabaa"))

```
#### <font color="#00b050">Solution 2 (More advanced version of solution 1 - regex optimization)</font>
```run-js
function isValidPalindrome(s){
 s = s.toLowerCase();
  let regex = /[^a-z0-9]/g
 s = s.replace(regex, "");
  let i = 0;
  let j = s.length - 1;
  while(i < j){
    if(s[i] !== s[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isValidPalindrome("aabaa"))
console.log(isValidPalindrome("aabbaa"))
console.log(isValidPalindrome("abc"))
console.log(isValidPalindrome("a"))
console.log(isValidPalindrome(""))
console.log(isValidPalindrome(" A man, a plan, a canal:Panama"))
console.log(isValidPalindrome("aabaa"))

```

### <font color="#76923c">Analyze Space and Time Complexity</font>
- Solution 1
	- Time Complexity : O(N)
	- Space Complexity : O(1)
- Solution 2
	- Time Complexity : O(N)
	- Space Complexity : O(1)
















### <font color="#92d050">Developing References</font>
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-22 - Strings - Question 6 Valid Palindrome (Easy)\|2025-01-22 - Strings - Question 6 Valid Palindrome (Easy) Report]]
[[3_Learning/Report/Developing/Daily/2025-01-22 - Developing\|2025-01-22 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





