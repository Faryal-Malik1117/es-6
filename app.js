//Q1: Convert all elements to their string representation using map method?


let arr1 = [1, 'hello', true, null, undefined];
let stringifiedArr = arr.map(String);
console.log(stringifiedArr); // Output: ['1', 'hello', 'true', 'null', 'undefined']


//Q2: Filter only number elements using filter method?


let arr2 = [1, 'hello', true, null, undefined, 3.14, 42];
let numbers = arr.filter(Number.isFinite);
console.log(numbers); // Output: [1, 3.14, 42]


//Q3: Log each element's type to console (does not return anything) using forEach method?


let arr3 = [1, 'hello', true, null, undefined];
arr.forEach(element => console.log(typeof element));
// Output:
// number
// string
// boolean
// object
// undefined


//Q4: Sum up only the numbers in the array by reduce method?


let arr4 = [1, 'hello', true, null, undefined, 3.14, 42];
let sum = arr.reduce((acc, current) => {
  if (typeof current === 'number') {
    return acc + current;
  }
  return acc;
}, 0);
console.log(sum); // Output: 46.14


//Q5: Find the first boolean value in an array using find method?


let arr5 = [1, 'hello', true, null, undefined];
let firstBoolean = arr.find(element => typeof element === 'boolean');
console.log(firstBoolean); // Output: true


//Q6: Find the index of the first object in the array using findIndex method?


let arr6 = [1, 'hello', true, null, undefined, {}];
let firstObjectIndex = arr.findIndex(element => typeof element === 'object');
console.log(firstObjectIndex); // Output: 5


//Q7: Check if the array contains any number in the array using some method?


let arr7 = [1, 'hello', true, null, undefined];
let containsNumber = arr.some(element => typeof element === 'number');
console.log(containsNumber); // Output: true
//Q8: Check if all elements are of type 'string' in an array using every method?


let arr8 = ['hello', 'world', 'javascript'];
let allStrings = arr.every(element => typeof element === 'string');
console.log(allStrings); // Output: true
