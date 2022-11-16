// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } 
  else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}; 

const countLetters = function(words) { 
  const results = {} 
  for (const letter of words) { 
    if (results[letter]) { 
      results[letter] += 1
    } 
    else { 
      results[letter] = 1
    }
  } 
  return results
}

console.log(countLetters("lighthouse in the house"))

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);