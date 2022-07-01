/**
 * Exercise 01:
 *
 * Finish the code of the `exercise01` function
 * so that it:
 *
 * 1. Receives a parameter named `a` that has a default value of 1
 *
 * 2. Receives a parameter named `b` that has a default value of 1
 *
 * 3. Returns the multiplication of the `a` and `b` parameters
 *
 * The function should have default values for each parameter
 * so that if it is called without a value for each one of them
 * it picks up the default value.
 */

// Finish the code of the function
function exercise01(a = 1 , b = 1) {
    return a * b;
}

// Don’t change the code bellow this line
import setup01Exercise from "./01-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup01Exercise(() => console.log(exercise01()));
    setup01Exercise(() => console.log(exercise01(5)));
    setup01Exercise(() => console.log(exercise01(undefined, 2)));
}

export default exercise01;
