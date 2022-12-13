let myButton = document.getElementById("myButton");
function changeBackgroundColor () {
    myButton.style = "background-color: green"
}
// changeBackgroundColor();
myButton.addEventListener("click", changeBackgroundColor);

let color = "white";

function changeColors (){
    if( color === "white"){
        color = "green";
        myButton.style = `background-color: ${color}`;
    } else {
        color = "white";
        myButton.style = `background-color: ${color}`;
    }
}
myButton.addEventListener("click", changeColors);



let arroFunc = () => {
}



let registerButton = document.querySelector("#register");

