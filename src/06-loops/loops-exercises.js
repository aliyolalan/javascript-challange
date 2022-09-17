const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// // Exercises 1
// // ------------------------------------------------------------------------------------------------------
// // 1.1 Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// // 1.2 Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let indexTwo = 10; indexTwo > 0; indexTwo--) {
//   console.log(indexTwo);
// }

// // 1.3 Iterate 0 to n using for loop
// for (let indexThree = 0; indexThree < 20; indexThree++) {
//   console.log(indexThree);
// }

// // 1.4 Write a loop that makes the following pattern using console.log():
// // #
// // ##
// // ###
// // ####
// // #####
// // ######
// // #######

// let hashTag = '';

// for (let index = 1; index <= 7; index++) {
//   for (let indexTwo = 0; indexTwo < index; indexTwo++) {
//     hashTag += '#';
//   }
//   hashTag += '\n';
// }

// console.log(hashTag);

// // 1.5 Use loop to print the following pattern:
// // 0 x 0 = 0
// // 1 x 1 = 1
// // 2 x 2 = 4
// // 3 x 3 = 9
// // 4 x 4 = 16
// // 5 x 5 = 25
// // 6 x 6 = 36
// // 7 x 7 = 49
// // 8 x 8 = 64
// // 9 x 9 = 81
// // 10 x 10 = 100

// for (let index = 0; index <= 10; index++) {
//   const element = `${index} * ${index} = ${index * index}`;
//   console.log(element);
// }

// // 1.6 Using loop print the following pattern
// // i    i^2   i^3
// // 0    0     0
// // 1    1     1
// // 2    4     8
// // 3    9     27
// // 4    16    64
// // 5    25    125
// // 6    36    216
// // 7    49    343
// // 8    64    512
// // 9    81    729
// // 10   100   1000

// for (let index = 0; index <= 10; index++) {
//   const element = `${index} ${index ** 2} ${index ** 3}`;
//   console.log(element);
// }

// // 1.7 Use for loop to iterate from 0 to 100 and print only even numbers
// for (let index = 0; index <= 100; index++) {
//   const isEven = index % 2 == 0;
//   if (isEven) {
//     console.log(index);
//   }
// }

// // 1.8 Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let index = 0; index <= 100; index++) {
//   const isOdd = index % 2 == 1;
//   if (isOdd) {
//     console.log(index);
//   }
// }

// // 1.9 Use for loop to iterate from 0 to 100 and print only prime numbers
// let counterNum = 0;

// for (let indexOne = 2; indexOne <= 100; indexOne++) {
//   for (let index = 1; index < indexOne; index++) {
//     if (indexOne % index == 0) {
//       counterNum++;
//     }
//   }

//   if (counterNum == 2) {
//     console.log(indexOne);
//     counterNum = 0;
//   }
// }

// // 1.10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// // The sum of all numbers from 0 to 100 is 5050.
// let sumOfNumbers = 0;

// for (let index = 0; index <= 100; index++) {
//   sumOfNumbers = index + sumOfNumbers;
// }

// console.log(sumOfNumbers);

// // 1.11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// // The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// let oddNumberSum = 0;
// let evenNumberSum = 0;
// for (let index = 0; index <= 100; index++) {
//   if (index % 2 == 0) {
//     evenNumberSum = index + evenNumberSum;
//   } else {
//     oddNumberSum = index + oddNumberSum;
//   }
// }
// console.log(oddNumberSum, evenNumberSum);

// // 1.12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// // Print sum of evens and sum of odds as array
// let oddNumberSum = 0;
// let evenNumberSum = 0;
// let newArr = [];

// for (let index = 0; index <= 100; index++) {
//   if (index % 2 == 0) {
//     evenNumberSum = index + evenNumberSum;
//   } else {
//     oddNumberSum = index + oddNumberSum;
//   }
// }
// newArr.push(evenNumberSum, oddNumberSum);
// console.log(newArr);

// // 1.13 Develop a small script which generate array of 5 random numbers
// const newArr = [];
// for (let index = 0; index < 5; index++) {
//   const randomNumber = Math.random() * 10;
//   const randNumToFloor = Math.floor(randomNumber);
//   newArr.push(randNumToFloor);
// }
// console.log(newArr);

// // 1.14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
// const newArr = [];
// for (let index = 0; index < 5; index++) {
//   const randomNumber = Math.random() * 100;
//   const randNumToFloor = Math.floor(randomNumber);

//   if (newArr.indexOf(randNumToFloor) === -1) {
//     newArr.push(randNumToFloor);
//   }
// }
// console.log(newArr);

// // 1.15 Develop a small script which generate a six characters random id:
// const charOfAlphabet = 'abcdefghijklmnopqrstuvwxyz';
// const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const stringToArr = charOfAlphabet.split('');
// const allCharacters = allNumbers.concat(stringToArr);

// const newArr = [];

// for (let index = 0; index < 6; index++) {
//   const randomNumber = Math.random() * allCharacters.length;
//   const randNumToFloor = Math.floor(randomNumber);
//   const element = allCharacters[randNumToFloor];
//   newArr.push(element);
// }

// const arrToString = newArr.join('');
// console.log(arrToString);

// Exercises 2
// ------------------------------------------------------------------------------------------------------
// // 2.1 Develop a small script which generate any number of characters random id:
// const randomIdLength = Math.floor(Math.random() * 50);

// const charOfAlphabet = 'abcdefghijklmnopqrstuvwxyz';
// const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const stringToArr = charOfAlphabet.split('');
// const allCharacters = allNumbers.concat(stringToArr);

// const newArr = [];

// for (let index = 0; index < randomIdLength; index++) {
//   const randomNumber = Math.random() * allCharacters.length;
//   const randNumToFloor = Math.floor(randomNumber);
//   const element = allCharacters[randNumToFloor];
//   newArr.push(element);
// }

// const arrToString = newArr.join('');
// console.log(arrToString);

// // 2.2 Write a script which generates a random hexadecimal number.
// const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
// const hashTag = '#';
// const newArr = [];

// for (let index = 0; index < 6; index++) {
//   const randomNumber = Math.floor(Math.random() * hexNumbers.length);
//   const element = hexNumbers[randomNumber];
//   newArr.push(element);
// }

// const joinString = newArr.join('');
// const randomColor = hashTag + joinString;
// console.log(randomColor);

// // 2.3 Write a script which generates a random rgb color number.
// const newArr = [];

// for (let index = 0; index < 3; index++) {
//   const randomNumberOfRGB = Math.floor(Math.random() * 255);
//   newArr.push(randomNumberOfRGB);
// }

// const RGBColorNumber = `rgb(${newArr[0]}, ${newArr[1]}, ${newArr[2]})`;
// console.log(RGBColorNumber);

// // 2.4 Using the above countries array, create the following new array.
// const newArr = [];
// for (const country of countries) {
//   newArr.push(country.toUpperCase());
// }
// console.log(newArr);

// // 2.5 Using the above countries array, create an array for countries length'.
// const newArr = [];
// for (const country of countries) {
//   newArr.push(country.length);
// }
// console.log(newArr);

// // 2.6 Use the countries array to create the following array of arrays:
// // [
// //   ['Albania', 'ALB', 7],
// //   ['Bolivia', 'BOL', 7],
// //   ['Canada', 'CAN', 6],
// //   ['Denmark', 'DEN', 7],
// //   ['Ethiopia', 'ETH', 8],
// //   ['Finland', 'FIN', 7],
// //   ['Germany', 'GER', 7],
// //   ['Hungary', 'HUN', 7],
// //   ['Ireland', 'IRE', 7],
// //   ['Iceland', 'ICE', 7],
// //   ['Japan', 'JAP', 5],
// //   ['Kenya', 'KEN', 5]
// // ]
// const newArr = [];
// for (const country of countries) {
//   const countryArr = [country];
//   const sliceCountry = country.slice(0, 3);
//   const lengthOfCountry = country.length;

//   countryArr.push(sliceCountry.toUpperCase());
//   countryArr.push(lengthOfCountry);

//   newArr.push(countryArr);
// }
// console.log(newArr);

// // 2.7 In above countries array, check if there is a country or countries containing the word 'land'.
// // If there are countries containing 'land', print it as array.
// //If there is no country containing the word 'land', print 'All these countries are without land'.
// const includeLandArr = [];
// const countryWithoutLand = [];

// for (const country of countries) {
//   if (country.indexOf('land') !== -1) {
//     includeLandArr.push(country);
//   } else {
//     countryWithoutLand.push(country);
//   }
// }
// console.log(includeLandArr, countryWithoutLand);

// // 2.8 In above countries array, check if there is a country or countries end with a substring 'ia'.
// // If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// const countryWithIa = [];
// const countryWithoutIa = [];

// for (const country of countries) {
//   if (country.endsWith('ia')) {
//     countryWithIa.push(country);
//   } else {
//     countryWithoutIa.push(country);
//   }
// }

// console.log(countryWithIa, countryWithoutIa);

// // 2.9 Using the above countries array, find the country containing the biggest number of characters.
// let maxLenght = countries[0].length;

// for (let index = 0; index < countries.length; index++) {
//   if (countries[index].length > maxLenght) {
//     maxLenght = countries[index].length;
//   }
// }

// console.log(maxLenght); // Ethiopia

// // 2.10 Using the above countries array, find the country containing only 5 characters.
// let fiveCharacter = [];

// for (const country of countries) {
//   if (country.length == 5) {
//     fiveCharacter.push(country);
//   }
// }

// console.log(fiveCharacter);

// // 2.11 Find the longest word in the webTechs array
// let longestWord = webTechs[0].length;

// for (const webTech of webTechs) {
//   if (longestWord < webTech.length) {
//     longestWord = webTech.length;
//   }
// }

// console.log(longestWord);

// // 2.12 Use the webTechs array to create the following array of arrays:
// // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// let newArr = [];

// for (const webTech of webTechs) {
//   const webTechArr = [webTech];
//   const lengthOfTech = webTech.length;

//   webTechArr.push(lengthOfTech);
//   newArr.push(webTechArr);
// }

// console.log(newArr);

// // 2.13 An application created using MongoDB, Express, React and Node is called a MERN stack app.
// // Create the acronym MERN by using the array mernStack
// let newArr = [];

// for (const item of mernStack) {
//   const firstCharacter = item.slice(0, 1);
//   newArr.push(firstCharacter);
// }

// const joinMernStack = newArr.join('');
// console.log(joinMernStack);

// // 2.14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// // using a for loop or for of loop and print out the items.

// const finalArr = webTechs.concat(
//   mernStack.filter((item) => webTechs.indexOf(item) < 0)
// );

// for (let index = 0; index < finalArr.length; index++) {
//   const element = finalArr[index];
//   console.log(element);
// }

// 2.15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// const fruits = ['banana', 'orange', 'mango', 'lemon'];

// for (let index = fruits.length - 1; index >= 0; index--) {
//   const element = fruits[index];
//   console.log(element);
// }

// // 2.16 Print all the elements of array as shown below.
// FIXME: I couldn't solve this problem.
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];

// let finalArr = [];
// let frontEnd = [];

// for (let index = 0; index < fullStack.length; index++) {
//   finalArr = fullStack[index].concat(fullStack[index]);
// }

// console.log(finalArr);

// Exercises 2
// ------------------------------------------------------------------------------------------------------
// // 3.1 Copy countries array(Avoid mutation)
// const newArr = [];
// for (let index = 0; index < countries.length; index++) {
//   newArr.push(countries[index]);
// }

// console.log(newArr);

// // 3.2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// let sortedCountries = [];
// const newArr = [];

// for (let index = 0; index < countries.length; index++) {
//   const element = countries[index];
//   newArr.push(element);
// }

// sortedCountries = newArr.sort();
// console.log(sortedCountries);

// // 3.3 Sort the webTechs array and mernStack array
// const newMernStack = [];
// let sortedMernStack = [];
// for (let index = 0; index < mernStack.length; index++) {
//   const element = mernStack[index];
//   newMernStack.push(element);
// }
// sortedMernStack = newMernStack.sort();
// console.log(sortedMernStack);

// const newWebTechs = [];
// let sortedWebTechs = [];
// for (let index = 0; index < webTechs.length; index++) {
//   const element = webTechs[index];
//   newWebTechs.push(element);
// }
// sortedWebTechs = newWebTechs.sort();
// console.log(sortedWebTechs);

// // 3.4 Extract all the countries contain the word 'land' from the countries array and print it as array
// const arrWithLand = [];
// for (let index = 0; index < countries.length; index++) {
//   if (countries[index].indexOf('land') == -1) {
//     const element = countries[index];
//     arrWithLand.push(element);
//   }
// }
// console.log(arrWithLand);

// // 3.5 Find the country containing the hightest number of characters in the countries array
// let maxLength = countries[0].length;
// for (let index = 0; index < countries.length; index++) {
//   const element = countries[index].length;
//   if (maxLength < element) {
//     maxLength = element;
//   }
// }
// console.log(maxLength);

// 3.6 Extract all the countries contain the word 'land' from the countries array and print it as array
// This is same challange on 3.4

// // 3.7 Extract all the countries containing only four characters from the countries array and print it as array
// let fourCharCountries = [];
// for (let index = 0; index < countries.length; index++) {
//   if (countries[index].length == 4) {
//     const element = countries[index];
//     fourCharCountries.push(element);
//   }
// }
// console.log(fourCharCountries);

// // 3.8 Extract all the countries containing two or more words from the countries array and print it as array
// let wordMoreThanOne = [];
// for (const country of countries) {
//   if (country.indexOf(' ') !== -1) {
//     wordMoreThanOne.push(country);
//   }
// }
// console.log(wordMoreThanOne);

// // 3.9 Reverse the countries array and capitalize each country and stored it as an array
// const newCountries = [];
// for (let index = countries.length - 1; index > 0; index--) {
//   const element = countries[index];
//   newCountries.push(element);
// }
// console.log(newCountries);
