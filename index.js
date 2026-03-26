// console.log("Hello World!");
// console.log("I like pizza!");

// window.alert("This is an alert");
// window.alert("I like pizza!");

// document.getElementById("myH1").textContent = "Hello World!";
// document.getElementById("myP").textContent = "This is a paragraph.";

// variable = A container that stores a value.
//            Behave as if it were the value it contains.

// 1. Declaration let x;
// 2. Assignment x = 100;

// let age = 21;
// let gpa = 9;

// console.log(`You are ${age} years old.`);
// console.log(`Your gpa is: ${gpa}`);

// let firstName = "Dhruv";
// console.log(`Your name is ${firstName}`);
// console.log(typeof firstName);

// let online = true;
// console.log(`Bro is online: ${online}`);

// Exercise:

// let fullName = "Dhruv Bhardwaj";
// let age = 21;
// let isStudent = true;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `I am ${age}`;
// document.getElementById("p3").textContent = `Am I a student? ${isStudent}`;

// arithmetic operators: +, -, *, /, %, **
// operator precedence: 1.parenthese 2.exponents 3.multiplication/division/module 4.addition/subtraction

//Ways to accept user input
// 1. EASY WAY: window.prompt()

// let username;

// username = window.prompt("What is your name?");

// console.log(`Name:d ${username}`);

// 2. PRO WAY: HTML textbox
// document.getElementById("mySubmit").onclick = function(){
//     let username = document.getElementById("myText").value;
//     console.log(`Name: ${username}`);
// }

// const PI = 3.141;
// let radius;
// let circumference;

// radius =window.prompt("Enter radius: ");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(`The circumference is ${circumference}`);

// document.getElementById("mySubmit").onclick = function(){
//     const PI = 3.141;
//     let radius;
//     let circumference;

//     radius = document.getElementById("myText").value;
//     radius = Number(radius);

//     circumference = 2 * PI * radius;
//     document.getElementById("myH2").textContent = circumference;
// }

// let x = 3;
// let y = 2;
// let z;

// z = Math.round(x); round off the value of x to the nearest integer
// console.log(z);

// z = Math.floor(x); round off the value of x to the nearest integer less than or equal to x
// console.log(z);

// z = Math.ceil(x); round off the value of x to the nearest integer greater than or equal to x
// console.log(z);

// z = Math.trunc(x);
// console.log(z);

// z = Math.pow(x, y); // x^y
// console.log(z);

// z = Math.sqrt(x); square root of x
// console.log(z);

// z = Math.log(x);
// console.log(z);

// z = Math.sign(x); //the sign of x: 1 if x is positive, -1 if x is negative, 0 if x is 0
// console.log(z);

// you can use trigo functions also as well as max and min

// checked: it is a property of checkbox and radio input elements that indicates whether the element is checked or not. It returns a boolean value.
