/**
 * Exercise 10:
 *
 * Finish the code of the `exercise10` function so that it:
 *
 * 1. Executes the Array.from() method on the `message` variable
 *
 * 2. Returns the result
 */

// Finish the code of the function
function exercise10() {
    const message = "hello-world";
    return array.from(message);
}

// Don’t change the code bellow this line
import setup10Exercise from "./10-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup10Exercise(() => console.log(exercise10()));
}

export default exercise10;
