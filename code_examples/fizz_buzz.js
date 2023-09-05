/*
The Fizz Buzz problem requires writing a program that prints a sequence 
of numbers from 1 to a specified limit, with the following rules:

1. If the number is divisible by 3, print "Fizz" instead of the number.
2. If the number is divisible by 5, print "Buzz" instead of the number.
3. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
3. If none of the above conditions are met, simply print the number itself.
*/

// Test Cases in JavaScript

// Test case 1: Basic Fizz and Buzz
console.log(fizzBuzz(5));
// Expected output:
1
2
"Fizz"
4
"Buzz"

// Test case 2: FizzBuzz combination
console.log(fizzBuzz(15));
// Expected output: 
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"

// Test case 3: Smaller sequence
console.log(fizzBuzz(3));
// Expected output: 
1
2
"Fizz"

// Test case 4: Edge case with 1
console.log(fizzBuzz(1));
// Expected output:
1

// Test case 5: Larger sequence
console.log(fizzBuzz(20));
// Expected output: 
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
16
17
"Fizz"
19
"Buzz"


// Solution 1. Basic Approach

function fizzBuzzBasic(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Solution 2. Using Ternary Operators

function fizzBuzzTernary(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(
      i % 3 === 0
        ? i % 5 === 0
          ? "FizzBuzz"
          : "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );
  }
}

// Solution 3. Using a Map

function fizzBuzzMap(limit, rules) {
  for (let i = 1; i <= limit; i++) {
    let output = "";

    rules.forEach((rule) => {
      if (i % rule.divisor === 0) {
        output += rule.text;
      }
    });

    console.log(output || i);
  }
}

const customRules = [
  { divisor: 3, text: "Fizz" },
  { divisor: 5, text: "Buzz" },
  // Add more custom rules here if needed
];

fizzBuzzMap(100, customRules);
