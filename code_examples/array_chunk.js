/* 
Solving the Array Chunk Challenge in JavaScript

Given an array and a chunk size, you need to divide the array into smaller subarrays of equal length (except for the last one, which may be shorter).
For example, if you have an array `[1, 2, 3, 4, 5]` and a chunk size of 2, you should split it into `[[1, 2], [3, 4], [5]]`.
*/

// Test Cases
console.log(chunkArray([1, 2, 3, 4, 5], 2));    // Output: [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 1));    // Output: [[1], [2], [3], [4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 5));    // Output: [[1, 2, 3, 4, 5]]
console.log(chunkArray([], 3));                 // Output: []
console.log(chunkArray([1, 2, 3, 4, 5], 7));    // Output: [[1, 2, 3, 4, 5]]
console.log(chunkArray(['a', 'b', 'c', 'd'], 2));  // Output: [['a', 'b'], ['c', 'd']]

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

function chunkArrayReduce(array, chunkSize) {
    return array.reduce((result, item, index) => {
        if (index % chunkSize === 0)
            result.push([item]);
        else
            result[result.length - 1].push(item);

        return result;
    }, []);
}
