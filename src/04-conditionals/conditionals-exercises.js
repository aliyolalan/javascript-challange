// DAY 3: EXERCISES
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Exercise: Level 1

// Exercise: Level 2
// 2.1 Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let examGrade = prompt('Lütfen sınav notunuzu giriniz:');
// let examGradeToNumber = parseInt(examGrade);

// if (examGradeToNumber >= 80) {
//   console.log('A');
// } else if (examGradeToNumber < 80 && examGradeToNumber >= 70) {
//   console.log('B');
// } else if (examGradeToNumber < 70 && examGradeToNumber >= 60) {
//   console.log('C');
// } else if (examGradeToNumber < 60 && examGradeToNumber >= 50) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// 2.2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let inputMonth = prompt('Lütfen ay ismini giriniz:');

// if (
//   inputMonth == 'December' ||
//   inputMonth == 'January' ||
//   inputMonth == 'February'
// ) {
//   console.log('Winter');
// } else if (
//   inputMonth == 'September' ||
//   inputMonth == 'October' ||
//   inputMonth == 'November'
// ) {
//   console.log('Autumn');
// } else if (
//   inputMonth == 'June' ||
//   inputMonth == 'July' ||
//   inputMonth == 'August'
// ) {
//   console.log('Summer');
// } else if (
//   inputMonth == 'March' ||
//   inputMonth == 'April' ||
//   inputMonth == 'May'
// ) {
//   console.log('Spring');
// } else {
//   console.log('Geçersiz');
// }

// 2.3 Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.
// let userInputDay = prompt('Bugün günlerden ne?');
// let userInputDayToLowerCase = userInputDay.toLowerCase();

// switch (userInputDayToLowerCase) {
//   case 'pazartesi':
//     console.log('Bugün günlerden pazartesi.');
//     break;
//   case 'salı':
//     console.log('Bugün günlerden salı.');
//     break;
//   case 'çarşamba':
//     console.log('Bugün günlerden çarşamba.');
//     break;
//   case 'perşembe':
//     console.log('Bugün günlerden perşembe.');
//     break;
//   case 'cuma':
//     console.log('Bugün günlerden cuma.');
//     break;
//   case 'cumartesi':
//     console.log('Bugün günlerden cumartesi.');
//     break;
//   case 'pazar':
//     console.log('Bugün günlerden pazar.');
//     break;
//   default:
//     console.log('Geçersiz...');
//     break;
// }

// Exercises: Level 3
// 3.1 Write a program which tells the number of days in a month.
let userInputMonth = prompt('Lütfen bir ay giriniz.');
let userInputDayToLowerCase = userInputDay.toLowerCase();

switch (userInputDayToLowerCase) {
  case 'ocak':
    console.log('Bugün günlerden pazartesi.');
    break;
  case 'şubat':
    console.log('Bugün günlerden salı.');
    break;
  case 'mart':
    console.log('Bugün günlerden çarşamba.');
    break;
  case 'nisan':
    console.log('Bugün günlerden perşembe.');
    break;
  case 'mayıs':
    console.log('Bugün günlerden cuma.');
    break;
  case 'haziran':
    console.log('Bugün günlerden cumartesi.');
    break;
  case 'temmuz':
    console.log('Bugün günlerden pazar.');
    break;
  case 'ağustos':
    console.log('Bugün günlerden salı.');
    break;
  case 'eylül':
    console.log('Bugün günlerden çarşamba.');
    break;
  case 'ekim':
    console.log('Bugün günlerden perşembe.');
    break;
  case 'kasım':
    console.log('Bugün günlerden cuma.');
    break;
  case 'aralık':
    console.log('Bugün günlerden cumartesi.');
    break;
  default:
    console.log('Geçersiz...');
    break;
}
