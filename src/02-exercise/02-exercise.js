/**
 * Exercise 02:
 *
 * Finish the code of the `exercise02` function.
 *
 * The function will receive an object as a parameter with
 * the following shape:
 *
 * {
 *  firstName: "Ana",
 *  lastName: "Marks",
 * }
 *
 * 1. The function should destructure the keys from the parameter
 *    in the function definition so that it captures the
 *    `firstName` and `lastName` keys from the object
 *
 * @example
 * function hello({ message }) { ... }
 *
 * 2. Both destructured keys should have a default value of:
 *   firstName = "Default firstName"
 *   lastName = "Default lastName"
 *
 * @example
 * function hello({ message = "default message" }) { ... }
 *
 * 3. Returns the concatenation of the `firstName` and `lastName` variables
 *
 * @example
 *
 * {
 *  firstName: "Ana",
 *  lastName: "Marks",
 * }
 *
 * The `firstName` and `lastName` should be concatenated
 * with the following strings:
 *
 * => `Hello I am Ana Marks`
 */

// Finish the code of the function
function exercise02({firstName = defaultFirstName, lastName = defaultLastName}) {
    return `hello i am ${firstName} ${lastName}`
}

// Don’t change the code bellow this line
import setup02Exercise from "./02-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup02Exercise(() =>
        console.log(
            exercise02({
                firstName: "John",
                lastName: "Second",
            })
        )
    );
    setup02Exercise(() => console.log(exercise02({})));
}

export default exercise02;
