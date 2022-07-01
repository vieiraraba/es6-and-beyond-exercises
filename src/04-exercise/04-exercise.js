/**
 * Exercise 04:
 *
 * Finish the code of the `exercise04` function.
 *
 * The function will receive an array as a parameter with
 * the following shape:
 *
 * ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
 *
 * 1. The function should destructure the first 3 elements of the array
 *
 * @example
 * function hello([a, b, c, d, e]) { ... }
 *
 * 2. Return the second element: index [1]
 */

// Finish the code of the function
function exercise04([a,b,c,d,e]) {
    return b;
}

exercise04(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])

// Don’t change the code bellow this line
import setup04Exercise from "./04-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup04Exercise(() =>
        console.log(
            exercise04(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
        )
    );
}

export default exercise04;
