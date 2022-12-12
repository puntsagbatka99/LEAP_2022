// function pow (number, exponent) {
//     let multiply = 1;
//     for( let i = 1; i <= exponent; i++) {
//         multiply = multiply * number;
//     }
//     return multiply;
// }
// let result = pow(5, 2);
// console.log(result);


// function findMin (numMax, numMin) {
//     if (numMax > numMin) {
//         return numMin;
//     } else {
//         return numMax;
//     }
// }
// console.log(findMin(10, 8));




// function printArray(arr) {
//     for ( let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// 
// printArray(array);


// console.log("EX3 MAX oloh")


// let findArrayMax = function(arrr) {
//     let max = -1;
//     for (let n = 0; n < arrr.length; n++){
//          if (max <= arrr[n]) {
//              max = arrr[n];
//          }
//     }
//     return max;
// }
// console.log(findArrayMax(array));

console.log("EX4 sdadasddsda");

let findArrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / arr.length;
    return average;
} 

let array = [12, 23, 76, 32, 1, 345, 37, 48, 87];

console.log( findArrayAverage(array));

