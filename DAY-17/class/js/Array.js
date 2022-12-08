// console.log("Array methods");



// function findAt (arr, index) {
//     return arr[index];
// }

// const Array1 = [1,2,3,4,5,6,7];

// console.log(findAt(Array1, 0));



// console.log(Array1.at(0));
// console.log(Array1.at(2));
// console.log(Array1.at(4));

// // arr1 = [1,2,3,4] arr2 =  => [1,2,3,4,5,6,7];
// function arrConcat (arr1, arr2){
//     for ( let i = 0; i < arr2.length; i++){
//         arr1.push(arr2[i]);
//     }
//     return arr1;
// }

// let array1 = [1,2,3,4];
// let array2 = [5,6,7];
// console.log(arrConcat(array1, array2));

// // or you can write like this-->

// const arraySum1 = array1.concat(array2);
// const arraySum2 = array1 + array2;

// console.log(arraySum1);
// console.log(arraySum2);


// //Array includes

// let arrayIncludes = function (arr, number) {
//     let found = false;
//     for(let i = 0; i < arr.length; i++ ){
//         if(number === arr[i]){
//             found = true;
//             break;
//         }
//     }
//     return found;
// }

// const arrInc = [3,5,7];
// console.log(arrayIncludes(arrInc, 3));
// console.log(arrayIncludes(arrInc, 6));
// console.log(arrayIncludes(arrInc, 7));
// // or you can write like this-->
// console.log(arrInc.includes(3));
// console.log(arrInc.includes(6));
// console.log(arrInc.includes(7));

// // array implicit function includes
// console.log('array builtin method includes')
// console.log(arrayInc.includes(2));
// console.log(arrayInc.includes(5));
// console.log(arrayInc.includes(3));

// // arr1 = [1, 2, 3] => 3 index? => 2
// let findIndex = function (arr, number) {
//     let index = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if(number === arr[i]){
//             index = i;
//         }
//     }
//     return index;
// }
// const arrIndex = [1, 2, 3]
// console.log(findIndex(arrIndex, 3)) // => 2
// console.log(findIndex(arrIndex, 2)) // => 1
// console.log(findIndex(arrIndex, 10)) // => -1
// console.log('now it is time to test indexof method of array')
// console.log(arrIndex.indexOf(3)) // => 2
// console.log(arrIndex.indexOf(2)) // => 1
// console.log(arrIndex.indexOf(10)) // => -1
// const animals = ['chono', 'buhun', 'temee', 'nugas', 'buhun'];
// console.log(animals.indexOf('buhun')); // => 1 
// console.log(animals.indexOf('buhun', 2)); // => 4
// console.log(animals.indexOf('giraffe')); // -1

// // JOIN 
// console.log('JOIN ME function')

// // arr1 = [1, 2, 3] => 123
// // arr1 = [1, 2, 3] => 1;2;3
// let funcJoin = (arr, symbol) => {
//     let output = '';

//     for(let i = 0; i < arr.length; i++){
//         if(i == arr.length - 1) {
//             symbol = ''
//         }
//         output = output + arr[i] + symbol;
//     }

//     return output;
// }

// const arrayJoin = [1, 2, 3]
// console.log(funcJoin(arrayJoin, "+")) // => 1+2+3+
// console.log(funcJoin(arrayJoin, ",")) // => 1,2,3,
// console.log(funcJoin(arrayJoin, "-")) // => 1,2,3,

// console.log('array join method')
// const jiguurten = ['Elee', 'Heree', 'Galuu'];
// console.log(jiguurten.join()); // "Elee,Heree,Galuu"
// console.log(jiguurten.join('')); // "EleeHereeGaluu"
// console.log(jiguurten.join('-')); // "Elee-Heree-Galuu"

// // arr1 = [1, 2, 3] => pop => [1, 2]
// console.log('pop array function')
// let popFunc = (arr) => {
//     const lastIndex = arr.length -1 ;
//     let poppedArray = []

//     for(let i = 0; i < arr.length; i++){
//         if (i != lastIndex) {
//             poppedArray.push(arr[i]);
//         }
//     }

//     return poppedArray;
// }

// const popArray = [1, 2, 3]
// console.log(popFunc(popArray)) // [1, 2]
// console.log(popFunc([12, 4, 3, 5, 6])) // [12, 4, 3, 5]

// console.log('pop array method')
// const popArrayResult = [3, 4, 5, 6, 7];
// popArrayResult.pop()
// console.log(popArrayResult);


// Shift

let shiftArr = (arr) => {
    let tempArray = [];
    for ( let i = 0; i < arr.length; i++) {
        if (i != 0){
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}

let arr1 = [1, 2, 3, 5, 6];

console.log(shiftArr(arr1));

// or you can do like this

const firstElement = arr1.shift();
console.log(arr1);
console.log(firstElement);

// UNSHIFT

const array1 = [1, 2, 3];

console.log(array1.unshift(6));
console.log(array1);

// SORT

let sortArray = [1, 2, 8, 7, -1, 10];

sortArray = [1, 2, 8, 7, -1, 10];
console.log('sorting array')
console.log(sortArray);
function sortingAlgorithm(arr){
    for (let i = 0; i <= arr.length - 2; i++){
        let indexMin = i;
        for(let j = i+1; j < arr.length - 1; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }
    return arr;
    
}
console.log(sortingAlgorithm(sortArray))

// or you can write like this

console.log('array sorting');
const names = ['Marlaa', 'Javkhaa', 'Javkhlan', 'Dorj'];
names.sort();
console.log(names);

//REVERSE

function arrayReverse(arr) {
    let tempArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        tempArray.push(arr[i]);
    }
    return tempArray;
}
console.log(arrayReverse(sortArray));

// or you can write like this 

const numbers = ["one", "two","three"]
console.log("array1:", numbers)
const reversed = numbers.reverse();
console.log("reversed:", reversed);


// SLICE

const nameSlice = ["bat" , "dorj" , "purev","davaa", "tomor"];
console.log(nameSlice.slice(2));


function nameSliceFunc(arr, index) {
    let tempArray = [];
    for(let i = index; i < arr.length; i++ ){
        tempArray.push(arr[i]);
    }
    return tempArray;
}
console.log(nameSliceFunc(nameSlice, 3));


//   SPLICE

const spliceNames = ["davaa", "lhagva" , "purev" , "byamba"];
spliceNames.splice(1, 0, "myagmar");
spliceNames.splice(4, 0, "baasan");
spliceNames.splice(6, 0, "nyam");

console.log(spliceNames);


