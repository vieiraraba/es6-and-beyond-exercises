/**
 * Exercise 05:
 *
 * Finish the code of the `exercise05` function.
 *
 * The function will receive an array as a parameter with
 * the following shape:
 *
 * ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
 * ["Monday", undefined, "Wednesday", "Thursday", "Friday"]
 *
 * 1. The function should destructure the first 3 elements of the array
 *
 * @example
 * function hello([a, b, c, d, e]) { ... }
 *
 * 2. The function should add a default value of "DEFAULT"
 *    to the second destructured element
 *
 * @example
 * function hello([a, b, c, d = "SOME VALUE"]) { ... }
 *
 * 3. Return the second element: index [1]
 */

// Finish the code of the function
function exercise05([a,b = "DEFAULT",c,d,e]) {
    return b;
}

exercise05(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])

// Don’t change the code bellow this line
import setup05Exercise from "./05-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup05Exercise(() =>
        console.log(
            exercise05(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
        )
    );
    setup05Exercise(() =>
        console.log(
            exercise05(["Monday", undefined, "Wednesday", "Thursday", "Friday"])
        )
    );
}

export default exercise05;
