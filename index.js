/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    return [];
    // const maxCount = Math.max(...candies);
    // return candies.map(candyCount => (candyCount + extraCandies) >= maxCount)
};


/**
 * Function for testing outputs
 */
function arraysEqual(a, b) {
  // If their the exact same ref then they are the exact same array
  if (a === b) return true;
  // If either are null then they're not the same
  if (a == null || b == null) return false;
  // If their different lengths then their not the same
  if (a.length !== b.length) return false;
  // Loop through the array and compare values
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  // If all the values are the same then we've reached the end
  // of the checklist
  return true;
}

// Log the outputs
let input = kidsWithCandies([2,3,5,1,3], 3);
console.log();
let expectedResult = [true, true, true, false, true];
console.log('Results for array # 1: ', arraysEqual(input, expectedResult))

input = kidsWithCandies([4,2,2,3,5], 2);
console.log();
expectedResult = [true, false, false, true, true];
console.log('Results for array # 2: ', arraysEqual(input, expectedResult))

input = kidsWithCandies([14, 5, 37, 4, 0, 14, 4, 27, 32, 4, 21, 16, 11, 39, 14, 21, 25, 29, 8, 26, 18, 7, 24, 37, 22, 20, 31, 0, 8, 37, 16, 14, 12, 13, 35, 36, 35, 22, 19, 4], 15);
console.log();
expectedResult = [false, false, true, false, false, false, false, true, true, false, false, false, false, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, false, true, false, false, false, false, true, true, true, false, false, false];
console.log('Results for array # 3: ', arraysEqual(input, expectedResult))