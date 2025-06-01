// Assignment 1
var age = prompt("Enter Your Age");

if (age >=18){
    alert('You are an adult');
}
else{
    alert('You are aminor');
}


// Assignment 2
var number = prompt("Enter a number");

if(number >0){
    alert('Positive number');

}
else{

    alert('Not positive')
}

// Assignment 3
var number = prompt("Enter a number")

if(number % 2 === 0) {
    alert('Even number')
}
else {
    alert('Odd number')
}

// Assignment 4
var username = prompt("Enter username")

if(username ==='admin'){
    alert('Welcome admin!')
}
else{
    alert('Access denied')
}

// Assignment 5
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");


  if (num1 === num2) {
    console.log("Both numbers are the same");
  } else {
    console.log("The numbers are different");
  }

// Assignment 6
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
if (num1 !== null && num2 !== null) {
  alert(Number(num1) > Number(num2) ? "First is larger" : "Second is larger");
}

// Assignment 7
var num = prompt("Enter a number:");

if (num >=100) {
  alert('To big!')
}
else{
    alert('within range')
}

// Assignment 8
var score = prompt("Enter your score");

if(score >=50){
    alert('you passed!')
}
else{
    alert('You failed')
}

// Assignment 9
var temp = prompt("Enter the temperature:");
if (temp !== null) {
  alert(Number(temp) > 30 ? "It's hot!" : "It's not hot.");
}

// Assignment 10
var num10 = prompt("Enter a number:");
if (num10 !== null) {
  alert(Number(num10) === 0 ? "Zero" : "Not zero");
}

// Assignment 11
var age11 = prompt("Enter your age:");
if (age11 !== null) {
  console.log(Number(age11) >= 60 ? "You are a senior citizen." : "You are not a senior.");
}

// Assignment 12
var name = prompt("What is your name?");
alert(name === "Alice" ? "Hi, Alice!" : "You're not Alice!");

// Assignment 13
var password = prompt("Enter your password:");
console.log(password === "12345" ? "Correct password" : "Wrong password");

// Assignment 14
var hour = prompt("Enter the current hour (0–23):");
if (hour !== null) {
  alert(Number(hour) < 12 ? "Good morning!" : "Good afternoon!");
}

// Assignment 15
var num15 = prompt("Enter a number:");
if (num15 !== null) {
  console.log(Number(num15) % 5 === 0 ? "Divisible by 5" : "Not divisible by 5");
}
