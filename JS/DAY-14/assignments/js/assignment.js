// let urt = "123";
// let sum = 0;
// for( let count = 0; count <= urt.length; count++) {
//     console.log(urt.charAt(count));
//     sum = sum + Number(urt.charAt(count));  
// }
// console.log(sum)

// let urt = "123";
// let sum = 0;
// let count = 0;
// while (count <= urt.length) {
//     console.log(urt.charAt(count));
//     sum = sum + Number(urt.charAt(count));
//     count = count + 1;
//     console.log(sum)
// }


// let sum = 0;
// let rem = 0;
// for(let N = Number(prompt("give me your Nymber")); N > 0;) {
//     rem = N % 10;
//     sum = sum + rem;
//     N = Math.floor(N / 10);
// }
// console.log(sum);

let sum = 0;
let rem = 0;
let N = Number(prompt("give me number"));
while (N > 0) {
    rem = N % 10;
    sum = sum + rem;
    N = Math.floor(N / 10);
}
console.log(sum)

