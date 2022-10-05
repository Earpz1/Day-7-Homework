// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false
let gender

isMale === true ? gender = "Male" : gender = "Female"

console.log("Your gender is", gender)

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num1 = 3
let num2 = 3

let isEight

if ( num1 === 8 || num2 === 8 ) 
{
    isEight = true
} else {
    num1 + num2 === 8 ? isEight = true : isEight = false
}

console.log("Are either of the numbers 8 or do their sum equal 8?" , isEight)

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let firstName = "Daniel"
let surname = "Earp"
let age = 31
let fullName = firstName + " " +  surname

console.log ("Hello, my name is", fullName, "and I am", age, "years old.")

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x = 432
let y = 765756
let z = 10145

if (x > y && x > z) {

    if (y > z) {
        console.log(x,y,z)
    } else {
        console.log (x,z,y)
    }
} else if (y > x && y > z) {

    if (x > z) {
        console.log(y, x, z)
    } else {
        console.log(y, z, x)
    } }
    else if (z > x && z > y) {
    if (x > y ) {
        console.log(z, x, y)
    } else {
        console.log(z, y, x)
    }
}



/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let number1 = 2
let number2 = 5

let average = (number1 + number2) / 2

console.log("The average of", x, "and", y, "is", average, ".")

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "djkgfdgd"
let string2 = "jkghfkljfsdklfjsdf"

if (string1.length > string2.length) {
    console.log("String 1 is bigger than string 2")
} else { 
    console.log("String 2 is bigger than string 1")
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let number = "4"

isNaN(number) ? console.log(number, "is not a number") : console.log(number, "is a number")

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

//Initial value
let bigNumber = 1000

//What % do we want to find of the initial value?
let percentage = 50

let answer = (bigNumber * percentage) / 100
console.log(percentage,"% of", bigNumber, "is", answer)

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let a = 3

a % 2 ? console.log(a, "is odd") : console.log(a, "is even")
