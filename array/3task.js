// * Sums up a variable number of parameters.
// * @param {...number} numbers - Any number of parameters to be summed.
// * @returns {number} The sum of the provided numbers. before example: 1, 2, 3 after example: (1 + 2 + 3) = 6
// */
// // Hints to help solve the task:
// // 1. The goal is to create a function that sums up a variable number of parameters.
// // 2. Use the rest parameter syntax (...) to capture the input numbers into an array.
// // 3. Initialize a variable to store the sum (result = 0).
// // 4. Use a for loop to iterate through the array of numbers.
// // 5. Add each number to the sum variable in each iteration.
// // 6. Return the final sum. Output: 6

function variableSum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(variableSum(1,2,3,10,23,45,-80));