// @ts-check

import { Weight as FridayWeight } from "./week01/03-friday.js";

const test = new FridayWeight(1)
  .addMilligrams(1)
  .addKilograms(1)
  .addGrams(1)
  .format();
console.log(test); // 1,002.001 g

const hummingbird = new FridayWeight(4);
hummingbird.addMilligrams(150).addGrams(1);

console.log(hummingbird);
