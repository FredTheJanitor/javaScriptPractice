// // three steps
// // 1: link js to html
// // 2: define function
// // 3: add listener to trigger

// // 1: js to html

// const select = document.querySelector("select");
// const html = document.querySelector("html");

// // 2: define function
// function update(bgColor, textColor) {
//     // const bgColor = html.
//     // this is how far I got
//     //  i couldnt remember style
//     // style is same as inline styles
//     // CSS background-color > backgroundColor since
//     // js cant use hyphens it converts. cool
   
//     // const bgColor = html.style.backgroundColor;
//     //  this was wrong i dont understand why there
//     // isnt a constant getting defined here?
//     // it seems like the update is updating variables
//     // that havent been declared??

//     // ok so theyre parameters not variables.
//     // parameters at least in this case work really well
//     // for linking to something like html so u can
//     // pass values from the js to html through
//     // updating the update input.

//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }
// // this next part is wrong because it isnt an independent
// // function, it requires values to pass through so u
// // need an arrow function i guess
// // select.addEventListener("change", update)

// select.addEventListener("change", ()=>
// // now i need to show what the selections do
// select.value === "volcano"
// ? update("red", "black")
// : update("white", "black")
// );

// 1: link to shit
// 2: functionize
// 3: listen to the motion of the ocean

// const select = document.querySelector("select");
// const html = document.querySelector("html");

// function update(bgColor, textColor) {
//     bgColor = html.style.backgroundColor;
//     textColor = html.style.color;
// }

// select.value.addEventListener("change", ()=>


// )

// 1: connect to shit
// 2: functionize shit
// 3: arm the weapon for deployment

// const select = document.querySelector("select");
// const html = document.querySelector("html");

// function update(bgColor, textColor) {
//     // I cant do bgColor = that is defining bgColor
//     // as the html element instead of the other way
//     // around, we want to define the html style as
//     // our updated value.
//     bgColor = html.style.backgroundColor;
//     textColor = html.style.color;
// };

// select.addEventListener("change", ()=>
//     select.value === "swag"
//     ? update("black", "gold")
//     : update("white", "black")
// );