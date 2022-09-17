// DAY 3: EXERCISES
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 1
// 1.1 Declare firstName, lastName, country, city, age, isMarried,
// year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = 'Ali';
// let lastName = 'Yolalan';
// let country = 'Germany';
// let city = 'Berlin';
// let age = 27;
// let isMarried = false;
// console.log(
//   typeof firstName,
//   typeof lastName,
//   typeof country,
//   typeof city,
//   typeof age,
//   typeof isMarried
// );

// 1.2 Check if type of '10' is equal to 10
let numberTen = 10;
let numTenString = '10';
let isEqual = numberTen == numTenString;
console.log(isEqual);

// 1.3 Check if parseInt('9.8') is equal to 10
let numberFloatString = '9.8';
let isEqualFloat = numberTen == numberFloatString;
console.log(isEqualFloat);

// 1.4 Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 2
// 2.1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let triangleHeight = prompt('Üçgen yüksekliği giriniz.');
// let triangleHeightToNumber = parseInt(triangleHeight);

// let triangleBase = prompt('Üçgen tabanı giriniz.');
// let triangleBaseToNumber = parseInt(triangleBase);

// let trianlgeArea = 0.5 * triangleHeightToNumber * triangleBaseToNumber;
// console.log(trianlgeArea);

// 2.2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let triangleSideOne = prompt('Üçgen kenarı giriniz.');
// let stringToNumberOne = parseInt(triangleSideOne);

// let triangleSideTwo = prompt('Üçgen kenarı giriniz.');
// let stringToNumberTwo = parseInt(triangleSideTwo);

// let triangleSideThree = prompt('Üçgen kenarı giriniz.');
// let stringToNumberThree = parseInt(triangleSideThree);

// let trianglePerimeter =
//   stringToNumberOne + stringToNumberTwo + stringToNumberThree;
// console.log(trianglePerimeter);

// 2.3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let rectangleWidth = prompt('Dikdörtgen genişliği giriniz.');
// let rectangleWidthToNumber = parseInt(rectangleWidth);

// let rectangleHeight = prompt('Dikdörtgen yüksekliği giriniz.');
// let rectangleHeightToNumber = parseInt(rectangleHeight);

// let rectangleArea = rectangleWidthToNumber * rectangleHeightToNumber;
// console.log(rectangleArea);

// 2.4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const PI = 3.14;

// let circleRadius = prompt('Daire yarıçapı giriniz.');
// let circleRadiusToNumber = parseInt(circleRadius);

// let circleArea = PI * circleRadiusToNumber ** 2;
// console.log(circleArea);

// 2.5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let xIntercept;
// let yIntercept;
// let slope;

// 2.6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let xInterceptOne = 2;
// let yInterceptOne = 2;

// let xInterceptTwo = 6;
// let yInterceptTwo = 10;

// let slopeValue =
//   (yInterceptTwo - yInterceptOne) / (xInterceptTwo - xInterceptOne);

// console.log(slopeValue);

// 2.7 Compare the slope of above two questions.

// 2.8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xIntercept = -3;
let yIntercept = xIntercept ** 2 + 6 * xIntercept + 9;

console.log(yIntercept);

// 2.9 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let workingHour = prompt('Lütfen haftalık çalışma saati giriniz.');
// let workingHourToNumber = parseInt(workingHour);

// let ratePerHour = prompt('Lütfen saat başı ücreti giriniz.');
// let ratePerHourToNumber = parseInt(ratePerHour);

// let weeklyEarning = workingHourToNumber * ratePerHourToNumber;

// console.log(weeklyEarning);

// 2.10 If the length of your name is greater than 7 say, your name is long else say your name is short.
// console.log(
//   firstName.length > 7 ? 'Your name is long else say your name is short' : null
// );

// 2.11 Compare your first name length and your family name length and you should get this output.
// let firstName = 'AliHaydar';
// let lastName = 'Yolalan';

// let firstNameLength = firstName.length;
// let lastNameLength = lastName.length;
// let conditionalMessage = `Your first name, ${firstName} is longer than your family name, ${lastName}`;

// let isEqualEachOther =
//   firstNameLength > lastNameLength ? conditionalMessage : null;

// console.log(isEqualEachOther);

// 2.12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 27;
// let yourAge = 54;

// let olderThanYouMsg = `I am ${myAge - yourAge} years older than you.`;
// let youngerThanYouMsg = `I am ${yourAge - myAge} years younger than you.`;

// let isOlderThanYou = myAge > yourAge ? olderThanYouMsg : youngerThanYouMsg;
// console.log(isOlderThanYou);

// 2.13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// const currentYear = new Date().getFullYear();
// let getCustomerBirthYear = prompt('Lütfen doğum yılınızı giriniz.');
// let getCustomerBirthYearToNumber = parseInt(getCustomerBirthYear);

// let calcCustomerAge = currentYear - getCustomerBirthYearToNumber;
// let isEnoughToDrive =
//   calcCustomerAge > 18
//     ? `You can drive`
//     : `You are ${calcCustomerAge}. You will be allowed to drive after ${
//         18 - calcCustomerAge
//       } years.`;
// console.log(isEnoughToDrive);

// 2.14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let numberOfYear = prompt('Lütfen yıl sayısını giriniz.');
// let numberOfYearToNumber = parseInt(numberOfYear);

// let miliSecondsOfYear = 365 * 24 * 60 * 60 * 1000;
// let totalMiliSeconds = miliSecondsOfYear * numberOfYearToNumber;

// let dateMessage = `Enter number of years you live: ${numberOfYearToNumber} \nYou lived ${totalMiliSeconds} seconds.`;

// console.log(dateMessage);

// 2.15 Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// const newDate = new Date();

// let getCurrentYear = newDate.getFullYear();
// let getCurrentMonth = newDate.getMonth() + 1;
// let getCurrentDay = newDate.getDate();

// let getCurrentHour = newDate.getHours();
// let getCurrentMinute = newDate.getMinutes();

// let readableMonth =
//   getCurrentMonth < 10 ? '0' + getCurrentMonth : getCurrentMonth;
// let readableDay = getCurrentDay < 10 ? '0' + getCurrentDay : getCurrentDay;
// let readbleHour = getCurrentHour < 10 ? '0' + getCurrentHour : getCurrentHour;
// let readbleMinute =
//   getCurrentMinute < 10 ? '0' + getCurrentMinute : getCurrentMinute;

// let firsDateFormat = `${getCurrentYear}-${readableMonth}-${readableDay} ${readbleHour}:${readbleMinute}`;
// let secondDateFormat = `${readableDay}-${readableMonth}-${getCurrentYear} ${readbleHour}:${readbleMinute}`;
// let thirdDateFormat = `${readableDay}/${readableMonth}/${getCurrentYear} ${readbleHour}:${readbleMinute}`;

// console.log(thirdDateFormat);

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 3
// 3.1 Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// I solved this challlange on 2.15
