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

const letterPositions = function(sentence) {
  const position = {};
  // logic to update results here 
  for (i = 0; i < sentence.length; i++) {
    let letter = sentence[i] 
    if (position[letter]) {
      position[letter].push(i)
    } 
    else { 
      position[letter] = [i]
    }
  }
  return position; 

};


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(letterPositions("hello").e, [1]);

