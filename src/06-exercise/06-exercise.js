/**
 * Exercise 06:
 *
 * Finish the code of the `exercise06` function so that it:
 *
 * 1. Destructures the first 2 keys of the `user` object
 *    and gathers all the other keys in an object
 *    using destructuring.
 *
 * @example
 * const data = { a: 1, b: 2, c: 3, d: 4};
 *
 * const {a, b, ...rest} = data;
 * => rest =  { c: 3, d: 4 }
 *
 * 2. Return the object with the remaining keys
 */

// Finish the code of the function
function exercise06() {
    const user = {
        firstName: "John",
        lastName: "Marks",
        age: 33,
        jobTitle: "Student",
        company: "Assembler School",
        averageGrade: 6.6,
    };

    const {firstName, lastName, ...rest} = user;
    return rest;
}

exercise06();

// Don’t change the code bellow this line
import setup06Exercise from "./06-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup06Exercise(() => console.log(exercise06()));
}

export default exercise06;
