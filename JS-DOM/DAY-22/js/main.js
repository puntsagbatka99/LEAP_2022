function add(x,y){
    return x + y;
}

function print(f){
    let x=2; y=3;
    console.log(f(x,y));
}
print(add)

let x = () => {
    console.log("arrow function")
}

setTimeout(x, 1000);

let counter = 0;

function runTimerInterval(){
    window.setInterval(startInterval, 1000);
}

function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now;
}
setInterval(startInterval);