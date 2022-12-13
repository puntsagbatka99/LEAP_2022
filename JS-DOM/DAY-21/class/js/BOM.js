// window.alert("hello")
console.log(window)

// window.open("https://www.google.com/", "Hello")

// window.confirm("HI");

// let result = window.confirm("Do you wanna quit?");
// console.log(result)

// let messege = result ? "You clicked OK" : "You clicked Cancel";

// alert(messege);


let counter = 0;

function runTimerInterval(){
    window.setInterval(startInterval, 1000);
}

function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now;
}
button = document.getElementById("button")

button.addEventListener("click", runTimerInterval);