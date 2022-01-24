// @ts-check

import Time from "./week03/02-monday-project.js";

// Create a new Time() instance
let halloween = new Time("October 31, 2021");

// This should also work
let halloween2 = new Time(2021, 9, 31);

// Get the date object
let date = halloween.date();
console.log(date);

// returns "Sunday"
let day = halloween.getWeekday();
console.log(day);

// returns "October"
let month = halloween.getMonth();
console.log(month);

// Add some time
halloween.addDays(3).addMonths(1).addYears(5);

// returns "Thursday"
let newDay = halloween.getWeekday();
console.log(newDay);

// returns "December"
let newMonth = halloween.getMonth();
console.log(newMonth);

// // import Time from "./week03/03-monday-project-class.js";
