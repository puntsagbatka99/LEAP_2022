console.log(Math.PI)
console.log(Math.PI.toFixed(2));

const budget = 1_000_000_000;
console.log(budget);

const degree = 45;
let rad = degree * (Math.PI / 180);
console.log(rad.toFixed(4));

let a = 5 , b = 9;
const diff = Math.abs(a - b);
console.log(diff);


console.log(Math.ceil(0.95));
console.log(Math.ceil(4));
console.log(Math.ceil(7.004));
console.log(Math.ceil(-7.004));


console.log(Math.floor(5.95));
console.log(Math.floor(5.05));
console.log(Math.floor(5));
console.log(Math.floor(-5.05));

console.log(Math.round(0.9));
console.log(Math.round(5.95));
console.log(Math.round(-5.05));


console.log(Math.max(1, 5, 100, 6, 345));

console.log(Math.min(1, 5, 100, 6, 345));

console.log(Math.pow(7, 2));

console.log(Math.sqrt(49));


/*let y = Number(prompt("give me Y"));
let z = Number(prompt("give me z"));
let y2 = Math.pow(y, 2);
let z2 = Math.pow(z, 2);
console.log(Math.sqrt(y2 + z2));


console.log(Math.random());

console.log(Math.ceil(Math.random() * 10));

let q = Number(prompt("give me Q number"));
let w = Number(prompt("give me W number"));

let max = Math.max(q, w);
let min = Math.min(q, w);
console.log(Math.ceil(Math.random() *(max - min) + min));
let result = 1
while (result <= 50) {
    console.log(Math.ceil(Math.random() *(max - min) + min));
    result = result + 1;
}




//  JS  LOOP




let count = 1;
while (count <= 10) {
    console.log(count);
    count = count + 1;
}

console.log("loop ended")


let ask = "yes";
while (ask == "yes") {
    ask = prompt("Would you like to play again?").toLowerCase();
    if ( ask == "yes") {
        alert("thanks")
    }
} 
*/

console.log("game over");

let answer =Number(prompt("give me number"));
let count = 0;
let sum = 0;

while (count < answer) {
    console.log(count);
    count = count + 1;
    sum = sum + count;
    console.log(sum)
    
}


