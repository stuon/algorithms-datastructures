// Reverse String - Given a string, return the reverse of it.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test Cases
console.log(reverseString("hello"));           // Output: "olleh"
console.log(reverseString("world"));           // Output: "dlrow"
console.log(reverseString("12345"));           // Output: "54321"
console.log(reverseString(""));                // Output: ""
console.log(reverseString("a"));               // Output: "a"
console.log(reverseString("racecar"));         // Output: "racecar"
console.log(reverseString("programming"));     // Output: "gnimmargorp"
console.log(reverseString("  spaces "));       // Output: " secaps  "

// Solutions

function reverseStringArray(str) {
  return str.split('').reverse().join('');
}

function reverseStringForLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}

function reverseStringForOf(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseStringRecursive(str) {
    if (str === '') {
      return '';
    } else {
      return reverseStringRecursive(str.substr(1)) + str[0];
    }
}
