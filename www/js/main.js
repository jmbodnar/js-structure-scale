import Time from "./week03/05-wednesday-project-a.js";

const instanceA = new Time("April 11, 1918 10:30 AM");
const instanceB = instanceA
  .addYears(5)
  .addYears(7)
  .addMonths(2)
  .addMonths(1)
  .addDays(2)
  .addDays(1)
  .addHours(4)
  .addMinutes(20)
  .addMinutes(2)
  .addSeconds(2)
  .addSeconds(34);

const instanceC = new Time("December 19, 1975 10:42 AM", {
  locale: "es",
  dateStyle: "short",
  timeStyle: "short",
  weekday: "short",
  month: "long",
});

console.log(instanceA.date.toString());
// Fri Apr 11 1975 10:30:00 GMT-0400 (Eastern Daylight Time) main.js:19:9

console.log(instanceB.date.toString());
// Tue Jul 14 1987 14:52:36 GMT-0400 (Eastern Daylight Time) main.js:20:9

console.log(instanceC.getDate()); // 1975/12/19
console.log(instanceC.getMonth()); // 十二月
console.log(instanceC.getTime()); // 10:42
