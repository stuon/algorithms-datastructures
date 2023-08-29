# Exploring Palindrome String Problem in JavaScript

A palindrome is a sequence of characters that remains unchanged when read backwards. It can be a word, phrase, number, or any combination thereof. For example, "racecar," "madam," and "12321" are palindromes, while "hello," "world," and "12345" are not.

## Solution 1: Using Reverse Comparison

This solution involves reversing the given string and comparing it with the original string. If they are the same, the string is a palindrome; otherwise, it's not.

```javascript
function isPalindromeReverseComparison(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```

**Time Complexity (O Complexity)**

The time complexity of this approach is O(n), where n is the length of the input string. Splitting, reversing, and joining the string each take linear time, resulting in a total linear time complexity.

## Solution 2: Using Two Pointers

Here, we use two pointers to compare characters from the beginning and end of the string towards the middle. If at any point the characters do not match, the string is not a palindrome.

```javascript
function isPalindromeTwoPointers(str) {
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
```

**Time Complexity (O Complexity)**  

The time complexity of this solution is O(n), where n is the length of the input string. The two pointers traverse the string only once, giving us a linear time complexity.

## Solution 3: Half-Indexing "For" Loop

A clever alternative involves using a "for" loop to compare characters from the beginning and end, only up to the midpoint.

```javascript
function isPalindromeHalfIndex(str) {
  const length = str.length;
  const mid = Math.floor(length / 2);
  
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}
```

**Time Complexity (O Complexity)**

The time complexity of this approach remains O(n), where n is the length of the input string. Since we iterate only up to the midpoint, the loop performs fewer operations, but it still scales linearly with the input size.

## Solution 4: Using Recursion

A recursive approach can also be used to check for palindromes. The base case is when the string has one or zero characters (which are palindromes). Otherwise, the first and last characters are compared, and the inner substring is checked recursively.

```javascript
function isPalindromeRecursion(str) {
  if (str.length <= 1) {
    return true;
  }
  
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  
  return isPalindromeRecursion(str.substring(1, str.length - 1));
}
```

**Time Complexity**  

The time complexity of the recursive approach is O(n), where n is the length of the input string. In the worst case, each character of the string is compared once, resulting in a linear time complexity.

## Test Cases

Here are seven test cases for the isPalindrome function in JavaScript, including various scenarios and edge cases:

```javascript
console.log(isPalindrome(""));                  // true (Empty string is a palindrome)
console.log(isPalindrome("a"));                 // true (Single character is a palindrome)
console.log(isPalindrome("racecar"));           // true (Standard palindrome)
console.log(isPalindrome("hello"));             // false (Non-palindrome)
console.log(isPalindrome("12321"));             // true (Numeric palindrome)
console.log(isPalindrome("hello olleh"));       // true (Mirror image)
console.log(isPalindrome("algorithm"));         // false (Non-palindrome)

````