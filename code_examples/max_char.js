
// Max Char Problem is defined as follows:
// Given a string, return the character that occurs the most frequently.

// Test Cases
console.log(maxChar("hello")); // Expected output: 'l' (occurs 2 times)
console.log(maxChar("programming guy")); // Expected output: 'g' (occurs 3 times)
console.log(maxChar("aabbcc")); // Expected output: 'a' (occurs 2 times)
console.log(maxChar("")); // Expected output: '' (empty string)
console.log(maxChar("aaaaa")); // Expected output: 'a' (occurs 5 times)
console.log(maxChar("12345")); // Expected output: '1' (occurs 1 time)
console.log(maxChar(" a b c d e f ")); // Expected output: ' ' (space occurs 7 times)
console.log(maxChar("!@#$%^&*()")); // Expected output: '!' (occurs 1 time)


// Approach 1: Brute Force

function findMaxChar(str) {
  const charCount = {};
  
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  let maxChar = '';
  let maxCount = 0;
  
  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }
  
  return maxChar;
}


// Approach 2: Using a Map

function findMaxChar(str) {
  const charCount = new Map();
  
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  let maxChar = '';
  let maxCount = 0;
  
  charCount.forEach((count, char) => {
    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  });
  
  return maxChar;
}
