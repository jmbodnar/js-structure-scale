// @ts-check

/**
 * Using Date() constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - Create dates from strings
 * - Format dates
 * - create dates
 **/

// A date object for the current moment
let now = new Date();
console.log(now);

// A date object for Halloween
let halloween1 = new Date("October 31, 2021");
console.log(halloween1);

let halloween2 = new Date("2022, 10, 31, 11:00"); // Date months begin at zero, October is 9
console.log(halloween2);

let christmas = new Date("2022, 12, 25, 10:30"); // Christmas morning, 10:30 am, local time
console.log(christmas);

let birthday = new Date("1974, 12, 19, 8:23:12");
console.log(birthday);
