// your JavaScript file


const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redPara = document.createElement("p");
redPara.classList.add("paragraphs");
redPara.style.color = "red";
redPara.textContent = "bitch im a blood ahh paragriffin comin fo yo neck bruh";

const blueH3 = document.createElement("h3");
blueH3.style.color="blue";
blueH3.textContent="u betta get yo blue blood back off the block or get whackked cuz";

const pinkContainer = document.createElement("div");
pinkContainer.setAttribute("style", "background-color: pink; border-width: 1rem; border-style: solid; border-color: black;");

container.appendChild(content);
container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(pinkContainer);

const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div!";

const newPara = document.createElement("p");
newPara.textContent = "me too muthafucka";

pinkContainer.appendChild(newH1);
pinkContainer.appendChild(newPara);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn4 = document.querySelector("#btn4");
btn4.onclick = ()=> alertFunction();

const btn5 = document.querySelector("#btn5");
// so basically if u have functionName() it has to be within (e)=> to work when in event listen
// but if u just do functionName but its not in (e)=> or whatever thats the only way it will
// work, so like NO () HAS TO also be NOT IN ()=>{},  but WITH () has to be in ()=>{} if that
// makes sense
btn5.addEventListener("click", alertFunction);
//     {gi
//     alertFunction();
//     console.log(e.target);
// });

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>console.log(button.id));
})