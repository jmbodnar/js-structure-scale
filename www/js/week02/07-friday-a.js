/**
 * Update the previous lesson's code to use ES modules rather than the revealing module pattern
 **/

function getWeekday(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function getMonth(date) {
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
}

function addSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() + seconds);
}

function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);
}

function addHours(date, hours) {
  date.setHours(date.getHours() + hours);
}

function addDays(date, days) {
  date.setDate(date.getDate() + days);
}

function addMonths(date, months) {
  date.setMonth(date.getMonth() + months);
}

function addYears(date, years) {
  date.setFullYear(date.getFullYear() + years);
}

function sayHi() {
  // test helper
  console.log("HI");
}

export {
  getWeekday,
  getMonth,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
};

/* 
// In my main js file....

import * as fridayModule from "./week02/07-friday-a.js";

const randoDato = new Date("April 11, 1975");
const randoDatoWeekday = fridayModule.getWeekday(randoDato);

console.log(randoDatoWeekday); // Friday

*/
