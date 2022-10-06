/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* The main datatypes in Javascript are Integear (int), String and Boolean. An integear is a number. A string is a 'string' of charachters, usually a word or sentance. 
Boolean is a data type which can only have 2 values - true or false. It's used commonly when finding the outcome of a comparsion or a conditonal.
2 more data types are also NULL & Undefined - although they are very similar. Null means the variable is empty whereas undefined does not contain anything. */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A variable is a 'container' which can have a piece of data assigned to it. This can then be called by using the variable name in code. 
Depending on the type, Variables can have their data manipulated and/or changed by using operations such as +, *, /, - or %.  */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12 + 5)

/* EXERCISE 4
 Create a variable named y and assign to it the number 12.
*/

let y = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = 'John Doe'

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log(12-x)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"

let compareNameFalse = name1 === name2
let compareNameTrue = name2.toLowerCase() === name1 ? true : false
console.log(name1, name2)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = 6
if (x === 1) { console.log('One') }
if (x === 2) { console.log('Two') }
if (x === 3) { console.log('Three') }
if (x === 4) { console.log('Four') }
if (x === 5) { console.log('Five') }
if (x === 6) { console.log('Six') }
if (x === 7) { console.log('Seven') }
if (x === 8) { console.log('Eight') }
if (x === 9) { console.log('Nine') }


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

//Assume a ticket costs £100 but for under 18's it is half price and for under 10's it is free

let ticketPrice = 100
let age = 9

age < 18 ? age < 10 ? ticketPrice = 0 : ticketPrice = ticketPrice / 2 : ticketPrice

console.log(ticketPrice)
