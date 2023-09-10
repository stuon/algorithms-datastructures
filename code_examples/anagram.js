// Solving the Anagram Problem with JavaScript
// Anagrams are words or phrases formed by rearranging the letters of another word or phrase, 
// using all the original letters exactly once. 
// Consider only alphanumeric characters and ignore letter cases. 

// Test Case 1: Basic anagram
console.log(areAnagrams("listen", "silent"), "Expected: true");

// Test Case 2: Anagram with different letter cases
console.log(areAnagrams("Tea", "Eat"), "Expected: true");

// Test Case 3: Non-anagram with different lengths
console.log(areAnagrams("hello", "world"), "Expected: false");

// Test Case 4: Non-anagram with the same letters but different counts
console.log(areAnagrams("race", "car"), "Expected: false");

// Test Case 5: Anagram with repeated letters
console.log(areAnagrams("debit card", "bad credit"), "Expected: true");

// Test Case 6: Anagram with numbers
console.log(areAnagrams("12345", "54321"), "Expected: true");

// Test Case 7: Empty strings are considered anagrams
console.log(areAnagrams("", ""), "Expected: true");

// Test Case 8: Anagrams with special characters
console.log(areAnagrams("dormitory", "dirty room##"), "Expected: true");

// Method 1: Sorting and Comparing
function areAnagramsSort(word1, word2) {
  word1 = word1.toLowerCase().replace(/[^a-z0-9]/g, "");
  word2 = word2.toLowerCase().replace(/[^a-z0-9]/g, "");

  return word1.split("").sort().join("") === word2.split("").sort().join("");
}

//  Method 2: Character Frequency Map
function areAnagramsMap(word1, word2) {
  word1 = word1.toLowerCase().replace(/[^a-z0-9]/g, "");
  word2 = word2.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (word1.length !== word2.length) return false;

  const charMap1 = {};
  const charMap2 = {};

  for (let char of word1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (let char of word2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) return false;
  }

  return true;
}

// Method 3: Array-based Approach

function areAnagramsArray(word1, word2) {
  word1 = word1.toLowerCase().replace(/[^a-z0-9]/g, "");
  word2 = word2.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (word1.length !== word2.length) return false;

  const charCount1 = Array(26).fill(0);
  const charCount2 = Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const index = word1.charCodeAt(i) - "a".charCodeAt(0);
    charCount1[index]++;
  }

  for (let i = 0; i < word2.length; i++) {
    const index = word2.charCodeAt(i) - "a".charCodeAt(0);
    charCount2[index]++;
  }

  return charCount1.join("") === charCount2.join("");
}
