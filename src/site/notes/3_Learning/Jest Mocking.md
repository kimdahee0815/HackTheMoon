---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/Jest-Mocking","created-date":"2025-01-20 9:56:25 pm","date":"2025-01-20","type":"developing","tags":["developing"],"aliases":null,"name":"Jest Mocking","courseName":"thinkstorm newsletter waiting list api","dg-publish":true,"permalink":"/3_Learning/Jest-Mocking/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/Jest Mocking\|Jest Mocking]]
## <font color="#9d0ab3">What is mocking?</font>
- When you do the unit test and you need to test the specific parts of your layer, you use mocking. 
- The parts where the layer depends on could be replaced with mocking functions. 

## <font color="#9d0ab3">Functions</font>
### <font color="#92d050">jest.fn</font>
#### <font color="#00b050">mockReturnValue(value)</font>
- set what value should be returned
```js
// make mock function
const mockFn = jest.fn();

// mock is empty function so default return value is undefined
mockFn(); // undefined
mockFn(1); // undefined
mockFn([1, 2], { a: "b" }); // undefined

// set mock return value
mockFn.mockReturnValue("I am a mock!"); // I am a mock!
```

```js
const mock = jest.fn();

mock.mockReturnValue(42);
mock(); // 42

mock.mockReturnValue(63);
mock(); // 63
```
#### <font color="#00b050">mockImplementation(value)</font>
- Originally, there is nothing inside of mock function. 
- MockImplementation is making the mock function that really functions!
```js
//empty mock function
const mockFn = jest.fn();

// Make mock function that really works
mockFn.mockImplementation( (name) => `I am ${name}!` ); 

console.log(mockFn("Dale")); // I am Dale!
```

```js
// You can also use jest.fn directly, this way is used a lot since it is more understandable
const mockFn = jest.fn( (name) => `I am ${name}!` );

console.log(mockFn("Dale")); // I am Dale!
```

#### <font color="#00b050">mockResolvedValue(value) / mockRejectedValue(value)</font>
- When you wanna use async function and get the resolved value or rejected value, you use mockResolvedValue or mockRejectedValue
- It remembers how it was called and remember the parameters that was used. You can check how many times they were called or with what parmeters were called by toBeCalledTimes or toBeCalledWith.
```js
test('async resolve test', async () => {
  const asyncMock = jest.fn().mockResolvedValue(43);

  await asyncMock(); // 43
});

test('async reject test', async () => {
  const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));

  await asyncMock(); // throws "Async error"
});
```

```js
test("mock Test", () => {
   const mockFn = jest.fn();
   mockFn.mockImplementation(name => `I am ${name}`);
     
   mockFn("a");
   mockFn(["b", "c"]);
   
   expect(mockFn).toBeCalledTimes(2); // How many times called? -> 2
   expect(mockFn).toBeCalledWith("a"); // called with a? -> true
   expect(mockFn).toBeCalledWith(["b", "c"]); // called with array? -> true
})
```

### <font color="#92d050">jest.mock</font>
- jest.fun() : you should set all the mocking functions respectively
- jest.mock() : make it a group and mock every functions inside all at once

```js
jest.mock('../models/user'); // objects exported from ../models/user.js group mocking
const User = require('../models/user'); // every elements from ../models/user.js are mocked

User.findOrCreate().mockReturnValue() // we can use right away without using jest.fn() 
```

### <font color="#92d050">jest.spyOn</font>
- Don't mock the function, we are using the function itself
- can get the result using the function
```js
test('spyOn Test', () => {
   // object
   const calculator = {
      add: (a, b) => a + b, // method
   };

   // add spyon to calculator.add() method 
   const spyFn = jest.spyOn(calculator, 'add');

   // method execution
   const result = calculator.add(2, 3);

   expect(spyFn).toBeCalledTimes(1); // How many times? -> 1
   expect(spyFn).toBeCalledWith(2, 3); // with what parameters? -> parameter 2, 3
   expect(result).toBe(5); // return value is 5? -> true
});
```


### <font color="#92d050">Developing References</font>
https://velog.io/@jay2u8809/Jest-%ED%95%A8%EC%88%98%EB%A5%BC-Mocking-%ED%95%B4%EB%B3%B4%EC%9E%90-jest.spyOn
https://fly.io/docs/reference/enveloop/
https://chrisboakes.com/mocking-javascript-class-inner-functions-with-jest/
https://jestjs.io/docs/es6-class-mocks#calling-jestmockdocsenjest-objectjestmockmodulename-factory-options-with-the-module-factory-parameter
https://4sii.tistory.com/623
https://www.daleseo.com/jest-mock-modules/
https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-%EB%AA%A8%ED%82%B9-mocking-jestfn-jestspyOn#mockreturnvaluevalue
https://minoo.medium.com/%EB%B2%88%EC%97%AD-jest-mocks%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4-34f75b0f7dbe
##### <font color="#41c9cb">Developing Report</font>
[[3_Learning/Report/Developing/2025-01-20 - Jest Mocking\|2025-01-20 - Jest Mocking Report]]
[[3_Learning/Report/Developing/Daily/2025-01-20 - Developing\|2025-01-20 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-4th - Developing\|2025-01-4th - Developing Weekly Report]]





