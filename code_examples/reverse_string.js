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

function reverseStringRecursive(str) {
    if (str === '') {
      return '';
    } else {
      return reverseStringRecursive(str.substr(1)) + str[0];
    }
}

// Test Cases

const reverseString = reverseStringArray;

const testSingleChar = reverseString("z");
console.log("testSingleChar: \"" + testSingleChar + "\"");

const testWord = reverseString("apples");
console.log("testWord: \"" + testWord + "\"");

const testSentence = reverseString(" spaces and braces }");
console.log("testSentence: \"" + testSentence + "\"");

const testEmpty = reverseStringArray("");
console.log("testEmpty: \"" + testEmpty + "\"");