// * Demonstrates array destructuring by assigning values from the array to variables.
//  * @type {number[]} numbers - An array of numbers [1, 2, 3].
//  * @type {number} a - The first element of the array.
//  * @type {number} b - The second element of the array.
//  * @type {number} c - The third element of the array.
//  * @returns {number[]} The first three elements of the array. before example: [1, 2, 3] after example: destructuring syntax: [a, b, c] = numbers;
// */
// // Hints to help solve the task:
// // 1. Use array destructuring syntax to assign values from the array to variables.
// // 2. Create a function that takes an array of numbers.
// // 3. Destructure the array to extract the first three elements.
// // 4. Return an array containing the extracted elements. Output: console.log(a, b, c); // 1, 2, 3

function arrayDestructingExample(numbers){
    const[a, b, c] = numbers;
    return [a, b, c]
}

const numbersArray = [1, 2, 3];

const result = arrayDestructingExample(numbersArray);

console.log(result);