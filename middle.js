const assertEqual = function(actual, expected) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const eqArrays = function(array1, array2) { 
  for (i = 0; i < array1.length; i++) { 
    if (array1[i] !== array2[i]) {
      return false
    } 
  }  
  return true
     

}; 

const assertArraysEqual = function (arr1, arr2) { 
  if (eqArrays(arr1, arr2)) { 
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)

  }
}

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

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4] 
console.log(middle([13, 15, 17, 19, 21, 23])) // => [17, 19]