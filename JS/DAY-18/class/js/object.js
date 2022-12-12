let rabbit1 = {
    color: "white",
    rName: "Chandaga",
    gender: "male",
    age: 2,
    jump: function() {
        console.log("i cant jump")
    },
    sayMyName: function(myName) {
        console.log(`Your name is ${myName}`);
    },
}

// console.log(rabbit1.color);
// console.log(rabbit1.rName);

rabbit1.color = "haltar";

rabbit1.jump();
rabbit1.sayMyName('Tserenpuntsag');
console.log(rabbit1);

let rabbit2 = {
    color: "brown",
    rName: "jerry",
    gender: "female",
    age: 1,
    jump: function() {
        console.log("i can jump")
    }
}
rabbit2.jump();
console.log(rabbit2);

let rabbits = [rabbit1, rabbit2];

