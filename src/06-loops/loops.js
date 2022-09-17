// for (let index = 0; index <= 9; index++) {
//   const element = `${index} * ${index} = ${index * index}`;
//   console.log(element);
// }

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// const newArr = [];

// for (let index = 0; index < countries.length; index++) {
//   const element = countries[index];
//   const convertToUpperCase = element.toUpperCase();
//   newArr.push(convertToUpperCase);
// }

// console.log(newArr);

// // Adding all elements in the array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumOfNumbers = 0;

// for (let index = 0; index < numbers.length; index++) {
//   sumOfNumbers = numbers[index] + sumOfNumbers;
// }

// console.log(sumOfNumbers);

// // Creating a new array based on the existing array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = [];

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   const newElement = element ** 2;
//   newArr.push(newElement);
// }

// console.log(newArr);

// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const newArr = [];

for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr);
