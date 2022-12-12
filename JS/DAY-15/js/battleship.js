// let guesses = 0;
// let isSunk = false;
// let hit = 0;

// // let location1 = 3;
// // let location2 = 4;
// // let location3 = 5;

// let locations = [false, false, true, true, true, false, false]

// for (let count = 0; count <= 6; count++) {
//     console.log(locations[count]);
// }

// while (!isSunk) {
//     console.log("start game")

//     let userGuess = Number(prompt("Give me your guess"));
//     guesses = guesses + 1;
//     if (guesses > 6) {
//         alert("YOU LOST")
//         break;
//     }
//     if (userGuess > 0 && userGuess < 7) {
//         console.log(userGuess);
//         if (userGuess == locations[2] || userGuess == locations[3] || userGuess == locations[4]){
//             hit = hit + 1;
//             alert("HIT")
//             if (locations[2] == userGuess){
//                 llocations[2] = -1;
//             }
//             if (locations[3] == userGuess){
//                 locations[3] = -1;
//             }
//             if (locations[4] == userGuess){
//                 locations[4] ==-1;
//             }
//         } else {
//             alert("MISS")
//         }
//         console.log("HIT")
//         if (hit == 3) {
//             isSunk = true;
//             alert("YOU WON")
//         }
//     } else {
//         alert("Give me nubers between 0 and 6");
//     }
// }
// console.log("game over")

let numbers = [1, 2, 5, 3, 5, 6, 7, 8, 10];
for ( n = 0; n < numbers.length; n++ ){
    if(numbers[n] % 2 == 0) {
        console.log(numbers[n]);
    }
}

for (m = 0; m < numbers.length; m++){
    numbers[m] = numbers[m] + 1;
}
console.log(numbers);


let itCompanies = [`Facebook`,`Google`,`Microsoft`,`Apple`,`IBM`,`Oracle`,`Amazon`];
console.log(itCompanies);

console.log(itCompanies[0].length);
console.log(itCompanies[1].length);
console.log(itCompanies[2].length);
console.log(itCompanies[3].length);

console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

console.log(itCompanies[0] = "F")
console.log(itCompanies[1] = "G")
console.log(itCompanies[2] = "M")
console.log(itCompanies[3] = "A")