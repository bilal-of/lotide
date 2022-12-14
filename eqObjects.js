const assertEqual = function(actual, expected) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const eqArrays = function(array1, array2) { 
  if (array1.length !== array2.length) {
    return false
  }

  for (i = 0; i < array1.length; i++) { 
    if (array1[i] !== array2[i]) {
      return false
    } 
  }  
  return true 
   
} 

const eqObjects = function(object1, object2) { 
  let objectKeys = Object.keys(object1) 
  let objectKeys2 = Object.keys(object2) 

  if (Object.keys(object1).length === Object.keys(object2).length) {  
    for (let key of objectKeys) { 
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false
        }
      } 
      else if (object1[key] !== object2[key]) { 
        return false
      }
    } 
  } 
  else { 
    return false
  }  
  return true
  
};

// TEST CODE


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true 
assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false 
assertEqual(eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false