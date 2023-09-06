# Solving the Fizz Buzz Problem in JavaScript

The Fizz Buzz problem is a simple programming task often used as an introductory coding challenge. It requires writing a program that prints a sequence of numbers from 1 to a specified limit, with the following rules:

1. If the number is divisible by 3, print "Fizz" instead of the number.
2. If the number is divisible by 5, print "Buzz" instead of the number.
3. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
3. If none of the above conditions are met, simply print the number itself.

## Test Cases in JavaScript

```javascript

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
```

## Solution 1. Basic Approach

The most straightforward way to solve Fizz Buzz is by using a loop, typically a for loop, to iterate through numbers from 1 to a specified limit and applying conditional statements to determine whether to print "Fizz," "Buzz," "FizzBuzz," or the number itself.

```javascript
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
```

*Time Complexity*

The time complexity is O(n), where "n" is the value of the `limit`.

In this code, you have a single loop that iterates from 1 to `limit`, and for each iteration, you have a series of if-else conditions. Each condition involves simple arithmetic operations (modulo operations and comparisons) that take constant time regardless of the value of `n`. Therefore, the time complexity remains O(n) because you have a linear relationship between the input size (limit) and the number of operations performed.

## Solution 2. Using Ternary Operators

We can make the code more concise by using ternary operators to decide what to print. This approach doesn't change the time complexity but reduces the number of lines of code.

```javascript
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
```

*Time Complexity*

The time complexity is O(n), where "n" is the value of the `limit`.

Same as the basic approach, it iterates through all numbers from 1 to 'limit' once.

## 3. Using a Map

Another solution involves predefining a map of divisors and corresponding strings ("Fizz" or "Buzz"). This approach allows for easy scalability if you want to add more custom rules. However, this map and the code can grow quite large if we increase the max limit.

```javascript
const customRules = new Map([
    [3, "fizz"],
    [5, "buzz"],
    [6, "fizz"],
    [9, "fizz"],
    [10, "buzz"],  
    [12, "fizz"],
    [15, "fizzbuzz"]
    // Add more rules
 ]);
     
function fizzBuzzMap(limit, rules) {
    for (let i = 1; i <= limit; i++)
    {
      console.log(rules.get(i) || i);
    }
}

fizzBuzzMap(15, customRules);
```

*Time Complexity*
The time complexity is O(n), where "n" is the value of the `limit` parameter.

In the for loop, you are iterating from 1 to limit, and for each iteration, you are performing a constant-time operation, which is a lookup in the customRules Map using the get method. Map lookups have an average time complexity of O(1) because they are implemented as hash maps.

Therefore, the overall time complexity of the code is O(n) because you are performing a constant-time operation for each of the "n" iterations in the loop.