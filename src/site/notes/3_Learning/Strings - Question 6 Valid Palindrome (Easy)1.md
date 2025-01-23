---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Strings---Question-6-Valid-Palindrome-(Easy)1","created-date":"2025-01-23 9:32:33 am","date":"2025-01-23","type":"developing","tags":["developing"],"aliases":null,"name":"Strings - Question 6 Valid Palindrome (Easy)","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Strings---Question-6-Valid-Palindrome-(Easy)1/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Strings - Question 6 Valid Palindrome (Easy)1\|Strings - Question 6 Valid Palindrome (Easy)1]]
### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Solution 3 (two pointers from the middle index) </font> 
```run-js
function isValidPalindrome(s){
if(s.length <= 1){
	return true;
}
 s = s.toLowerCase();
  let regex = /[^a-z0-9]/g
 s = s.replace(regex, "");
 let i = 0;
 let j = 0;

 if(s.length % 2 === 0){
	 i = Math.floor(s.length / 2) - 1;
	 j = i+1;
 }else{
	 i = Math.floor(s.length / 2);
	 j = i;
 }

  while(i>=0 && j <= s.length - 1){
    if(s[i] !== s[j]){
      return false;
    }
    i--;
    j++;
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
#### <font color="#00b050">Solution 4 (reverse string) </font> 
```run-js
function isValidPalindrome(s){
if(s.length <= 1){
	return true;
}
 s = s.toLowerCase();
  let regex = /[^a-z0-9]/g
 s = s.replace(regex, "");
 let i = 0;
 let j = 0;
 let reversedStr = "";
for(let i = s.length - 1; i>=0; i--){
	reversedStr += s[i];
}

if(reversedStr !== s){
	return false;
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
- Solution 3
	- Time Complexity : O(N)
	- Space Complexity : O(1)
- Solution 4
	- Time Complexity : O(N)
	- Space Complexity : O(1)

## Question
Given a string, determine if it's almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity.
![Utilities/Images/Pasted image 20250123095618.jpeg|300](/img/user/Utilities/Images/Pasted%20image%2020250123095618.jpeg)
![Utilities/Images/Pasted image 20250123095415.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123095415.jpeg)
![Utilities/Images/Pasted image 20250123095551.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250123095551.jpeg)

### <font color="#76923c">Verify the constraints</font>
- Do we consider a palindrome as almost a palindrome? - Yes, return true if the string is already a palindrome

### <font color="#76923c">Write out some test cases</font>
1. "race a car" //true
2. "aabbcaa" //true
3. "abccdba" //true
4. "a" //true
5. "" //true
6. "A man, a plan, a canal:Panama" //true
7. "abcdefdba" //false
8. "Ab" //true

### <font color="#76923c">Figure out a solution without code</font>
- No reversal comparison, since we have to stop the index and the compare the letter
- use two pointers from the outside!

### <font color="#76923c">Write out our solution in code</font>
#### <font color="#00b050">Solution 1</font>
```run-js
function almostAPalindrome(s){
	s = s.toLowerCase();
	s = s.replace(/[^a-z0-9]/g, "");
	let removeLetter = false;
	let reversedStr1 = "";
	let reversedStr2 = "";
	let i = 0;
	for(let j = s.length - 1; i < j; j--){
		if(s[i] !== s[j]){
			if(removeLetter){
			        return false;
			}
		      removeLetter = true;
		      if(s[j-1] !== s[i] && s[j] !== s[i+1]){
			       return false;
		      }
			if(s[j-1] === s[i] && s[j] === s[i+1]){
			        reversedStr1 = s.slice(0, j) + s.slice(j+1)
			        reversedStr2 = s.slice(0, i) + s.slice(i+1)
			        break;
			}
			if(s[j-1]===s[i]){
			        j--;
			        i++;
		      }else if(s[j] === s[i+1]){
			        i+=2;
		      }
	    }else{
		     i++;
	    }
  }

  if(reversedStr1 !== "" && !isPalindrome(reversedStr1) && reversedStr2 !== "" && !isPalindrome(reversedStr2)){
    return false;
  }
  return true;
}

function isPalindrome(s){
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

console.log(almostAPalindrome("race a car"))
console.log(almostAPalindrome("aabbcaa"))
console.log(almostAPalindrome("abdccba"))
console.log(almostAPalindrome("a"))
console.log(almostAPalindrome(""))
console.log(almostAPalindrome("A man, a plan, a canal:Panama"))
console.log(almostAPalindrome("abcdefdba"))
console.log(almostAPalindrome("Ab"))
console.log(almostAPalindrome("eceec"))
console.log(almostAPalindrome("adceceadbddbdaececrda"))
```

#### <font color="#00b050">solution 2</font>
```run-js
function almostAPalindrome(s){
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");
  let i = 0;
  let j = s.length - 1;
  let reversedStr1 = ""
  let reversedStr2 = ""
  for(; i < j; j--){
    if(s[i] !== s[j]){
          if(s[j-1] !== s[i] && s[j] !== s[i+1]){
             return false;
          }
      if(s[j-1] === s[i] || s[j] === s[i+1]){
              reversedStr1 = s.slice(0, j) + s.slice(j+1)
              reversedStr2 = s.slice(0, i) + s.slice(i+1)    
      }
      break;
      }else{
         i++;
      }
  }

  if(reversedStr1 !== "" && reversedStr2 !== ""){
    if(!isPalindrome(reversedStr1, i, j-1) && !isPalindrome(reversedStr2, i, j-1)){
      return false;
    }
  }
  return true;
}

function isPalindrome(s, i, j){
  while(i < j){
    if(s[i] !== s[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(almostAPalindrome("race a car"))
console.log(almostAPalindrome("aabbcaa"))
console.log(almostAPalindrome("abdccba"))
console.log(almostAPalindrome("a"))
console.log(almostAPalindrome(""))
console.log(almostAPalindrome("A man, a plan, a canal:Panama"))
console.log(almostAPalindrome("abcdefdba"))
console.log(almostAPalindrome("Ab"))
console.log(almostAPalindrome("eceec"))
console.log(almostAPalindrome("adceceadbddbdaececrda"))
```

#### <font color="#00b050">solution 3</font>
```run-js
function almostAPalindrome(s){
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");
  let i = 0;
  let j = s.length - 1;
  for(; i < j; j--){
    if(s[i] !== s[j]){
         if(!isPalindrome(s, i+1, j)  && !isPalindrome(s, i, j-1)){
	         return false;
         }else{
	         return true;
         }
      }else{
         i++;
      }
  }
  return true;
}

function isPalindrome(s, i, j){
  while(i < j){
    if(s[i] !== s[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(almostAPalindrome("race a car"))
console.log(almostAPalindrome("aabbcaa"))
console.log(almostAPalindrome("abdccba"))
console.log(almostAPalindrome("a"))
console.log(almostAPalindrome(""))
console.log(almostAPalindrome("A man, a plan, a canal:Panama"))
console.log(almostAPalindrome("abcdefdba"))
console.log(almostAPalindrome("Ab"))
console.log(almostAPalindrome("eceec"))
console.log(almostAPalindrome("adceceadbddbdaececrda"))
console.log(almostAPalindrome("tcaac"))
```

### <font color="#76923c">Analyze Space and Time Complexity</font>
- Solution 1
	- Time Complexity : O(N)
	- Space Complexity : O(N)
- Solution 2
	- Time Complexity : O(N)
	- Space Complexity : O(N)
- Solution 3
	- Best Solution!
	- Time Complexity : O(N)
	- Space Complexity : O(1)













### <font color="#92d050">Developing References</font>
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-23 - Strings - Question 6 Valid Palindrome (Easy)1\|2025-01-23 - Strings - Question 6 Valid Palindrome (Easy)1 Report]]
[[3_Learning/Report/Developing/Daily/2025-01-23 - Developing\|2025-01-23 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





