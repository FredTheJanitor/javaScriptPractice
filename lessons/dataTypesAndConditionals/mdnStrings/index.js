// refs: dat02 mdnStrings

// first line defines a constant that maps to button elements
const button = document.querySelector("button");

// second line declares a new function called greet
function greet() {
    // this line defines a new variable for a prompt
    // the window prompt function opens a window
    const name = prompt("What yo name iz?");
    // this next line links a const greeting to an id in html
    const greeting = document.querySelector("#greeting");
    // the following links the name const, that is typed
    // within the greeting div concatenated in a string
    greeting.textContent = `bitch u ugly, ${name}`;
}
//  the following will no doubt be linking the button to
// trigger the function.

button.addEventListener("click", greet);