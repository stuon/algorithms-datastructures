/* 
Solving the Array Chunk Challenge in JavaScript

Given an array and a chunk size, you need to divide the array into smaller subarrays of equal length (except for the last one, which may be shorter).
For example, if you have an array `[1, 2, 3, 4, 5]` and a chunk size of 2, you should split it into `[[1, 2], [3, 4], [5]]`.
*/

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
const testArray5 = [1, 2, 3, 4, 5];
const chunkSize5 = 7;
const result5 = chunkArray(testArray5, chunkSize5);
console.log("Test Case 5:", result5);
// Expected Output: [[1, 2, 3, 4, 5]]

// Test Case 6
const testArray6 = ['a', 'b', 'c', 'd'];
const chunkSize6 = 2;
const result6 = chunkArray(testArray6, chunkSize6);
console.log("Test Case 6:", result6);
// Expected Output: [['a', 'b'], ['c', 'd']]

// Solution 1: Using a Loop

function chunkArrayLoop(arr, chunkSize) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
    }
    
    return result;
  }

  //  Solution 2: Using `splice()`

  function chunkArraySplice(arr, chunkSize) {
    if (chunkSize <= 0) {
      throw new Error("Chunk size must be greater than zero.");
    }
  
    const result = [];
    
    while (arr.length > 0) {
      result.push(arr.splice(0, chunkSize));
    }
    
    return result;
  }

  // Solution 3: Using `reduce()`

  function chunkArrayReduce(arr, chunkSize) {
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