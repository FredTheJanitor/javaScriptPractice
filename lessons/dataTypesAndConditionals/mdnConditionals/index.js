// this is defining js variables that map to an html element
const select = document.querySelector("select");
const para = document.querySelector("p");
// this is definiing what events trigger the code
// this looks like any change on the select js element
// (which is linked to the select html elementt)
// will trigger some code called "setDemon" to run.

// ****** the quotes around change are important
select.addEventListener("change", setDemon);
// next we define what happens when setDemon runs:
function setDemon () {
// this creates a js variable based on the value 
// within select
const choice = select.value;
// this bases the function on the value we defined
// as choice in js which is the select elements'
// value
switch (choice) {
    case "paimon":
        para.textContent =
        `${choice} says hi *tongue click*`;
        break;
    case "beelzebub":
        para.textContent =
        `${choice} says hi ⛧𖤐⛥♱𐕣⁶⁶⁶ ⁶𖤐⁶♰𓃶 🜏 𖤐 𐕣 ⁶⁶⁶☠︎︎🗡⛧☦`;
        break;
    case "beetlejuice":
        para.textContent =
        `${choice} says 🪲🧃🪲🧃🪲🧃`;
        break;
    case "taylorswift":
        para.textContent =
        `${choice} sings I dont know about you... but I'm feeling⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶`;
        break;
    default:
        para.textContent =
        ``;
        
}
}
// Commenting out if else version
//     if (choice === "paimon") {
//         // this calls the js function we defined for the <p>
//         para.textContent = 
//         "*tongue click noise*";
//     }
//     else if (choice === "beelzebub") {
//         para.textContent =
//         "⛧𖤐⛥♱𐕣⁶⁶⁶ ⁶𖤐⁶♰𓃶 🜏 𖤐 𐕣 ⁶⁶⁶☠︎︎🗡⛧☦";
//     }
//     else if (choice === "beetlejuice") {
//         para.textContent = 
//         "🪲🧃🪲🧃🪲🧃"
//     }
//     else if (choice === "taylorswift") {
//         para.textContent = 
//         "I dont know about you... but I'm feeling⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶⁶";
//     }
//     else {
//         para.textContent = ""
//     }
// }
