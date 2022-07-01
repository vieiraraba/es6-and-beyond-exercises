/**
 * Exercise 07:
 *
 * Finish the code of the `exercise07` function so that it:
 *
 * 1. Stores in the `func` variable an arrow function
 *    that receives two `a` and `b` parameters
 *
 * 2. Returns the sum of both parameters
 */

// Finish the code of the function
function exercise07() {
    let func = (a,b) => {
        return a + b;
    }

    // Don’t change the code bellow this line
    return func;
}

// Don’t change the code bellow this line
import setup07Exercise from "./07-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup07Exercise(() => {
        if (typeof exercise07() === "function") {
            console.log(exercise07()(5, 5));
        } else {
            console.log("Not a function");
        }
    });
}

export default exercise07;
