// tic tac toe
let row1 = ["x","o","x"];
let row2 = ["o","o","x"];
let row3 = ["x","x","o"];

console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = [["x","o","x"] , ["o","o","x"] , ["x","x","o"]];

let row = Number(prompt("Give me ROW"));
let col = Number(prompt("Give me COLUMN"));
let guess = prompt("Give me X or O");

tictactoe[row][col] = guess;

for ( i = 0; i < tictactoe.length; i++) {
    let output = "";
    for ( q = 0; q < tictactoe[i].length ; q++) {
        output = output + " " + tictactoe[i][q] + " |"
    }
    console.log(output)
}

