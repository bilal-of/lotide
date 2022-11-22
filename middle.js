const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length % 2 !== 0) { 
    index = (array.length - 1) / 2  
    result = array[index] 
    return result
  } 
  else { 
    index = (array.length) / 2 
    
    result2 = array[index - 1] 
    result = array[index] 

    newArr = [] 
    newArr.push(result2)
    newArr.push(result) 

    
    return newArr
    
  }
} 
module.exports = middle;

