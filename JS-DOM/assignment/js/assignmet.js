// document.getElementById("hellotext").innerHTML = "Hello World!"

console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);

document.getElementById("aimagNames").style = "font-size: 20px";
document.getElementById("aimagNames").style = "border: 2px solid black";

document.getElementById("aimag-522").style = "border: 2px solid black";
document.getElementById("aimag-315").style = "border: 2px solid black";
document.getElementById("aimag-218").style = "border: 2px solid black";
document.getElementById("aimag-522").style = "padding: 20px";
document.getElementById("aimag-522").style = "text-align: center";

for(let i = 0; i < document.getElementsByClassName("khangai").length; i++){
    document.getElementsByClassName("khangai")[i].style = "background-color:red;"
}

console.log(document.getElementById("aimagNames"));

const liLength = document.getElementById("aimagNames").getElementsByTagName("li").length;
console.log(document.getElementById("aimagNames").getElementsByTagName("li")[liLength - 1].innerHTML);

console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes("aimag-1"));

for ( i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: green;"
    }
}

for ( i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: red;"
    }
}

console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].innerHTML.includes("Арха"));

console.log(document.querySelector("#aimagNames"))
console.log(document.querySelector(".khangai"))
console.log(document.querySelectorAll(".khangai"))

document.querySelector("#demo").innerHTML = "date: " + Date();

document.querySelector("img").src = "./img/picture1.jpeg"

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
main[0].appendChild(newDiv);

const h1 = document.querySelector("h1");
h1.appendChild(newDiv);

let button = document.querySelector("#buttonColor");
let first = document.querySelector("#firstColor")
let second = document.querySelector("#secondColor")

function changeBackgroundColor () {
    first.style = "background-color: red"
    second.style = "background-color: yellow"
}

button.addEventListener("click", changeBackgroundColor);