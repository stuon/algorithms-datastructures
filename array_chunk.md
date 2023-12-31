# Exploring Array Chunking Challenges in JavaScript

Array chunking is a common problem in JavaScript where you need to split an array into smaller sub-arrays of a specified size. This challenge can be encountered in various scenarios, such as when paginating through large datasets or when dealing with data in fixed-size chunks for processing or display.

## The Challenge

Given an array and a chunk size, you need to create an array of smaller arrays (chunks), where each chunk contains elements equal to the specified size, except for the last chunk, which can have fewer elements if there aren't enough left to fill a complete chunk.

**Assume chunk size is greater than zero**

For example, if you have an array `[1, 2, 3, 4, 5]` and a chunk size of 2, you should split it into `[[1, 2], [3, 4], [5]]`.

## Test Cases

```javascript
console.log(chunkArray([1, 2, 3, 4, 5], 2));    // Output: [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 1));    // Output: [[1], [2], [3], [4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 5));    // Output: [[1, 2, 3, 4, 5]]
console.log(chunkArray([], 3));                 // Output: []
console.log(chunkArray([1, 2, 3, 4, 5], 7));    // Output: [[1, 2, 3, 4, 5]]
console.log(chunkArray(['a', 'b', 'c', 'd'], 2));  // Output: [['a', 'b'], ['c', 'd']]
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

A more elegant or fun approach is to use the `reduce()` method to build the chunked array gradually.

```javascript
function chunkArray(array, chunkSize) {
    return array.reduce((result, item, index) => {
        if (index % chunkSize === 0)
            result.push([item]);
        else
            result[result.length - 1].push(item);

        return result;
    }, []);
}
```

**Time Complexity (Big O):** This solution also has a time complexity of O(n), where n is the length of the input array. The `reduce()` method iterates through the array once and efficiently builds the chunked array.
