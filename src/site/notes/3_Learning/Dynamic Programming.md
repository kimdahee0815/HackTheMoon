---
{"dg-permalink":"3_Learning/Dynamic-Programming","dg-note-icon":"developing","created-date":"2024-11-01 2:55:06 pm","date":"2024-11-01","type":"developing","tags":["developing"],"aliases":null,"courseName":"Master the Coding Interview: Data Structures + Algorithms","dg-publish":true,"permalink":"/3_Learning/Dynamic-Programming/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Dynamic Programming\|Dynamic Programming]]
## Memoization
### Caching
A way for us to speed up programs and hold some piece of data in an easily accessible box

### Memoization
A specific form of caching

```js
function addTo80(n){
	console.log('longgg time to do the calculation')
	return n + 80;
}

addTo80(5)
addTo80(5) //you have to do this again
addTo80(5) //you have to do this again
```

```js
let cache = {};
function memoizedAddTo80(n){
	if(n in cache){
		return cache[n];
	}else{
		console.log('long time');
		cache[n] = n + 80;
		return cache[n];
	}
}
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(6));
```

```js 
//use [[Closure]]
function memoizeAddTo80(n) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("long time");
            const answer = n + 80;
            cache[n] = answer;
            return answer;
        }
    };
}
const memoized = memoizeAddTo80();
console.log('1', memoized(5));
console.log('1', memoized(5));
console.log('1', memoized(6));
```

### How to Solve?
**Divde & Conquer + Memoization**

1. Can be divided into subproblem
2. Recursive Solution
3. Are there repetitive subproblems?
4. Memoize subproblems
5. Demand a raise from your boss

```js
let calculations = 0;
function fibonacci(n) {
    calculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
calculations = 0;
console.log(fibonacci(6));
console.log("For Fbonacci func(6) We did " + calculations);
calculations = 0;
console.log(fibonacci(7));
console.log("For Fbonacci func(7) We did " + calculations);
calculations = 0;
console.log(fibonacci(10));
console.log("For Fbonacci func(10) We did " + calculations);


function finbonacciMaster() {
    let cache = {};
    return function fib(n) {
	 calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                cache[n] = n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
            }
            return cache[n];
        }
    };
}

const fibonacciM1 = finbonacciMaster();
calculations = 0;
console.log(fibonacciM1(6));
console.log("For fibonacciM func(6) We did " + calculations);
const fibonacciM2 = finbonacciMaster();
calculations = 0;
console.log(fibonacciM2(7));
console.log("For fibonacciM func(7) We did " + calculations);
const fibonacciM3 = finbonacciMaster();
calculations = 0;
console.log(fibonacciM3(10));
console.log("For fibonacciM func(10) We did " + calculations);
```












### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2024-11-01 - Dynamic Programming\|2024-11-01 - Dynamic Programming Report]]
[[3_Learning/Report/Developing/Daily/2024-11-01 - Developing\|2024-11-01 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2024-11-1th - Developing\|2024-11-1th - Developing Weekly Report]]


