/**var baby = "Baby Shark, doo-doo, doo-doo";

console.log(baby);

console.log(baby);
console.log(baby);
console.log(baby);



var a = "Baby Shark, ";
var b = "doo-doo, ";
var c = "doo-doo";
var d = "Mommy Shark, ";

console.log(a + b + c);
console.log(a + b + c);
console.log(a + b + c);


let myNumber = 5;
let undify;
let nullVariable = null;
let myDecision = true;

// typeof
console.log(typeof 1);
console.log(typeof "Hello");
console.log(typeof undify);
console.log(typeof nullVariable);
console.log(myDecision);
console.log(typeof myDecision);


 * alert gargana
 * 
 * x`2 + y`2 - z`3 / 240 * 175

const PI = 3.14;
let r = 45;
let circleLength = 2 * PI * r;
console.log(circleLength);

let height = 5;
let width = 6;
let h = 12;
let trapezoidArea = (height + width )/ 2 * h;
alert(trapezoidArea); 

let bottom = prompt("Please give me your bottom!");
let test = prompt("Please give me your top!");
let height = prompt("Please give me your height!");
let trapezoidArea = ("bottom + test")/2 * height;
alert(trapezoidArea);

let a = prompt("Please give me A number");
let b = prompt("Please give me B number");

if(a < b) {
    console.log("It's true")
} else {
    console.log("It's false")
}



const yearOfBirth = prompt("Please give your year of birth");
let old = ( 2022 - yearOfBirth );
console.log(old);

if(0 <= old && old <= 1){
    console.log("Infant");
} else if( 1 < old && old <= 3){
    console.log("Todler")
} else if( 3 < old && old <= 5){
    console.log("Pre-school")
} else if( 5 < old && old <= 12){
    console.log("Grand-schooler")
} else if( 12 < old && old <= 18){
    console.log("Teen")
} else if( 18 < old && old <= 21){
    console.log("Young Adult")
} else {
    console.log("Adult")
}

const number = prompt("Please give your Number");
if(number%2 == 0 ){
    console.log("тэгш тоо")
} else {
    console.log("сондгой")
}

const number = prompt("Please give your Number");
if(number%3 == 0 || number%7 ==0){
    console.log("Huvaagddag too")
} else {
    console.log("Huvaagdahgui too")
}



const undur = prompt("Please insert Height");
const weight = prompt("Please insert Weight");
const height = (undur / 100);
const BMI = weight / (height * height);
if ( BMI <= 18.5 ) {
    console.log("Under Weight")
} else if ( 18.5 < BMI && BMI <= 24.9 ){
    console.log("Normal")
} else if ( 24.9 < BMI && BMI <= 29.9 ){
    console.log("Over Weight")
} else if ( 29.9 < BMI && BMI <= 34.9 ){
    console.log("Obesity (Class 1)")
} else if ( 34.9 < BMI && BMI <= 39.9 ){
    console.log("Obesity (Class 2)")
} else {
    console.log("Extreme Obesity")


let day = prompt("enter date");
let dayNumber = Number(day)
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Thuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = "Invalid Day"
}
console.log(dayName)}*/

const number = prompt("Please give your Number");
if (number>=0) {
    console.log("Positive")
} else{
    console.log("Negative")
}