/**
 * Exercise 03:
 *
 * Finish the code of the `exercise03` function.
 *
 * The function will be called with several parameters with
 * the following shape:
 *
 * exercise03("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
 *
 * 1. The function should capture the first 2 elements and
 *    all the other ones in a an array using the `...rest` syntax
 *    which will create an array with all the remaining parameters
 *
 * @example
 * function hello(a, b, ...rest) { ... }
 *
 * 2. Return the array of the remaining parameters
 *
 * @example
 *
 * exercise03(1, 2, 3, 4, 5, 6)
 *
 * => [3, 4, 5, 6]
 */

// Finish the code of the function
const exercise03 = (a, b, ...rest) => {
    return rest;
};

exercise03("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");

// Don’t change the code bellow this line
import setup03Exercise from "./03-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup03Exercise(() =>
        console.log(
            exercise03("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
        )
    );
}

export default exercise03;
