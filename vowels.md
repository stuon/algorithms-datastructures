# The Vowels Counting Challenge: Solving It with JavaScript

## The Challenge

The challenge is to count the number of vowels (i.e., 'a', 'e', 'i', 'o', 'u') in a given string.

For example: when given the string "Running Egg", it should return 3, as there are three vowels: 'u', 'i' and 'E'.

## Test Cases
```javascript
// Test Case 1: Basic test
console.log(countVowels("Hello, world!"), "Expected: 3");

// Test Case 2: Testing with an empty string
console.log(countVowels(""), "Expected: 0");

// Test Case 3: Testing with a string that contains no vowels
console.log(countVowels("Rhythm"), "Expected: 0");

// Test Case 4: Testing with a string that contains only vowels
console.log(countVowels("aeiouAEIOU"), "Expected: 10");
```

## Solution 1: Iterative Approach
One way to solve this challenge is to iterate through the string character by character and check if each character is a vowel. We can use a loop to do this.

```javascript
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if ('aeiouAEIOU'.includes(char)) {
      count++;
    }
  }
  return count;
}
```

Explanation: This solution uses a `for...of` loop to iterate through each character in the input string. It checks if each character is a vowel using the `includes` method and increments the count if it's a vowel.

Time Complexity (O): This solution has a time complexity of O(n), where 'n' is the length of the input string.

## Solution 2: Regular Expression
JavaScript supports regular expressions, which provide a concise way to match patterns in strings.

```javascript
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```

Explanation: This solution uses a regular expression to match all vowels in the input string using the `/[aeiou]/gi` pattern. The 'g' flag ensures a global search, and the 'i' flag makes the search case-insensitive. We then return the length of the matched array.

Time Complexity (O): This solution also has a time complexity of O(n), where 'n' is the length of the input string. Regular expressions are highly optimized for such tasks.

# Solution 3: Reduce Function

We can use the `Array.prototype.reduce` method to count the vowels in the string.

```javascript
function countVowels(str) {
  return str.split('').reduce((count, char) => {
    return 'aeiouAEIOU'.includes(char) ? count + 1 : count;
  }, 0);
}
```

Explanation: This solution splits the string into an array of characters, then uses the `reduce` function to accumulate the count of vowels. For each character, it checks if it's a vowel and increments the count accordingly.

Time Complexity (O): This solution also has a time complexity of O(n), where 'n' is the length of the input string.