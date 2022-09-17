// Arrays
// ------------------------------------------------------------------------------------------------------

// How to create an empty array
// In JavaScript, we can create an array in different ways. Let us see different ways to create an array.
// It is very common to use const instead of let to declare an array variable.
// If you ar using const it means you do not use that variable name again.

// Using Array constructor
// syntax
const arr = Array();
// or
// let arr = new Array()
console.log(arr); // []

// Using square brackets([])
// syntax
// This the most recommended way to create an empty list
const arrTwo = [];
console.log(arrTwo);

// How to create an array with values
// Array with initial values. We use length property to find the length of an array.
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruitsOne = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']; // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']; // array of strings, countries

// Print the array and its length
console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);

console.log('Fruits:', fruitsOne);
console.log('Number of fruits:', fruitsOne.length);

console.log('Vegetables:', vegetables);
console.log('Number of vegetables:', vegetables.length);

console.log('Animal products:', animalProducts);
console.log('Number of animal products:', animalProducts.length);

console.log('Web technologies:', webTechs);
console.log('Number of web technologies:', webTechs.length);

console.log('Countries:', countries);
console.log('Number of countries:', countries.length);

// Array can have items of different data types
const arrThree = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
]; // arr containing different data types
console.log(arrThree);

// Creating an array using split
// As we have seen in the earlier section, we can split a string at different positions, and we can change to an array.
// Let us see the examples below.
let js = 'JavaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',');

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = txt.split(' ');

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accessing array items using index
// We access each element in an array using their index. An array index starts from 0.
// The picture below clearly shows the index of each element in the array.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

const numbersTwo = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbersTwo.length); // => to know the size of the array, which is 6
console.log(numbersTwo); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbersTwo[0]); //  -> 0
console.log(numbersTwo[5]); //  -> 100

let lastIndexTwo = numbers.length - 1;
console.log(numbers[lastIndexTwo]); // -> 100

// Modifying array element
// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.
const numbersThree = [1, 2, 3, 4, 5];
numbersThree[0] = 10; // changing 1 at index 0 to 10
numbersThree[1] = 20; // changing  2 at index 1 to 20

console.log(numbersThree); // [10, 20, 3, 4, 5]

const countriesTwo = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

countriesTwo[0] = 'Afghanistan'; // Replacing Albania by Afghanistan
let lastIndexThree = countriesTwo.length - 1;
countriesTwo[lastIndexThree] = 'Korea'; // Replacing Kenya by Korea

console.log(countriesTwo);

// Methods to manipulate array
// There are different methods to manipulate an array.
// These are some of the available methods to deal with arrays:
// Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array Constructor
// Array:To create an array.

const arrFour = Array(); // creates an an empty array
console.log(arrFour);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]
