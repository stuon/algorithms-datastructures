// The reverse integer problem is defined as follows: 
// Given an integer reverse its digits.

// Test Cases

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

// Approach 1: Using String Manipulation

function reverseIntegerApproach1(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2**31 - 1) return 0; // Handle overflow
    return reversed * Math.sign(x);
}


// ## Approach 2: Using Arithmetic Operations

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


// Approach 3: Using Recursion

function reverseIntegerApproach3(x, reversed = 0) {
    if (x === 0) {
        if (reversed > 2**31 - 1 || reversed < -2**31) return 0; // Handle overflow
        return reversed;
    }
    return reverseIntegerApproach3(Math.trunc(x / 10), reversed * 10 + x % 10);
}