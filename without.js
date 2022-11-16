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

const assertArraysEqual = function(arr1, arr2) { 
  if (eqArrays(arr1, arr2)) { 
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)

  }
} 

const without = function(source, itemsToRemove) { 
  new_array = []
  for (i = 0; i < source.length; i++) { 
    if (source[i] !== itemsToRemove[i]) { 
      new_array.push(source[i])
    }
  } 
  return new_array
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));