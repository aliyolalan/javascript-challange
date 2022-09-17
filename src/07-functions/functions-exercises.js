// EXERCISES
// ------------------------------------------------------------------------------------------------------
// Exercises: Level 1
// 1.1 Declare a function fullName and it print out your full name.
function fullName() {
  const firstName = 'Ali';
  const lastName = 'Yolalan';
  console.log(firstName + ' ' + lastName);
}
fullName();

// 1.2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameTwo(lastName) {
  const firstName = 'Ali';
  console.log(firstName + ' ' + lastName);
}
fullNameTwo('Karadayı');

// 1.3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numberOne, numberTwo) {
  const sumOfNumbers = numberOne + numberTwo;
  return sumOfNumbers;
}
console.log(addNumbers(10, 20));

// 1.4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  const rectangleArea = length * width;
  console.log(rectangleArea);
}
areaOfRectangle(10, 10);

// 1.5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  const rectanglePerimeter = 2 * (length + width);
  console.log(rectanglePerimeter);
}
perimeterOfRectangle(10, 20);

// 1.6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  const prismVolume = length * width * height;
  console.log(prismVolume);
}
volumeOfRectPrism(10, 10, 10);

// 1.7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const PI = Math.PI;
function areaOfCircle(radius) {
  const circleArea = PI * radius * radius;
  console.log(circleArea);
}
areaOfCircle(10);

// 1.8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
  const circleCircum = 2 * PI * radius;
  console.log(circleCircum);
}
circumOfCircle(10);

// 1.9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function calcDensity(mass, volume) {
  const densityValue = mass / volume;
  console.log(densityValue);
}
calcDensity(10, 5);

// 1.10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.
function calcSpeed(distance, time) {
  const speedValue = distance / time;
  console.log(speedValue);
}
calcSpeed(1200, 10);

// 1.11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// const GRAVITY = 9.807;
function calcWeight(mass, gravity) {
  const weigthValue = mass * gravity;
  console.log(weigthValue);
}
calcWeight(73, 0.9807);

// 1.12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celciusDegree) {
  const fahrenheitDegree = celciusDegree * (9 / 5) + 32;
  console.log(fahrenheitDegree);
}
convertCelsiusToFahrenheit(28);

// 1.13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
function calcBMI(weight, height) {
  const valueOfBMI = weight / (height * height);
  if (valueOfBMI < 18.5) {
    return 'Underweight';
  } else if (valueOfBMI >= 18.5 && valueOfBMI <= 24.9) {
    return 'Normal Weight';
  } else if (valueOfBMI >= 25 && valueOfBMI <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
console.log(calcBMI(80, 1.78));

// 1.14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// TODO: I will solve this problem later.
function checkSeason(month) {
  switch (month) {
    case value:
      break;

    default:
      break;
  }
}

// 1.15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(numOne, numTwo, numThree) {
  let newArr = [];
  newArr.push(numOne, numTwo, numThree);

  let maxNumber = 0;
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index] > maxNumber) {
      maxNumber = newArr[index];
    }
  }

  return maxNumber;
}
console.log(findMax(100, 500, 300));

// ------------------------------------------------------------------------------------------------------
// Exercises: Level 2
// 2.1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// TODO: Firstly, you have to learn how to solve this challange.
function solventLinEquation(a, b, c) {
  return;
}

// 2.2 Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// TODO: Firstly, you have to learn how to solve this challange.
function solveQuadEquation(params) {}

// 2.3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'MongoDB'];
function printArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}
printArray(webTechs);

// 2.4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// TODO: I don't like this solution, maybe you should take a look later
const nowDate = new Date();
const getDayOfMonth = nowDate.getDate();
const getMonth = nowDate.getMonth() + 1;
const getYear = nowDate.getFullYear();
const getHour = nowDate.getHours();
const getMinutes = nowDate.getMinutes();

function dateHelper(parameter) {
  if (parameter < 10) {
    return `0` + `${parameter}`;
  } else {
    return parameter;
  }
}

const showDateTime = () => {
  return `${dateHelper(getDayOfMonth)}/${dateHelper(
    getMonth
  )}/${getYear} ${dateHelper(getHour)}:${dateHelper(getMinutes)}`;
};
console.log(showDateTime());

// 2.5 Declare a function name swapValues. This function swaps value of x to y.
// TODO: Firstly, you have to learn how to solve this challange.

// 2.6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const countries = ['Turkey', 'Germany', 'France', 'Italy', 'England'];
const reverseArray = (arr) => {
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    console.log(element);
  }
};
reverseArray(countries);

// 2.7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const newCountries = ['turkey', 'germany', 'france', 'ıtaly', 'england'];
const capitalizeArray = () => {
  for (let index = 0; index < newCountries.length; index++) {
    const element = newCountries[index];
    const capitalizeArray = element.toUpperCase();
    console.log(capitalizeArray);
  }
};
capitalizeArray();

// 2.8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (item) => {
  countries.push(item);
  console.log(countries);
};
addItem('Mexico');

// 2.9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (item) => {
  const removeIndex = countries.indexOf(item);
  if (removeIndex !== -1) {
    countries.splice(removeIndex, 1);
    console.log(countries);
  }
};

// 2.10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (minRange, maxRange) => {
  let sumOfNumbers = 0;
  for (let index = minRange; index <= maxRange; index++) {
    sumOfNumbers = index + sumOfNumbers;
  }
  return sumOfNumbers;
};

console.log(sumOfNumbers(1, 10));

// 2.11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (minRange, maxRange) => {
  let sumOfOdds = 0;
  for (let index = minRange; index <= maxRange; index++) {
    if (index % 2 == 1) {
      sumOfOdds = index + sumOfOdds;
    }
  }
  return sumOfOdds;
};

console.log(sumOfOdds(1, 10));

// 2.12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (minRange, maxRange) => {
  let sumOfEven = 0;
  for (let index = minRange; index <= maxRange; index++) {
    if (index % 2 == 0) {
      sumOfEven = index + sumOfEven;
    }
  }
  return sumOfEven;
};

console.log(sumOfEven(1, 10));

// 2.13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (number) => {
  let counterEven = 0;
  let counterOdd = 0;

  for (let index = 0; index <= number; index++) {
    if (index % 2 == 0) {
      counterEven++;
    } else {
      counterOdd++;
    }
  }
  return [
    `The number of odds are ${counterOdd}`,
    `The number of evens are ${counterEven}`,
  ];
};

console.log(evensAndOdds(100));

// 2.14 Write a function which takes any number of arguments and return the sum of the arguments
const sumOfArgs = (...args) => {
  let totalArgs = 0;
  for (let index = 0; index < args.length; index++) {
    totalArgs = args[index] + totalArgs;
  }
  return totalArgs;
};

console.log(sumOfArgs(1, 2, 3, 4, 5));

// 2.15 Write a function which generates a randomUserIp.
const randomUserIp = () => {
  let randomIPNumbers = [];
  const randomNumber = () => Math.floor(Math.random() * 255);

  for (let index = 0; index < 4; index++) {
    const callRandomNumber = randomNumber();
    randomIPNumbers.push(callRandomNumber);
  }

  const randomIPNumbersWithSeperator = randomIPNumbers.join('.');
  return randomIPNumbersWithSeperator;
};
// console.log(randomUserIp());

// 2.16 Write a function which generates a randomMacAddress // bd:b2:79:e5:0c:7b
// TODO: I should complete this challange.
const randChars = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const randomMacAddress = () => {
  let randomMacAddresses = [];
  const randomNumber = () => Math.floor(Math.random() * randChars.length);

  for (let index = 0; index < 6; index++) {
    const callRandomNumber = randomNumber();
    const randomCharacter = randChars[callRandomNumber];
    randomMacAddresses.push(randomCharacter);
  }

  const randomMacAddressWithSeperator = randomMacAddresses.join(':');
  return randomMacAddressWithSeperator;
};

console.log(randomMacAddress());

// 2.17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number.
// The function return the hexadecimal number. // ee33df
const randomHexaNumberGenerator = () => {
  let hexNumbers = ['#'];
  const randomNumber = () => Math.floor(Math.random() * randChars.length);

  for (let index = 0; index < 6; index++) {
    const callRandomNumber = randomNumber();
    const randomCharacter = randChars[callRandomNumber];
    hexNumbers.push(randomCharacter);
  }

  const hexNumbersWithoutSeperator = hexNumbers.join('');
  return hexNumbersWithoutSeperator;
};
console.log(randomHexaNumberGenerator());

// 2.18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allChars = 'abcdefghijklmnopqrstuvwxyz';

const splitAllChars = allChars.split('');
console.log(splitAllChars);

const userIdGenerator = () => {};
