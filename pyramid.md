# Drawing a Pyramid with JavaScript

Given a positive integer `n`, draw a pyramid with n levels using hashes (#). The pyramid should be centered and have spaces on the left and right to maintain its symmetry.

Here's an example of what the output should look like for `n = 4`:

```javascript
   #
  ###
 #####
#######
```

## Test Cases

```javascript
// Test Case 1: Drawing a pyramid with 3 levels
drawPyramid(3);
/*
Expected Output:
  #
 ###
#####
*/

// Test Case 2: Drawing a pyramid with 5 levels
drawPyramid(5);
/*
Expected Output:
    #
   ###
  #####
 #######
#########
*/

// Test Case 3: Drawing a pyramid with 1 level
drawPyramid(1);
/*
Expected Output:
#
*/

// Test Case 4: Drawing a pyramid with 0 levels (edge case)
drawPyramid(0);
/*
Expected Output:
(Nothing should be printed)
*/

```

## Approach 1: Nested Loops

One common approach to solving this problem is by using nested loops. For each row, generate the start spaces, hashes and end spaces. The number of hashes can be determined using formula `2 * row - 1`, and the number of spaces on each side is `n - row`

```javascript
function drawPyramidLoop(n) {
  for (let row = 1; row <= n; row++) {
    let level = '';

    for (let column = 1; column <= (n - row); column++)
      level += ' ';
    for (let column = 1; column <= (2 * row - 1); column++)
      level += '#';
    for (let column = 1; column <= (n - row); column++)
      level += ' ';

    console.log(level);
  }
}
```

Time Complexity O(n): We use two sets of nested loops. The outer loop iterates through each level of the pyramid, and the inner loops generates the spaces and hashes for each row. The time complexity is O(n^2) because we iterate through each row and, for each row, iterate through each column.

## Approach 2: Repeat method

We can also make the first approach easier to read by using Javascript's native repeat method to generate the spaces and hashes for each row...

```javascript
function drawPyramid(n) {
  for (let row = 1; row <= n; row++) {
    const spaces = ' '.repeat(n - row);
    const hashes = '#'.repeat(2 * row - 1);
    console.log(spaces + hashes + spaces);
  }
 }
```

Time Complexity O(n): We use two nested loops. The outer loop iterates through each level of the pyramid, and the inner loop generates the spaces and hashes for each row. The time complexity of this approach is O(n^2) because we have to generate each character in the pyramid.

## Approach 3: Recursion

Another way to draw a pyramid is by using recursion.

```javascript
function drawPyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return drawPyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let addChar;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    addChar = '#';
  } else {
    addChar = ' ';
  }

  drawPyramid(n, row, level + addChar);
}
```

Time Complexity O(n): In this recursive approach, we build each row of the pyramid incrementally by appending either a space or an hash based on the current row and level length. The time complexity of this approach is also O(n^2) because, in the worst case, we have to make n*n recursive calls.
