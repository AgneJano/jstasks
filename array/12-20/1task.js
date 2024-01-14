// * Task 1: Calculate the sum of an array of numbers using the reduce method.
// * @param {number[]} numbers - An array of numbers.
// * @returns {number} - The sum of the array elements.
// * Example: [1, 2, 3] => 6
// */

function sumArray(numbers) {
    const result = numbers.reduce((acc, num) => acc + num, 0);
    return result
}

const exampleArray = [1,2,3]
console.log(sumArray(exampleArray));