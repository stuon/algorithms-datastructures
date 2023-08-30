# Solving the Reverse Integer Problem in JavaScript

The reverse integer problem is defined as follows: given an integer, the task is to reverse its digits. While this might seem simple at first glance, it raises some interesting challenges, especially when dealing with negative numbers and potential integer overflow.

## Test Cases

```javascript
// Test cases for positive integers
console.log(reverseIntegerApproach1(123));    // Expected: 321
console.log(reverseIntegerApproach2(456));    // Expected: 654
console.log(reverseIntegerApproach3(789));    // Expected: 987

// Test cases for negative integers
console.log(reverseIntegerApproach1(-123));   // Expected: -321
console.log(reverseIntegerApproach2(-456));   // Expected: -654
console.log(reverseIntegerApproach3(-789));   // Expected: -987

// Test cases for integers with leading zeros
console.log(reverseIntegerApproach1(1200));   // Expected: 21
console.log(reverseIntegerApproach2(500));    // Expected: 5
console.log(reverseIntegerApproach3(700));    // Expected: 7
```

## Approach 1: Using String Manipulation

One of the straightforward ways to reverse an integer is by converting it to a string, reversing the string, and then converting it back to an integer. Here's the implementation:

```javascript
function reverseIntegerApproach1(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2**31 - 1) return 0; // Handle overflow
    return reversed * Math.sign(x);
}
```

**Time Complexity**
- Converting the integer to a string takes O(log(x)) time, where x is the input integer.
- Reversing the string and converting it back to an integer also takes O(log(x)) time.
- Overall time complexity: O(log(x))

## Approach 2: Using Arithmetic Operations

In this approach, we reverse the integer by repeatedly extracting the last digit and adding it to the result. Here's the implementation:

```javascript
function reverseIntegerApproach2(x) {
    let reversed = 0;
    while (x !== 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.trunc(x / 10);
    }
    if (reversed > 2**31 - 1 || reversed < -2**31) return 0; // Handle overflow
    return reversed;
}
```

**Time Complexity**
- The while loop runs O(log(x)) times, where x is the input integer.
- Each iteration involves arithmetic operations which take constant time.
- Overall time complexity: O(log(x))

## Approach 3: Using Recursion

In this approach, we reverse the integer using recursion. Here's the implementation:

```javascript
function reverseIntegerApproach3(x, reversed = 0) {
    if (x === 0) {
        if (reversed > 2**31 - 1 || reversed < -2**31) return 0; // Handle overflow
        return reversed;
    }
    return reverseIntegerApproach3(Math.trunc(x / 10), reversed * 10 + x % 10);
}
```

**Time Complexity**
- The number of recursive calls is O(log(x)), where x is the input integer.
- Each recursive call involves constant time operations.
- Overall time complexity: O(log(x))

