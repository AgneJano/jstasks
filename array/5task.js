// * Combines two arrays using the spread operator.
//  * @param {number[]} arr1 - The first array to combine.
//  * @param {number[]} arr2 - The second array to combine.
//  * @returns {number[]} The combined array. before example: [1, 2, 3] after example: spread syntax: [...arr1, ...arr2]
// */
// // Hints to help solve the task:
// // 1. Use the spread operator (...) to combine elements from two arrays.
// // 2. Create a function that takes two arrays as parameters.
// // 3. Use the spread operator to concatenate the elements of both arrays.
// // 4. Return the combined array. Output: [1, 2, 3, 4, 5, 6]
function combineArrays(arr1, arr2){
    let newArr = [...arr1, ...arr2];
    return newArr;
}
let arr1 = [1,2,3];
let arr2 = [4,9,8];

result = combineArrays(arr1, arr2);
console.log(result);