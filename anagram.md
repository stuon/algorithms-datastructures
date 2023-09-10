# Solving the Anagram Problem with JavaScript

Anagrams are words or phrases formed by rearranging the letters of another word or phrase, using all the original letters exactly once. Let's explore various methods to solve the anagram problem using JavaScript while considering only alphanumeric characters and ignoring letter cases. 

## Test Cases
```javascript
// Test Case 1: Basic anagrams
console.log("Test Case 1:", areAnagrams("listen", "silent")); // Expected output: true

// Test Case 2: Anagrams with different letter cases
console.log("Test Case 2:", areAnagrams("Hello", "oLleh")); // Expected output: true

// Test Case 3: Words with different lengths
console.log("Test Case 3:", areAnagrams("apple", "pale")); // Expected output: false

// Test Case 4: Anagrams with special characters
console.log("Test Case 4:", areAnagrams("dormitory", "dirty room##")); // Expected output: true

// Test Case 5: Non-anagrams with the same characters
console.log("Test Case 5:", areAnagrams("hello", "world")); // Expected output: false

// Test Case 6: Empty strings
console.log("Test Case 6:", areAnagrams("", "")); // Expected output: true

// Test Case 7: Anagrams with spaces
console.log("Test Case 7:", areAnagrams("a gentleman", "elegant man")); // Expected output: true
```

## Method 1: Sorting and Comparing

One of the simplest ways to check if two words are anagrams is to sort the characters of both words and compare the sorted strings. If the sorted strings match, the words are anagrams.

```javascript
function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase().replace(/[^a-z0-9]/g, '');
  word2 = word2.toLowerCase().replace(/[^a-z0-9]/g, '');

  return word1.split('').sort().join('') === word2.split('').sort().join('');
}
```

**Time Complexity:** The time complexity of this approach is O(n log n), where n is the length of the longer word. Sorting takes O(n log n) time, and the comparison takes O(n) time.

## Method 2: Character Frequency Map

Another approach is to create a frequency map of characters in each word and compare the maps. If the frequency of each character in both maps is the same, the words are anagrams.

```javascript
function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase().replace(/[^a-z0-9]/g, '');
  word2 = word2.toLowerCase().replace(/[^a-z0-9]/g, '');

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
```

**Time Complexity:** This approach has a time complexity of O(n), where n is the length of the longer word. It involves iterating through both words once to build the frequency maps and then comparing the maps.

## Method 3: Array-based Approach

We can use arrays to count the occurrences of each character in both words and compare the arrays.

```javascript
function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase().replace(/[^a-z0-9]/g, '');
  word2 = word2.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (word1.length !== word2.length) return false;

  const charCount1 = Array(26).fill(0);
  const charCount2 = Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const index = word1.charCodeAt(i) - 'a'.charCodeAt(0);
    charCount1[index]++;
  }

  for (let i = 0; i < word2.length; i++) {
    const index = word2.charCodeAt(i) - 'a'.charCodeAt(0);
    charCount2[index]++;
  }

  return charCount1.join('') === charCount2.join('');
}
```

**Time Complexity:** This approach also has a time complexity of O(n), where n is the length of the longer word. It involves iterating through both words once to build the character count arrays and then comparing them.
