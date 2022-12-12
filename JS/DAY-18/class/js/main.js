// JS methods

const shoppingCart = ["milk", "coffee", "tea", "honey"];

console.log(shoppingCart);

if (!shoppingCart.includes("meat")){
    shoppingCart.unshift("meat");
}

if (!shoppingCart.includes("sugar")){
    shoppingCart.push("sugar")
}
let i = shoppingCart.indexOf("honey");
shoppingCart.splice(i,1);

let n =shoppingCart.indexOf("tea");
shoppingCart[n] = "green tea";

console.log(shoppingCart);


let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] ;

array.sort();
console.log(array);

let reversed = array.reverse();
console.log(reversed);

let firstElement = array.shift();
console.log(array);

array.splice(2,2);
console.log(array);

let l = array.pop();
console.log(array);

array.splice(0, array.length);
console.log(array);

//EX3

let carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];

let firstLetter = prompt("Give me first letter of car brand");

for ( let i = 0; i < carBrands.length; i++){
    if(carBrands[i][0][0] == firstLetter){
        console.log(carBrands[i]);
    }
}