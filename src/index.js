"use strict";
let a = "iki";
console.log(a);
//eksplisit
let x = 90;
var y = "plugin";
console.log(x, y);
//implisit
let k = 20;
let o = "web";
console.log(k, o);
//any 
let kelas;
kelas = true;
console.log(kelas);
//union 
let mouse;
mouse = 20;
console.log(mouse);
let userID;
userID = 69;
console.log(userID);
//void
function oke(name) {
    console.log(`Hello, ${name}!`);
}
oke("Yasir");
//square brakect
let list;
list = [1, 2, 3, 4];
//generic array 
let list1;
list1 = [1, 2, 3, 4];
console.log(list, list1);
//tuple
let person;
person = ["zulpan", 20];
console.log(person);
//object 
let person1;
person1 = {
    name: "yasir",
    age: 28,
    addres: "tegal"
};
console.log(person1);
//for loop
// for (let i = 0; 1<5; i++){
//     console.log(`Loop ke ${i+1}`);
// } 
//while loop
let counter = 0;
while (counter < -5) {
    counter++;
    console.log(counter);
}
let nilai = 90;
if (nilai > 75) {
    console.log("lulus");
}
else {
    console.log();
}
//swict case
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jum`at";
        break;
    default:
        dayName = " hari lainnya";
}
console.log(`Hari ini adalah $(dayName)`);
