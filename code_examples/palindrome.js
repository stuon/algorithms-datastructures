// Palindrome - Given a string, check if the sequence of characters remains unchanged when read backwards.

// Test Cases

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;

}

console.log(isPalindrome(""));                  // true (Empty string is a palindrome)
console.log(isPalindrome("a"));                 // true (Single character is a palindrome)
console.log(isPalindrome("racecar"));           // true (Standard palindrome)
console.log(isPalindrome("hello"));             // false (Non-palindrome)
console.log(isPalindrome("12321"));             // true (Numeric palindrome)
console.log(isPalindrome("hello olleh"));       // true (Mirror image)
console.log(isPalindrome("algorithm"));         // false (Non-palindrome)


// Solution 1: Using Reverse Comparison

function isPalindromeReverseComparison(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Solution 2: Using Two Pointers

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

// Solution 3: Half-Indexing "For" Loop

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

// Solution 4: Using Recursion

function isPalindromeRecursion(str) {
  if (str.length <= 1) {
    return true;
  }
  
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  
  return isPalindromeRecursion(str.substring(1, str.length - 1));
}
