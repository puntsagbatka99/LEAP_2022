
let guesses = 0;
let isSunk = false;
let hit = 0;

let location1 = 3;
let location2 = 4;
let location3 = 5;

while (!isSunk) {
    console.log("start game")

    let userGuess = Number(prompt("Give me your guess"));
    guesses = guesses + 1;
    if (guesses > 6) {
        alert("YOU LOST")
        break;
    }
    if (userGuess > 0 && userGuess < 7) {
        console.log(userGuess);
        if (userGuess == location1 || userGuess == location2 || userGuess == location3){
            hit = hit + 1;
            alert("HIT")
            if (location1 == userGuess){
                location1 = -1;
            }
            if (location2 == userGuess){
                location2 = -1;
            }
            if (location3 == userGuess){
                location3 ==-1;
            }
        } else {
            alert("MISS")
        }
        console.log("HIT")
        if (hit == 3) {
            isSunk = true;
            alert("YOU WON")
        }
    } else {
        alert("Give me nubers between 0 and 6");
    }
}
console.log("game over")