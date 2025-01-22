---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Strings---Question-4-Typed-Out-Strings-(Easy)1","created-date":"2025-01-22 9:34:13 am","date":"2025-01-22","type":"developing","tags":["developing"],"aliases":null,"name":"Strings - Question 4 Typed Out Strings (Easy)","courseName":"Master the Coding Interview Big Tech (FAANG) Interviews","dg-publish":true,"permalink":"/3_Learning/Strings---Question-4-Typed-Out-Strings-(Easy)1/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Strings - Question 4 Typed Out Strings (Easy)1\|Strings - Question 4 Typed Out Strings (Easy)1]]

#### <font color="#00b050">Solution 3</font>
- Utilize the original strings
- Use two pointer technique
- Start from the end of the strings
##### <font color="#41c9cb">How I solved</font>
- Start from the end of the strings
- If the letter is hash, then count the number of hash and move the pointer
- If next letter is character, then decrease the number of hash and move the pointer
- If both characters are not hash and there are no number of hash left on both side, then compare the character and see if they are same or not

```run-js
function removeLetterSharp (s, t){
  let p = s.length - 1;
  let q = t.length - 1;
  let sHash = 0;
  let tHash = 0;
  while(p >=0 || q>=0){
    if(s[p] === "#"){
      sHash++;
      p--;
    }else{
      if(sHash > 0){
        sHash--;
        p--;
      }
    }

    if(t[q] === "#"){
      tHash++;
      q--;
    }else{
      if(tHash > 0){
        tHash--;
        q--;
      }
    }

    if(s[p] !== "#" && t[q] !== "#" && tHash === 0 && sHash === 0){
      if(s[p] !== t[q] ){
        return false;
      }
      p--;
      q--;
    }
  }
    return true;
}

console.log(removeLetterSharp("ab#c", "#a####a##c")); //true
console.log(removeLetterSharp("ab#z", "az#z")); //true
console.log(removeLetterSharp("abc#d", "acc#c")); //false
console.log(removeLetterSharp("x#y#z#", "a#")); //true
console.log(removeLetterSharp("a###b", "b")); //true
console.log(removeLetterSharp("Ab#z", "ab#z")); //false
```

### <font color="#76923c">Analyze Space and Time Complexity</font>
- Solution 3
	- Time Complexity : O(A+B)
	- Space Complexity : O(1)
	- Best Solution!




















### Class References
##### Class Report
[[3_Learning/Report/Developing/2025-01-22 - Strings - Question 4 Typed Out Strings (Easy)1\|2025-01-22 - Strings - Question 4 Typed Out Strings (Easy)1 Report]]
[[3_Learning/Report/Developing/Daily/2025-01-22 - Developing\|2025-01-22 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





