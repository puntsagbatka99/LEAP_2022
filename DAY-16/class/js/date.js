let now = new Date ();
console.log( now );

let DEC31_2022 = new Date("2022-12-31");
let diffrence = DEC31_2022 - now;

let time = new Date(diffrence);
console.log(time.getDate());