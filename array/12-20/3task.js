//     /**
//    * Task 3: Combine an array of strings into a single string using the reduce method.
//    * @param {string[]} strings - An array of strings.
//    * @returns {string} - The concatenated string.
//    * Example: ['Hello', ', ', 'world', '!'] => 'Hello, world!'
//    */

function concatinateStrings(strings) {
    const result = strings.reduce((concatinated, str) => concatinated + str, '');
    return result;
}

const string = ['Hello', ', ', 'world', '!']
console.log(concatinateStrings(string));