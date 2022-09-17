// DATA TYPES
// ------------------------------------------------------------------------------------------------------
// A boolean data type represents one of the two values:true or false. Boolean value is either true or false.
// The use of these data types will be clear when you start the comparison operator.
// Any comparisons return a boolean value which is either true or false.
// Example: Boolean Values
// let isLightOn = true;
// let isRaining = false;
// let isHungry = false;
// let isMarried = true;
// let truValue = 4 > 3; // true
// let falseValue = 4 < 3; // false

// We agreed that boolean values are either true or false.

// Truthy values
// ------------------------------------------------------------------------------------------------------
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

// Falsy values
// ------------------------------------------------------------------------------------------------------
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string

// It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

// Undefined
// ------------------------------------------------------------------------------------------------------
// If we declare a variable and if we do not assign a value, the value will be undefined.
// In addition to this, if a function is not returning the value, it will be undefined.
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

// Null
// ------------------------------------------------------------------------------------------------------
let empty = null;
console.log(empty); // -> null , means no value

// Operators
// ------------------------------------------------------------------------------------------------------
// Assignment operators
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.
let firstNameTwo = 'Ali';
let country = 'Germany';

// Assignment Operators
// Operator  --  Example  --  Same As
// =             x = y        x = y
// +=            x += y       x = x + y
// -=            x -= y       x = x - y
// *=            x *= y       x = x * y
// /=            x /= y       x = x / y
// %=            x %= y       x = x % y
// **=           x **=        x = x ** y

// Arithmetic Operators
// Arithmetic operators are mathematical operators.
// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

const PI = 3.14;
let radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

// Comparison Operators
// In programming we compare values, we use comparison operators to compare two values.
// We check if a value is greater or less or equal to other value.
// Operator  --  Name                                         Example
// ==            Equal in value only: Equivalent              x == y
// ===           Equal value and data type: Exactly Equal     x === y
// !=            Not equal                                    x != y
// >             Greater than                                 x > y
// <             Less than                                    x < y
// >=            Greater than or equal                        x >= y
// <=            Less than or equal                           x <= y

// Example: Comparison Operators
console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == '3'); // true, compare only value
console.log(3 === '3'); // false, compare both value and data type
console.log(3 !== '3'); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ''); // true, equivalent
console.log(0 == ' '); // true, equivalent
console.log(0 === ''); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log('mango'.length == 'avocado'.length); // false
console.log('mango'.length != 'avocado'.length); // true
console.log('mango'.length < 'avocado'.length); // true
console.log('milk'.length == 'meat'.length); // true
console.log('milk'.length != 'meat'.length); // false
console.log('tomato'.length == 'potato'.length); // true
console.log('python'.length > 'dragon'.length); // false

// Try to understand the above comparisons with some logic. Remembering without any logic might be difficult.
// JavaScript is somehow a wired kind of programming language.
// JavaScript code run and give you a result but unless you are good at it may not be the desired result.
// As rule of thumb, if a value is not true with == it will not be equal with ===.
// Using === is safer than using ==. The following link has an exhaustive list of comparison of data types.

// Logical Operators
// The following symbols are the common logical operators: &&(ampersand),
// ||(pipe) and !(negation). The && operator gets true only if the two operands are true.
// The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// && ampersand operator example
const checkOne = 4 > 3 && 10 > 5; // true && true -> true
const checkTwo = 4 > 3 && 10 < 5; // true && false -> false
const checkThree = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example
const checkFour = 4 > 3 || 10 > 5; // true  || true -> true
const checkFive = 4 > 3 || 10 < 5; // true  || false -> true
const checkSix = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples
let checkSeven = 4 > 3; // true
let checkEight = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarriedTwo = !false;

// Increment Operator
// In JavaScript we use the increment operator to increase a value stored in a variable.
// The increment could be pre or post increment. Let us see each of them:
// Pre - increment;
let countOne = 0;
console.log(++countOne); // 1
console.log(countOne); // 1

// Post - increment;
let countTwo = 0;
console.log(countTwo++); // 0
console.log(countTwo); // 1

// Decrement Operator
// In JavaScript we use the decrement operator to decrease a value stored in a variable.
// The decrement could be pre or post decrement. Let us see each of them:
// Pre - decrement;
let countThree = 0;
console.log(--countThree); // -1
console.log(countThree); // -1

// Post - decrement;
let countFour = 0;
console.log(countFour--); // 0
console.log(countFour); // -1

// Ternary Operators
// Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:
let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

isRaining = false;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

// WINDOW METHODS
// ------------------------------------------------------------------------------------------------------
// As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button.
// It is a builtin method and it takes on argument.
// alert(message)
// alert('Welcome to 30DaysOfJavaScript')
// Do not use too much alert because it is destructing and annoying, use it just to test.

// Window prompt() method
// The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable.
// The prompt() method takes two arguments. The second argument is optional.
// prompt('required text', 'optional text')
// let numberTwo = prompt('Enter number', 'number goes here');
// console.log(numberTwo);

// Window confirm() method
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
// A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument.
// Clicking the OK yields true value, whereas clicking the Cancel button yields false value.
// const agree = confirm('Are you sure you like to delete? ');
// console.log(agree); // result will be true or false based on what you click on the dialog box
// These are not all the window methods we will have a separate section to go deep into window methods.

// DATE OBJECT
// ------------------------------------------------------------------------------------------------------
// Time is an important thing. We like to know the time a certain activity or event.
// In JavaScript current time and date is created using JavaScript Date Object.
// The object we create using Date object provides many methods to work with date and time.
// The methods we use to get date and time information from a date object values are started with a word get because it provide the information.
// getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

// Method                               Description                                             Examples
// getFullYear()                        Get the year as a four digit number (yyyy)              2020
// getMonth()                           Get the month as a number (0-11)                        0
// getDate()                            Get the day as a number (1-31)                          23
// getHours()                           Get the hour (0-23)                                     0
// getMinutes()                         Get the minute (0-59)                                   56
// getSeconds()                         Get the seconds (0-59)                                  41
// getMiliseconds                       Get the miliseconds (0-999)                             876
// getTime()                            Get the time (miliseconds since January 1, 1970)        1654115138685
// getDay()                             Get the weekday as a number (0-6)                       5

// Creating a time object
// Once we create time object. The time object will provide information about time. Let us create a time object
const now = new Date();
console.log(now); // Wed Jun 01 2022 23:27:15 GMT+0300 (GMT+03:00)
// We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

// Getting full year
// Let's extract or get the full year from a time object.
const nowTwo = new Date();
console.log(nowTwo.getFullYear()); // 2022

// Getting month
// Let's extract or get the month from a time object.
const nowThree = new Date();
console.log(nowThree.getMonth()); // 5, because the month is June,  month(0-11)

// Getting date
// Let's extract or get the date of the month from a time object.
const nowFour = new Date();
console.log(nowFour.getDate()); // 1, because the day of the month is 1st,  day(1-31)

// Getting day
// Let's extract or get the day of the week from a time object.
const nowFive = new Date();
console.log(nowFive.getDay()); // 3, because the day is Wednesday
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

// Getting hours
// Let's extract or get the hours from a time object.
const nowSix = new Date();
console.log(nowSix.getHours()); // 23, because the time is 23:30:34

// Getting minutes
// Let's extract or get the minutes from a time object.
const nowSeven = new Date();
console.log(nowSeven.getMinutes()); // 31, because the time is 23:31:27

// Getting seconds
// Let's extract or get the seconds from a time object.
const nowEight = new Date();
console.log(nowEight.getSeconds()); // 57, because the time is 23:31:57

// Getting time
// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:
// 1. Using getTime()
const nowNine = new Date(); //
console.log(nowNine.getTime()); // 1654115567426, this is the number of seconds passed from January 1, 1970 to Jun 01 2022 23:32:52

// 1. Using Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds); // 1578092201341, this is the number of seconds passed from January 1, 1970 to Jun 01 2022 23:32:52

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

// Let us format these values to a human readable time format. Example:
const nowTen = new Date();
const year = nowTen.getFullYear(); // return year
const month = nowTen.getMonth() + 1; // return month(0 - 11)
const date = nowTen.getDate(); // return date (1 - 31)
const hours = nowTen.getHours(); // return number (0 - 23)
const minutes = nowTen.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56

// 🌕 You have boundless energy. You have just completed day 3 challenges and you are three steps a head in to your way to greatness.
// Now do some exercises for your brain and for your muscle.
