// DAY 2: EXERCISES
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 1
// 1.1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challange = '30 Days Of JavaScript';

// 1.2 Print the string on the browser console using console.log()
console.log(challange);

// 1.3 Print the length of the string on the browser console using console.log()
console.log(challange.length);

// 1.4 Change all the string characters to capital letters using toUpperCase() method
let challangeUpperCase = challange.toUpperCase();
console.log(challangeUpperCase);

// 1.5 Change all the string characters to lowercase letters using toLowerCase() method
let challangeLowerCase = challange.toLowerCase();
console.log(challangeLowerCase);

// 1.6 Cut (slice) out the first word of the string using substr() or substring() method
let substrChallange = challange.substring(0, 3);
console.log(substrChallange);

// 1.7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let sliceChallange = challange.slice(3);
console.log(sliceChallange);

// 1.8 Check if the string contains a word Script using includes() method
let isInludeScript = challange.includes('Script');
console.log(isInludeScript);

// 1.9 Split the string into an array using split() method
let splitChallange = challange.split('');
console.log(splitChallange);

// 1.10 Split the string 30 Days Of JavaScript at the space using split() method
let splitChallangeWithSpace = challange.split(' ');
console.log(splitChallangeWithSpace);

// 1.11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let brandNames = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let splitWithComma = brandNames.split(', ');
console.log(splitWithComma);

// 1.12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let replaceChallange = challange.replace('JavaScript', 'Python');
console.log(replaceChallange);

// 1.13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let charAtChallange = challange.charAt(15);
console.log(charAtChallange);

// 1.14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let charCodeAtChallange = challange.charCodeAt(11);
console.log(charCodeAtChallange);

// 1.15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let indexOfChallange = challange.indexOf('30');
console.log(indexOfChallange);

// 1.16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let lastIndexOfChallange = challange.lastIndexOf('JavaScript');
console.log(lastIndexOfChallange);

// 1.17 Use indexOf to find the position of the first occurrence of the word because in the following sentence
// 'You cannot end a sentence with because because because is a conjunction'
let sentence =
  'You cannot end a sentence with because because because is a conjunction';
let firstBecauseInSentence = sentence.indexOf('because');
console.log(firstBecauseInSentence);

// 1.18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence
// 'You cannot end a sentence with because because because is a conjunction'
let lastBecauseInSentence = sentence.lastIndexOf('because');
console.log(lastBecauseInSentence);

// 1.19 Use search to find the position of the first occurrence of the word because in the following sentence
// 'You cannot end a sentence with because because because is a conjunction'
let searchBecauseInSentence = sentence.search('because');
console.log(searchBecauseInSentence);

// 1.20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challangeWithSpace = ' 30 Days Of JavaScript ';
let trimChallangeWithSpace = challangeWithSpace.trim();
console.log(trimChallangeWithSpace);

// 1.21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let startWithChallange = challange.startsWith('30');
console.log(startWithChallange);

// 1.22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let endsWithChallange = challange.endsWith('JavaScript');
console.log(endsWithChallange);

// 1.23 Use match() method to find all the a’s in 30 Days Of JavaScript
let patternChar = /a/gi;
let matchCharInChallange = challange.match(patternChar);
console.log(matchCharInChallange);

// 1.24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstSentence = '30 Days of';
let space = ' ';
let secondSentence = 'JavaScript';
let concatSentences = firstSentence.concat(space, secondSentence);
console.log(concatSentences);

// 1.25 Use repeat() method to print 30 Days Of JavaScript 2 times
let repeatChallangeTwoTimes = challange.repeat(2);
console.log(repeatChallangeTwoTimes);

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 2
// 2.1 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let sentenceTwo =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(sentenceTwo);

// 2.2 Using console.log() print out the following quote by Mother Teresa:
let sentenceThree =
  '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';
console.log(sentenceThree);

// 2.3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numberTenWithString = '10';
let numberTen = 10;
let isEqualNumbers = numberTenWithString == numberTen;
console.log(isEqualNumbers); // True

// 2.4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatNumber = '9.8';
let parseFloatNumber = parseFloat(floatNumber);
let isEqualToTen = parseFloatNumber == numberTen;
console.log(isEqualToTen); // False

// 2.5 Check if 'on' is found in both python and jargon
let pythonWord = 'python';
let jargonWord = 'jargon';
let includedWord = 'on';
let isIncludePython = pythonWord.includes(includedWord);
let isIncludeJargon = jargonWord.includes(includedWord);
console.log(isIncludePython, isIncludeJargon);

// 2.6 I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargonSentence = 'I hope this course is not full of jargon.';
let isIncludeJargonWord = jargonSentence.includes(jargonWord);
console.log(isIncludeJargonWord);

// 2.7 Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.random() * 101;
let floatToInteger = parseInt(randomNumber);
console.log(floatToInteger);

// 2.8 Generate a random number between 50 and 100 inclusively.
let randomNumberTwo = Math.random() * 50 + 50;
let floatToIntegerTwo = parseInt(randomNumberTwo);
console.log(floatToIntegerTwo);

// 2.9 Generate a random number between 0 and 255 inclusively.
let randomNumberThree = Math.random() * 255 + 1;
let floatToIntegerThree = parseInt(randomNumberThree);
console.log(floatToIntegerThree);

// 2.10 Access the 'JavaScript' string characters using a random number.
let word = 'JavaScript';
let lengthOfWord = word.length;
let randomNumberWithLenght = Math.random() * lengthOfWord;
let indexOfWord = word.charAt(randomNumberWithLenght, 1);
console.log(indexOfWord);

// 2.11 Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let escapeCharacters =
  '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n';
console.log(escapeCharacters);

// 2.12 Use substr to slice out the phrase because because because from the following sentence
// 'You cannot end a sentence with because because because is a conjunction'
// TODO: This challange is not solved. Look at later
let sentenceFour =
  'You cannot end a sentence with because because because is a conjunction';
let indexOfBecause = sentenceFour.indexOf('because');
let lengthOfBecause = 7;
let substrBecauseInSentence = sentenceFour.substr(
  indexOfBecause,
  lengthOfBecause
);

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 3
// 3.1 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.
let loveSentence =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let patternLove = /love/gi;
let numberOfRepeat = loveSentence.match(patternLove);
console.log(numberOfRepeat.length); // 3

// 3.2 Use match() to count the number of all because in the following sentence
// 'You cannot end a sentence with because because because is a conjunction'
let becauseSentence =
  'You cannot end a sentence with because because because is a conjunction';
let patternBecause = /because/gi;
let numberOfBecause = becauseSentence.match(patternBecause);
console.log(numberOfBecause.length); // 3

// 3.3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentenceFive =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let patternLetter = /([^a-z0-9 ._-]+)/gi;
let cleanSentence = sentenceFive.replace(patternLetter, '');
console.log(cleanSentence);

// 3.4 Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const monthlySalary = 5000;
const annualBonus = 10000;
const onlineCoursePerMonth = 15000;
let moneySentence = `He earns ${monthlySalary} euro from salary per month, ${annualBonus} euro annual bonus, ${onlineCoursePerMonth} euro online courses per month.`;
let totalIncome = `She earns ${
  (monthlySalary + onlineCoursePerMonth) * 12 + annualBonus
} euro per year`;
console.log(totalIncome);
