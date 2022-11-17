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

const takeUntil = function(array, callback) {
  // clean version
  const results = [] 
  for (let item of array) {  
    if (callback(item)) 
      return results 
    
    results.push(item)
  }
  // original version
  //   if (!callback(item)) {
  //     results.push(item); 
  //   } 
  //   else {
  //     return results
  //   }
   
  // return results
}  


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); 


assertEqual(eqArrays(results1, [1, 2, 5, 7, 2] ), true); // => should PASS
assertEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood"] ), true); //=> should PASS
