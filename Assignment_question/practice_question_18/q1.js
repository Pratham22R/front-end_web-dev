let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText="Click Me";

document.querySelector("body").prepend(input);
document.querySelector("body").prepend(btn);

//Q2

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//Q3

let btnStyle = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Q4

let h1 = document.createElement("h1");
h1.innerText="DOM Practice";
document.querySelector("body").prepend(h1);
h1.classList.add("head");

//Q5

let para = document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").prepend(para);
