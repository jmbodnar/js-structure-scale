// @ts-check

import { getWeekday } from "./week02/07-friday-a.js";

const bday = new Date("April 11, 1975");
const bdayWeekday = getWeekday(bday);
console.log(bdayWeekday);
