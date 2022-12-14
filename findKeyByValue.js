// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}; 

const findKeyByValue = function(obj, value) {
  // i want to go through the object 
  // get value for key 
  //then compare  
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;

}


// TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
