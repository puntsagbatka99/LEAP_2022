/*let a = "hi";
let b = "hi";
console.log(a < b);

console.log(a == b);

console.log( a === b);

let c = 10;
let d = "10"
console.log(c == d)
console.log(c === d);

let e = true;
let f = false;
console.log(e < f);
console.log(e > f);

let result = 11;

if (result > 10) {
    console.log("more than 10");
} else {
    console.log("less than 10");
}

result > 10 ? console.log("more than 10") : console.log("less than 10");

let price1 = Number(prompt("Үнэ"));
5000<= price1 && price1 <= 30000 ? console.log(price1 * 1.15) : console.log( price1 * 1.2 );

const studentName = prompt("Give me your name");
const studentPoint = Number(prompt("Give me your Point"));

if (studentPoint<60) {
    alert(studentName +"-"+ studentPoint + "-маш муу")
} else if (60 <= studentPoint && studentPoint < 70) {
    alert(studentName +"-"+ studentPoint + "-Хангалттай");
} else if (70 <= studentPoint && studentPoint < 80) {
    alert(studentName +"-"+studentPoint + "-Дунд");
} else if (80 <= studentPoint && studentPoint < 90) {
    alert(studentName +"-"+ studentPoint + "-Сайн");
} else if (90 <= studentPoint && studentPoint <= 100) {
    alert(studentName +"-"+ studentPoint + "-Маш сайн");
} else {
    alert("Тийм дүн байхгүй.")   
}

console.log(`${studentName} - ${studentPoint} - "маш муу`)*/

//alert(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n  \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

/*console.log("it's log");
console.error("it's error");
const str = "Life, the universe and everything"
console.log(str.length);

console.log(str.charAt(0));
console.log(str[1]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());



const RD = prompt("Insert your Register Number");
//if (RD.length == 10) {
//    alert("Succesfully entered")
//} else {
//    alert("Your Rgister Number is incorrect");
//}
console.log(RD [0]);
console.log(RD [1]);
console.log(RD.substr(0,2));
console.log(RD.substr(2,9));

const registerChar = RD.substr(0, 2);
const registerNum = RD.substr(2, 9);

if (!Number.isInteger( Number(registerChar)) && Number.isInteger(Number(registerNum)) && RD.length == 10) {
    alert("Your Register number is correct");
} else {
    alert("Your Register Number is incorrect");
}


/*
let firstName = "John";
let fullName = firstName.concat(" ","Smith");
console.log(fullName);
console.log(firstName);

let name = "JavaScript String";
console.log(name.substr(0, 10));
console.log(name.substr(11,6)) */


const phoneNumber = prompt("Утасны дугаар оруулна уу");
const prefix = '+976';
if (phoneNumber.substr(0, 4) == +976 && phoneNumber.length == 12) {
    console.log("true");
} else {
    console.log("false");
}

