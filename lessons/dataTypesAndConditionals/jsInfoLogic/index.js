// refs: jsInfoLogic
// https://javascript.info/logical-operators

// ask for log in with prompt
// prompt("greetings traveler", "who the hell are you?");
// capture user input

// i fucked up originally the prompt cant just sit on its own, u start with what info u want to get
// like in a variable uk, this will let us CAPTURE USER INPUT by putting PROMPT as defining a variable

// let userName = prompt("bitch what yo name iz", "yo dumb ass name");
// let password;
// // create 3 possibilities Admin, empty/escape & other
// if (userName === "Admin") {
//     password = prompt(`write yo code, slime`, "yo dumbass phrase")
// }
// else if (username == null) {
//     let cxlAlert = alert(`fuckyomama cancelin ass bih`);
//     cxlAlert;
// }
// else {
//     let otrAlert = alert(`lmao who the fuck r u`);
//     otrAlert;
// };

// if (password === "theMaster") {
//     alert(`Welcome`)
// }
// else if (password == null) {
//     alert(`cancelled`)
// }
// else {
//     alert(`fuck you`)
// };

// attempt 2: this will be with less googling and stuff:

// Write the code which asks for a login with prompt.
let password
let login = prompt(`login`, `enter login`);

// each if, else, if else has its own {}
if (login === "Admin") {
    password = prompt(`passgass my ass`, `pusswurd`);

    if (password === `theMaster`) {
        alert(`welcome`)
    } else if (password == null) {
        alert(`cxl`)
    } else {
        alert(`what da fuck`) 
    }
}
else if (login == null) {
    alert(`cxl`)
}
// else does NOT have ()
else {
    alert(`whoooo da fk`)
} 

// If the visitor enters "Admin", then prompt for a 
// password, if the input is an empty line or Esc – 
// show “Canceled”, if it’s another string – then 
// show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema: