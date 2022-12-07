console.log("Array methods");



function findAt (arr, index) {
    return arr[index];
}

const Array1 = [1,2,3,4,5,6,7];

console.log(findAt(Array1, 0));



console.log(Array1.at(0));
console.log(Array1.at(2));
console.log(Array1.at(4));

// arr1 = [1,2,3,4] arr2 =  => [1,2,3,4,5,6,7];
function arrConcat (arr1, arr2){
    for ( let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

let array1 = [1,2,3,4];
let array2 = [5,6,7];
console.log(arrConcat(array1, array2));

// or you can write like this-->

const arraySum1 = array1.concat(array2);
const arraySum2 = array1 + array2;

console.log(arraySum1);
console.log(arraySum2);


//Array includes

let arrayIncludes = function (arr, number) {
    let found = false;
    for(let i = 0; i < arr.length; i++ ){
        if(number === arr[i]){
            found = true;
            break;
        }
    }
    return found;
}

const arrInc = [3,5,7];
console.log(arrayIncludes(arrInc, 3));
console.log(arrayIncludes(arrInc, 6));
console.log(arrayIncludes(arrInc, 7));
// or you can write like this-->
console.log(arrInc.includes(3));
console.log(arrInc.includes(6));
console.log(arrInc.includes(7));


