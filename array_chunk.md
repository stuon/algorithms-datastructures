# Exploring Array Chunking Challenges in JavaScript

Array chunking is a common problem in JavaScript where you need to split an array into smaller sub-arrays of a specified size. This challenge can be encountered in various scenarios, such as when paginating through large datasets or when dealing with data in fixed-size chunks for processing or display.

## The Challenge

Given an array and a chunk size, you need to create an array of smaller arrays (chunks), where each chunk contains elements equal to the specified size, except for the last chunk, which can have fewer elements if there aren't enough left to fill a complete chunk.

For example, if you have an array `[1, 2, 3, 4, 5]` and a chunk size of 2, you should split it into `[[1, 2], [3, 4], [5]]`.

## Test Cases

```javascript
// Test Case 1
const testArray1 = [1, 2, 3, 4, 5];
const chunkSize1 = 2;
const result1 = chunkArray(testArray1, chunkSize1);
console.log("Test Case 1:", result1);
// Expected Output: [[1, 2], [3, 4], [5]]

// Test Case 2
const testArray2 = [1, 2, 3, 4, 5];
const chunkSize2 = 1;
const result2 = chunkArray(testArray2, chunkSize2);
console.log("Test Case 2:", result2);
// Expected Output: [[1], [2], [3], [4], [5]]

// Test Case 3
const testArray3 = [1, 2, 3, 4, 5];
const chunkSize3 = 5;
const result3 = chunkArray(testArray3, chunkSize3);
console.log("Test Case 3:", result3);
// Expected Output: [[1, 2, 3, 4, 5]]

// Test Case 4
const testArray4 = [];
const chunkSize4 = 3;
const result4 = chunkArray(testArray4, chunkSize4);
console.log("Test Case 4:", result4);
// Expected Output: []

// Test Case 5
const testArray6 = [1, 2, 3, 4, 5];
const chunkSize6 = 7;
const result6 = chunkArray(testArray6, chunkSize6);
console.log("Test Case 5:", result6);
// Expected Output: [[1, 2, 3, 4, 5]]

// Test Case 6
const testArray7 = ['a', 'b', 'c', 'd'];
const chunkSize7 = 2;
const result7 = chunkArray(testArray7, chunkSize7);
console.log("Test Case 6:", result7);
// Expected Output: [['a', 'b'], ['c', 'd']]
```

## Solution 1: Using a Loop

One straightforward approach to solving this challenge is by using a loop. We iterate through the input array, creating a new subarray for each chunk, and pushing elements into it until it reaches the specified size.

```javascript
function chunkArray(arr, chunkSize) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  
  return result;
}
```

**Time Complexity (Big O):** This solution has a time complexity of O(n), where n is the length of the input array. We iterate through the array once, creating subarrays of the desired chunk size.

## Solution 2: Using `splice()`

Another approach is to use the `splice()` method to cut the input array into chunks iteratively.

```javascript
function chunkArray(arr, chunkSize) {
  const result = [];
  
  while (arr.length > 0) {
    result.push(arr.splice(0, chunkSize));
  }
  
  return result;
}
```

**Time Complexity (Big O):** This solution also has a time complexity of O(n), where n is the length of the input array. Although it involves more manipulation of the original array, the `splice()` method still operates in linear time.

## Solution 3: Using `reduce()`

A more elegant approach is to use the `reduce()` method to build the chunked array gradually.

```javascript
function chunkArray(arr, chunkSize) {
  return arr.reduce((result, item) => {
    const lastChunk = result[result.length - 1];
    
    if (!lastChunk || lastChunk.length === chunkSize) {
      result.push([item]);
    } else {
      lastChunk.push(item);
    }
    
    return result;
  }, []);
}
```

**Time Complexity (Big O):** This solution also has a time complexity of O(n), where n is the length of the input array. The `reduce()` method iterates through the array once and efficiently builds the chunked array.
