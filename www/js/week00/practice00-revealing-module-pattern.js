/**
 * Use the revealing module pattern to build a simple utility library (convert)
 * to allow one to convert a starting weight in grams, kilograms, or milligrams
 * to grams, kilograms, or milligrams.
 */

// IIFE returns object (reveals) internal functions for use with the library
const convert = (function () {
  // Internal helper
  function verifyUnit(unit) {
    const validUnits = [
      "gram",
      "grams",
      "gm",
      "kilogram",
      "kilograms",
      "kg",
      "milligram",
      "milligrams",
      "mg",
    ];

    if (!validUnits.includes(unit))
      throw Error(`Invalid Unit: ${unit}. Must be ${validUnits.toString()} `);
  }

  function toGrams(mass, unit) {
    verifyUnit(unit);
    let grams;

    switch (unit) {
      case "kilogram":
      case "kilograms":
      case "kg":
        grams = mass / 1000;
        break;
      case "milligram":
      case "milligrams":
      case "mg":
        grams = mass * 1000;
        break;
      default:
        grams = mass;
    }

    return grams;
  }

  function toKilograms(mass, unit) {
    verifyUnit(unit);
    let kilograms;

    // ...

    return kilograms;
  }

  function toMilligrams(mass, unit) {
    verifyUnit(unit);
    let milligrams;

    // ...

    return milligrams;
  }

  return {
    toGrams,
    // toKilograms,
    // toMilligrams,
  };
})();

export default convert;

let testA = convert.toGrams(1, "kilogramss");
console.log(testA);
