// @ts-check

import Time from "./week03/05-wednesday-project-a.js";

const instanceA = new Time("April 11, 1975 10:30 AM");
const instanceB = new Time("December 19, 1974 10:30 AM");

console.log(instanceA.dateObject);
console.log(instanceA.getWeekday());
console.log(instanceA.getMonth());
console.log(instanceA.getDate());
console.log(instanceA.getTime());

console.log(instanceB.dateObject);
console.log(instanceB.getWeekday());
console.log(instanceB.getMonth());
console.log(instanceB.getDate());
console.log(instanceB.getTime());
