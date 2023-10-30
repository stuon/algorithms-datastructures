/*
Drawing a Pyramid Challenge:

Given a positive integer `n`, draw a pyramid with n levels using hashes (#). 
The pyramid should be centered and have spaces on the left and right to maintain its symmetry.

Here's an example of what the output should look like for n = 4:

   #   
  ###  
 ##### 
#######

*/

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

// Approach 1: Nested Loops

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

// Approach 2: Repeat method


function drawPyramidRepeat(n) {
   for (let row = 1; row <= n; row++) {
     const spaces = ' '.repeat(n - row);
     const hashes = '#'.repeat(2 * row - 1);
     console.log(spaces + hashes + spaces);
   }
 }

// Approach 3: Recursion


 function drawPyramidRecursion(n, row = 0, level = '') {
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
    addChar = '_';
  }

  drawPyramid(n, row, level + addChar);
}