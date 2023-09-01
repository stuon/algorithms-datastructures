# Reverse String

The reverse string problem is a classic programming challenge where you're tasked with reversing the order of characters in a given string. While it might seem like a simple task, it can be approached in various ways, each with its own trade-offs in terms of efficiency and code complexity.

## Test Cases

```javascript
// Test Cases
console.log(reverseString("hello"));           // Output: "olleh"
console.log(reverseString("world"));           // Output: "dlrow"
console.log(reverseString("12345"));           // Output: "54321"
console.log(reverseString(""));                // Output: ""
console.log(reverseString("a"));               // Output: "a"
console.log(reverseString("racecar"));         // Output: "racecar"
console.log(reverseString("programming"));     // Output: "gnimmargorp"
console.log(reverseString("  spaces "));       // Output: " secaps  "
```

## Approach 1: Using Array Manipulation

The first approach involves converting the string into an array, reversing the array, and then converting it back into a string. Here's how it's done:

```Javascript
function reverseStringArray(str) {
  return str.split('').reverse().join('');
}
```

**Explanation**

1. split(''): This function splits the input string into an array of individual characters.
reverse(): 
2. The reverse() function reverses the order of elements in the array.
3. join(''): Finally, the join('') function combines the array elements into a string.

**Time Complexity**

This approach has a time complexity of O(n), where n is the length of the input string. The split and join operations both iterate through the entire string, and reversing the array also takes linear time.

## Approach 2: Using a For Loop

The second approach involves using a for loop to iterate through the string in reverse order and build the reversed string.

```javascript
function reverseStringForLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

Explanation:

1. The 'for' loop starts from the end of the string and iterates backward.
2. In each iteration, it appends the current character to the reversed string.

## Approach 3: Using a For...Of

The third approach involves using a for...of to iterate through the string and build the reversed string.

```javascript
function reverseStringForLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}
```

Explanation:

1. The 'for...of' loop starts from the start of the string and iterates forward.
2. In each iteration, it appends the current character to the beginning of the reversed string.

**Time Complexity**

This approach also has a time complexity of O(n), where n is the length of the input string. The loop iterates through each character exactly once.

## Approach 4: Using Recursion

The fourth approach involves using a recursive function to reverse the string.

```javascript
function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str[0];
  }
}
```

Explanation:

1. The base case of the recursion is an empty string, which returns an empty string.
2. In the recursive case, the function calls itself with the substring excluding the first character and then appends the first character to the end.

Time Complexity: 

This approach also has a time complexity of O(n), where n is the length of the input string. Each recursive call processes one character, and there are n calls in total.
