// @ts-check

import Time from "./week03/05-wednesday-project-a.js";

const instanceA = new Time("April 11, 1975 10:30 AM");
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

console.log(instanceA.date.toString());
console.log(instanceB.date.toString());
