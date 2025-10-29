let name = "fuckFaceMcGee";
let surname = "Hoe";

console.log(name);
console.log(surname)

let age = 99;
console.log(age);
// shoot out the 999

age = 69;
// variables that have been declared dont need a new let or const
console.log(age);

// const cant change muthafucka
const pi = 3.14
// pi = 2 
// reassigning const causes TypeError 
// errors are helpful friends that let us pinpoint things that might be breaking

console.log(pi)

// press F to pay respects to var

// math bitch
console.log((3+2)-76*(1+1))

// refs: assvar01
// 1
console.log(23+97)
// 2
console.log(1+2+3+4+5+6)
// 3
console.log((4+6+9)/77)
// 4
    // 4.1
    let a=10;
    // 4.2
    console.log(a)
    // 4.3
    a=69;
    console.log(a)
    // 4.4
    let b=7*a;
    // 4.5
    console.log(b)
// 5
    // 5.1
    const max=57;
    // 5.2
    const actual=max-13;
    // 5.3
    const percentage=actual/max;
    // 5.4
    console.log(percentage)
// 6
let bird="flipped";
console.log(bird);
let dude=bird+" off likamuthafucka";
console.log(dude);
bird="jacked";
dude=bird+" off likamuthafucka";
console.log(dude);
// variables hold a snapshot of the value
// they do not stay linked over time
// if you update a variable that should
// change a subsequent variable (ie. changing a when b=a+1)
// the dependent variable has to be reassigned as well
// as the initial variable, otherwise it
// will display with the initial variable's value

// chatgpt outdid me like the showoff that it is lol

// Variables hold a snapshot of a value at the time they're assigned.
// They are not "linked" or dynamically updated over time.
// If you update a variable that another variable was based on
// (e.g., changing `a` after doing `let b = a + 1`),
// the dependent variable (`b`) will not update automatically.
// To reflect the change, you must explicitly reassign `b` as well.
// Otherwise, it will still reflect the original value of `a` at the time `b` was assigned.


// refs: assvar01B
// --
// refs: assvar01B1

// Instructions:
// Working with variables
// importance: 2
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// this won't work because name has already been declared
// probably a super common example of a bug that happens by
// having bad naming conventions.  lets make name = $name instead
let admin;
let $name;

$name = "John";
admin = $name;
alert(admin);

let homePlanet = "Earf";
// ourPlanetName was reccomended here, 3 words is fine
let currentVisitorName = "Kanye";
// currentUserName was reccomended here, probably more conventional

// birthday vs BIRTHDAY
// I think birthday is fine since that can be hardcoded in, if it is
// known to the coder before hand (I think thats what theyre getting at)

// age since it requires code to run is a nono