# Solving the Max Char Problem in JavaScript

Given a string, return the character that occurs the most frequently.

```javascript
console.log(maxChar("hello")); // Expected output: 'l' (occurs 2 times)
console.log(maxChar("programming")); // Expected output: 'g' (occurs 2 times)
console.log(maxChar("aabbcc")); // Expected output: 'a' (occurs 2 times)
console.log(maxChar("")); // Expected output: '' (empty string)
console.log(maxChar("aaaaa")); // Expected output: 'a' (occurs 5 times)
console.log(maxChar("12345")); // Expected output: '1' (occurs 1 time)
console.log(maxChar("  a b c d e f ")); // Expected output: ' ' (space occurs 7 times)
console.log(maxChar("!@#$%^&*()")); // Expected output: '!' (occurs 1 time)
```

## Approach 1: Brute Force
The simplest way to solve the Max String Problem is to use a brute force approach. In this method, you iterate through each character in the string and maintain a count of each character in a data structure (e.g., an object or a Map). Then, you find the character with the highest count.

```javascript
Copy code
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
```

Time Complexity: This brute force approach has a time complexity of O(n), where n is the length of the input string.

# Approach 2: Using a Map
A more modern and efficient way to solve this problem is by using a Map data structure to store character frequencies.

```javascript
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
```

Time Complexity: This approach also has a time complexity of O(n), where n is the length of the input string. However, using a Map can be more efficient for large datasets and provides a cleaner and more concise solution.