// /**
//    * Task 2: Find the maximum value in an array using the reduce method.
//    * @param {number[]} numbers - An array of numbers.
//    * @returns {number} - The maximum value in the array.
//    * Example: [1, 2, 3] => 3
//    */

function findMaxNumber(numbers) {
    const result = numbers.reduce((max, num) => (num > max ? num : max), numbers [0]);
    return result
}

const maxNumber = [1,2,3,4,5];

console.log(findMaxNumber(maxNumber));