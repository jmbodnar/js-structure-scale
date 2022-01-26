// @ts-check

import Time from "./week03/05-wednesday-project-a.js";

const instanceA = new Time("April 11, 1975 10:30 AM", {
  locale: "de",
  dateStyle: "short",
  timeStyle: "short",
  month: "short",
  weekday: "short",
});
const instanceB = new Time("April 11, 1975 10:30 AM");

console.log(instanceA.date);
console.log(instanceA.getDay());
console.log(instanceA.getMonth());
console.log(instanceA.getDay());
console.log(instanceA.getTime());
console.log(instanceA.getDate());

console.log(instanceB.date);
console.log(instanceB.getDay());
console.log(instanceB.getMonth());
console.log(instanceB.getDay());
console.log(instanceB.getTime());
console.log(instanceB.getDate());
