

function howDoesTheFoxSay(array, animalTyper) {
    for(let i = 0; i < array.length; i++){
        // console.log(animals[i].sound);
        if(array[i].type == animalTyper){
            console.log(array[i].sound + "-" + array[i].sound + "-" + array[i].sound);
        }
    }
}

let animals = [
    {
    type: "dog", 
    sound: "woof"
    }, 
    {
        type: "cow",
        sound: "moo"
    },
    {
        type: "cat",
        sound: "meow"
    }
]

howDoesTheFoxSay(animals, 'cat');

// EX2

let student1 = {
    name: "Puntsag", 
    birthOfYear: 1999, 
    hobby: "ball", 
    single: false
}
let student2 = {
    name: "Erka", 
    birthOfYear: 1998, 
    hobby: "horse", 
    single: false
}
let student3 = {
    name: "Uchka", 
    birthOfYear: 2010, 
    hobby: "trading", 
    single: true
}

let students = [student1 , student2 , student3];

function findAge (array) {
    for (let i = 0; i < array.length; i++){
        if ( 2022 - array[i].birthOfYear >= 20 ) {
            console.log(array[i].name)
        }
    }
}
findAge(students)

function findAge (array) {
    for (let i = 0; i < array.length; i++){
        let age =[];
        if ( 2022 - array[i].birthOfYear) {
            console.log(array[i].name)
        }
    }
}
findAge(students)