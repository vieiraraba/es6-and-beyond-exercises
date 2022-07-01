/**
 * Exercise 08:
 *
 * Finish the code of the `exercise08` function so that it:
 *
 * 1. Converts the `func` function to be an arrow function
 *
 * 2. The function should perform the same operation,
 *    return the sum of it’s parameters
 */

// Finish the code of the function
function exercise08() {
    const func = (a,b) =>{
        return a + b;
    }

    function func(a, b) {
        return a + b;
    }

    // Don’t change the code bellow this line
    return func;
}

// Don’t change the code bellow this line
import setup08Exercise from "./08-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup08Exercise(() => {
        if (typeof exercise08() === "function") {
            console.log(exercise08()(5, 5));
        } else {
            console.log("Not a function");
        }
    });
}

export default exercise08;
