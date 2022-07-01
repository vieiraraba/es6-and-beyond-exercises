/**
 * Exercise 09:
 *
 * Finish the code of the `exercise09` function so that it:
 *
 * 1. Executes the Array.flat() method on the `days` array
 *
 * 2. Returns the result
 */

// Finish the code of the function
function exercise09() {
    const days = [
        ["Monday"],
        ["Tuesday"],
        ["Wednesday"],
        ["Thursday"],
        ["Friday"],
    ];

    return days.flat();

}

// Don’t change the code bellow this line
import setup09Exercise from "./09-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup09Exercise(() => console.log(exercise09()));
}

export default exercise09;
