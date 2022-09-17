// // Exercises 1
// // ------------------------------------------------------------------------------------------------------
// // 1.1 Declare an empty array;
// const newArr = [];

// // 1.2 Declare an array with more than 5 number of elements
// const moreThanFive = [1, 2, 3, 4, 5, 6, 7];
// console.log(moreThanFive);

// // 1.3 Find the length of your array
// const moreThanFiveLenght = moreThanFive.length;
// console.log(moreThanFiveLenght);

// // 1.4 Get the first item, the middle item and the last item of the array
// const firstItem = moreThanFive[0];
// console.log(firstItem);

// const lastIndex = moreThanFiveLenght - 1;
// const lastItem = moreThanFive[lastIndex];
// console.log(lastItem);

// const middleIndex =
//   moreThanFiveLenght % 2 == 1 ? Math.floor(moreThanFiveLenght / 2) : null;

// const middleItem = moreThanFive[middleIndex];
// console.log(middleItem);

// // 1.5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// // The array size should be greater than 5
// const personalInfo = ['Ali', 'Yolalan', 27, true, 1995, 'Sivas'];

// // 1.6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// const itCompanies = [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon',
// ];

// // 1.7 Print the array using console.log()
// console.log(itCompanies);

// // 1.8 Print the number of companies in the array
// const itCompaniesLenght = itCompanies.length;
// console.log(itCompaniesLenght);

// // 1.9 Print the first company, middle and last company
// const firstIndexOfCompany = 0; // First index always is zero.
// const firstCompany = itCompanies[firstIndexOfCompany];
// console.log(firstCompany);

// const middleIndexOfCompany = Math.floor(itCompaniesLenght / 2);
// const middleCompany = itCompanies[middleIndexOfCompany];
// console.log(middleCompany);

// const lastIndexOfCompany = itCompanies.length - 1;
// const lastCompany = itCompanies[lastIndexOfCompany];
// console.log(lastCompany);

// // 1.10 Print out each company
// itCompanies.forEach((company) => {
//   console.log(company);
// });

// // 1.11 Change each company name to uppercase one by one and print them out
// itCompanies.forEach((company) => {
//   const convertToUpperCase = company.toUpperCase();
//   console.log(convertToUpperCase);
// });

// // 1.12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const sliceLastIndex = itCompanies.slice(0, itCompaniesLenght - 1);
// const lastItemOfCompany = itCompanies[itCompaniesLenght - 1];

// const sliceLastIndexToString = sliceLastIndex.join(', ');

// const desiredSentence = `${sliceLastIndexToString} and ${lastItemOfCompany} are big IT companies.`;
// console.log(desiredSentence);

// // 1.13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// const companyIndex = itCompanies.indexOf('Ninova');
// const returnMessage =
//   companyIndex == -1
//     ? 'There is no company like this name.'
//     : itCompanies[companyIndex];

// console.log(returnMessage);

// // 1.14 Filter out companies which have more than one 'o' without the filter method
// // FIXME: I am not ready the challange for this.
// const moreThanOne = itCompanies.forEach((company) => {
//   const convertToLowerCase = company.toLowerCase();
//   const indexOfChar = convertToLowerCase.indexOf('o');
//   const returnMessage =
//     indexOfChar == -1 ? 'There is no O character' : 'Yesss, we have';
//   console.log(returnMessage);
// });

// // 1.15 Sort the array using sort() method
// const sortCompany = itCompanies.sort();
// console.log(sortCompany);

// // 1.16 Reverse the array using reverse() method
// const reverseCompany = itCompanies.reverse();
// console.log(reverseCompany);

// // 1.17 Slice out the first 3 companies from the array
// const sliceFirstThree = itCompanies.slice(0, 3);
// console.log(sliceFirstThree);

// // 1.18 Slice out the last 3 companies from the array
// const sliceLastThree = itCompanies.slice(4, itCompaniesLenght);
// console.log(sliceLastThree);

// // 1.19 Slice out the middle IT company or companies from the array
// const middleIndexCompany = Math.floor(itCompaniesLenght / 2);
// const middleItemCompany = itCompanies[middleIndexCompany];
// console.log(middleItemCompany);

// // 1.20 Remove the first IT company from the array
// const removeFirstItem = itCompanies.shift();
// console.log(itCompanies);

// // 1.21 Remove the middle IT company or companies from the array
// // FIXME: I can not solve this challange.
// const newMiddleIndex = itCompanies.length / 2;
// const newMiddleIndexOther = newMiddleIndex - 1;

// const removeMiddleItem = itCompanies.splice(newMiddleIndex, 1);
// const removeMiddleItemOther = itCompanies.splice(newMiddleIndexOther, 1);

// // 1.22 Remove the last IT company from the array
// const removeLastItem = itCompanies.pop();
// console.log(removeLastItem);
// console.log(itCompanies);

// 1.23 Remove all IT companies
// FIXME: I can not solve this challange.

// Exercises 2
// ------------------------------------------------------------------------------------------------------
// 2.1 Create a separate countries.js file and store the countries array in to this file,
// create a separate file web_techs.js and store the webTechs array in to this file.
// Access both file in main.js file
const countries = [
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

export const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

// 2.2 First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const otherText = text.replace(/[^a-zA-Z ]/g, '');
const seperateText = otherText.split(' ');
const seperateTextLength = seperateText.length;

console.log(seperateTextLength);

// 2.3 In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
const indexOfHoney = shoppingCart.indexOf('Honey');
const spliceHoney = shoppingCart.splice(indexOfHoney, 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
const indexOfTea = shoppingCart.indexOf('Tea');
const replaceTea =
  indexOfTea !== -1 ? (shoppingCart[indexOfTea] = 'Green Tea') : null;

console.log(shoppingCart);

// 2.4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const indexOfEthiopia = countries.indexOf('Ethiopia');
const ethiopiaToUpperCase =
  indexOfEthiopia !== -1
    ? countries[indexOfEthiopia].toUpperCase()
    : countries.push('Ethiopia');

console.log(ethiopiaToUpperCase);

// 2.5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.
const isIncludeSass = webTechs.includes('Sass');
const sassConditional = isIncludeSass
  ? 'Sass is a CSS preprocess'
  : webTechs.push('Sass');

console.log(webTechs);

// 2.6 Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// Exercises 3
// ------------------------------------------------------------------------------------------------------
// 3.1 The following is an array of 10 students ages:
// Sort the array and find the min and max age
const studentAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortingAges = studentAges.sort();
console.log(sortingAges);

// Find the median age(one middle item or two middle items divided by two)
const studentAgesLenght = studentAges.length;
const evenItemIndexes = [studentAgesLenght / 2, studentAgesLenght / 2 - 1];
const oddItemIndex = Math.floor(studentAgesLenght / 2);

const evenItemIndexFirst = studentAges[evenItemIndexes[0]];
const evenItemIndexSecond = studentAges[evenItemIndexes[1]];

const oddOrEvenItemIndex =
  studentAgesLenght % 2 == 1
    ? studentAges[oddItemIndex]
    : [evenItemIndexFirst, evenItemIndexSecond];

console.log(oddOrEvenItemIndex);

// Find the average age(all items divided by number of items)
let totalValue = 0;

studentAges.forEach((age) => {
  totalValue = age + totalValue;
});

const averageAge = totalValue / studentAgesLenght;
console.log(averageAge);

// Find the range of the ages(max minus min)
const minAge = sortingAges[0];
const maxAge = sortingAges[studentAgesLenght - 1];

const rangeOfMinAndMax = maxAge - minAge;
console.log(rangeOfMinAndMax);

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const compareMin = Math.abs(minAge - averageAge);
const compareMax = Math.abs(maxAge - averageAge);

console.log(compareMax > compareMin); // False

// 3.2 Find the middle country(ies) in the countries array
const countriesLength = countries.length;
const middleIndex = Math.floor(countriesLength / 2);
const middleItem = countries[middleIndex];

console.log(middleItem);

// 3.3 Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the first half.
const firstHalfIndex = Math.ceil(countriesLength / 2);
const firstHalf = countries.slice(0, firstHalfIndex);
const secondHalf = countries.slice(firstHalfIndex, countriesLength);
const allCountries = [firstHalf, secondHalf];

console.log(allCountries);
