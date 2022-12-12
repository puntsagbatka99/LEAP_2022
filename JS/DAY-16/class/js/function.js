function f () {
    console.log("Hello world")
}
f();

//1

function f1 (x){
    console.log(Math.pow(x, 2));
}
f1(5);

function f2 (x, y) {
    console.log(Math.pow(x + y, 2));
}
f2(2, 3);

function E (m, c) {
    console.log(Math.pow(c, 2) * m);
}
const c = 300000;
E(4, c);

function f4 (x) {
    let multiplication = 1;
    for(n = 1; n <= x ; n++){
        multiplication = (multiplication * n);
    }
    console.log(multiplication);
}
f4(5)

function f5 (x, y) {
    console.log(Math.cos(x) - Math.sin(y));
}
f5(1,2)

function f6 (x) {
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + 5 * x + 12);
}
f6(1);

function f7 (x) {
    console.log(Math.pow(x, 2));
}
f7(5);

function f9 (x) {
    console.log(Math.sqrt(x))
}
f9(9);


function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(numbers[0]));
console.log(isEven(numbers[1]));

function addTwoNumbers (x, y){
    return x + y;
}
console.log(addTwoNumbers( 4, 5));

function multiplyTwoNumbers (x, y) {
    return x * y;
}
console.log(multiplyTwoNumbers(4, 5));

let num1 = Number(prompt("Give me your number"));
let num2 = Number(prompt("Give me your number"))

function diffrence (x, y) {
    if ( x > y) {
        console.log(x);
    } else {
        console.log(y);
    }
}
diffrence(num1, num2);