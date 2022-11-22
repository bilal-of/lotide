const assertArraysEqual = require('./assertEqualTest');
const middle = require('../middle') 

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4] 
console.log(middle([13, 15, 17, 19, 21, 23])) // => [17, 19]