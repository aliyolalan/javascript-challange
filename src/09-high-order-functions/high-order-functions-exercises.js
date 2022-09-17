const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Exercises: Level 1
// ------------------------------------------------------------------------------------------------------
// 1.1 Explain the difference between forEach, map, filter, and reduce.
// TODO:

// 1.2 Define a callback function before you use it in forEach, map, filter or reduce.
const callBack = (num) => {
  return num ** 2;
};

const calcOfCube = (callBack, num) => {
  return callBack(num) * num;
};

console.log(calcOfCube(callBack, 5));

// 1.3 Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));

// 1.4 Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));

// 1.5 Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number));

// 1.6 Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map((country) => country.toUpperCase());
console.log(newCountries);

// 1.7 Use map to create an array of countries length from countries array.
const lengthOfCountries = countries.map((country) => country.length);
console.log(lengthOfCountries);

// 1.8 Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((number) => number ** 2);
console.log(squareNumbers);

// 1.9 Use map to change to each name to uppercase in the names array
const namesWithUpperCase = names.map((name) => name.toUpperCase());
console.log(namesWithUpperCase);

// 1.10 Use map to map the products array to its corresponding prices.
const newProducts = products.map((product) => product);
console.log(newProducts);

// 1.11 Use filter to filter out countries containing land.
const containingWithLand = countries.filter((country) =>
  country.includes('land')
);
console.log(containingWithLand);

// 1.12 Use filter to filter out countries having six character.
const haveSixCharacters = countries.filter((country) => country.length === 6);
console.log(haveSixCharacters);

// 1.13 Use filter to filter out countries containing six letters and more in the country array.
const haveSixOrMoreCharacters = countries.filter(
  (country) => country.length >= 6
);
console.log(haveSixOrMoreCharacters);

// 1.14 Use filter to filter out country start with 'E';
const startWithE = countries.filter((country) => country.startsWith('E'));
console.log(startWithE);

// 1.15 Use filter to filter out only prices with values.
// TODO: I think so, we can use map() method for this challange.
const productsWithPrice = products.filter(
  (product) => typeof product.price === 'number'
);
console.log(productsWithPrice);

// 1.16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// TODO: I couldn't solve this challange. I will look at later
const getStringLists = (arr) => {
  return arr.forEach((item) => toString(item));
};
console.log(getStringLists(numbers));

// 1.17 Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfNumbers);

// 1.18 Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// TODO: I couldn't solve this challange.
const northEuropeanCountries = countries.reduce((acc, cur) => {
  return acc + cur;
}, 'Estonia');
console.log(northEuropeanCountries);

// 1.19 Explain the difference between some and every
// TODO:

// 1.20 Use some to check if some names' length greater than seven in names array
const greaterThanSeven = names.some((name) => name.length > 7);
console.log(greaterThanSeven);

// 1.21 Use every to check if all the countries contain the word land
const isCountryContainingWithLand = countries.every((country) =>
  country.includes('land')
);
console.log(isCountryContainingWithLand);

// 1.22 Explain the difference between find and findIndex.
// TODO:

// 1.23 Use find to find the first country containing only six letters in the countries array
const firstCountryWithSixLetters = countries.find(
  (country) => country.length == 6
);
console.log(firstCountryWithSixLetters);

// 1.24 Use findIndex to find the position of the first country containing only six letters in the countries array
const firstCountryWithSixLettersIndex = countries.findIndex(
  (country) => country.length == 6
);
console.log(firstCountryWithSixLettersIndex);

// 1.25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const indexOfNorway = countries.findIndex((country) => {
  if (country.includes('Norway')) {
    return 1;
  }
});
console.log(indexOfNorway);

// 1.26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const indexOfRussia = countries.findIndex((country) => {
  if (country.includes('Russia')) {
    return 1;
  }
});
console.log(indexOfRussia);

// Exercises: Level 2
// ------------------------------------------------------------------------------------------------------
// 2.1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map((product) => product.price);
console.log(totalPrice);
