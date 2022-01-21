// @ts-check
import * as fridayModule from "./week02/07-friday-a.js";

const randoDato = new Date("April 11, 1975");
const randoDatoWeekday = fridayModule.getWeekday(randoDato);

console.log(randoDatoWeekday);
