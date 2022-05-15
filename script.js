
// alert("hello world");
// prompt("enter your name");
// console.log("this is a message");
// console.warn("this is a warning");
// console.error("this is an error");

//variables
var x; //declaration
x=10; //assignation
x=20;

//name vs username
var username= "kyle"; //dec and assign in same line

console.log(username);
console.log(x);

let userAge = 98;
console.log(userAge);
document.writeln(x);
document.writeln(` <p> the users name is : ${username}, and the age is ${userAge} <p> `);

const taxes=11; //const doesnt change in program

console.log(taxes);
document.writeln(taxes);
//document.writeln(userName);



//ex
let numChild= 5;
let partnerName= "Jen";
let geoLoc="Italy";
let jobTitle="programmer";


document.write(`<p>I will be a ${jobTitle} in ${geoLoc}, and married to ${partnerName} with ${numChild} kids. </p>`);



//ex2
//can do calculation salary in document.write
let name= 'kyle';
let email= 'kyle.z.parker3@gmail.com';
let password= '1234';
let age= 29;
let country= 'US';
const months= 12;
let salary= 2000 *months;




document.writeln(`<p>name: ${name}</p><p>email: ${email}</p><p>salary: ${salary}</p>`);
