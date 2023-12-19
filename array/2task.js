// * Greets a person with a custom message.
// * @param {string} [name="Guest"] - The name of the person to greet. Defaults to "Guest" if not provided.
// * @param {string} [message="Welcome"] - The greeting message. Defaults to "Welcome" if not provided.
// * @returns {string} The full greeting message. before example: "Welcome, Guest!" after example: Default: "Welcome, Guest!"
// */
// // Hints to help solve the task:
// // 1. Create a function that takes two optional parameters (name and message).
// // 2. Use default values to handle cases where parameters are not provided.
// // 3. Concatenate the name and message into a greeting string.
// // 4. Return the full greeting message. Output: "Welcome, Guest!"

function greet(name = 'Guest', message = 'Welcome'){
    console.log(`${message}, ${name}!`);
    return `${message}, ${name}!`;
}
// const name = 'Tadas';
// let name = 'Lukas'
console.log(greet());

console.log(greet('Tadas'));