// Q1 . Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let char = prompt("Please enter a any charcter upper or lower case");
let charCode = char.charCodeAt(0);

if (charCode >= 65 && charCode <= 90  || charCode >= 65 && charCode <= 90){
    console.log("Q1. " + "This is a Upercase letter and number is " + charCode);
}
else if (charCode >= 97 && charCode <= 122 ){
    console.log("Q1. " + " This is a Lowercase letter " + charCode);
}
else {
    console.log("Q1. " + "Please Enter a valid input");
}

// Q2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let int1 = +prompt("Enter First Number");
let int2 = +prompt("Enter Second Number");

if (int1 > int2 || int1 < int2){
    console.log("Q2. " + "this is larger");
}
else if (int1 === int2){
    console.log("Q2. " + "two integers are equal " + int1 + " = " + int2 );
}
else {
    console.log("Q2. " + "incorrect value");
}

// Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let num = +prompt("Enter a number");

if (num > 0){
    console.log("Q3. " + "this number is positive");
}
else if (num < 0 ){
    console.log("Q3. " + "this number is negative");
}
else {
    console.log("Q3. " + "this number is zero");
}

// Q4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

let inp = prompt("Enter a character");

if (inp === "a" || inp === "e" || inp === "i" || inp === "o" || inp === "u" ){
    console.log("Q4. " + "(" + inp + ")"  + " This is True");
}
else{
    console.log("Q4. " + "(" + inp + ")"  + " This is False");
}

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


let correct_Paswword = "asifasif123";
let his_Password = prompt("Enter Your Password");

if (his_Password === null || his_Password === ""){
    console.log("Q5. " + "Please Enter your password");
}
else if(his_Password === correct_Paswword){
    console.log("Q5. " + " Correct! The password you entered matches the original password");
}
else {
    console.log("Q5. " + " Incorrect Password");
}

// Q6. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
console.log("Q6. " + greeting);


// Q7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = 1900;

if (time >= 0000 && time < 1200)
{
    console.log("Good Morning");
}
else if(time >= 1700 && time < 2100)
{
    console.log("Good Evening");
}
else if(time >= 2100 && time < 2359)
{
    console.log("Good Night");
}
else{
    console.log("Bad day");
}














