/**
 * Use the revealing module pattern to build a simple utility library (convert)
 * to allow one to convert a starting weight in grams, kilograms, or milligrams
 * to grams, kilograms, or milligrams.
 */

// IIFE returns object (reveals) internal functions for use with the library
const convert = (function () {
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
      throw Error(`Unit must be one of ${validUnits.join(", ")} `);
  }

  const fromUnits = {
    kg: "fromKilograms",
    kilogram: "fromKilograms",
    kilograms: "fromKilograms",
    gm: "fromGrams",
    gram: "fromGrams",
    grams: "fromGrams",
    mg: "fromMilligrams",
    milligram: "fromMilligrams",
    milligrams: "fromMilligrams",
  };

  function toGrams(mass, unit) {
    verifyUnit(unit);

    const conversions = {
      fromMilligrams: () => mass / 1000,
      fromGrams: () => mass,
      fromKilograms: () => mass * 1000,
    };

    return conversions[fromUnits[unit]]();
  }

  function toKilograms(mass, unit) {
    verifyUnit(unit);

    const conversions = {
      fromMilligrams: () => mass / Number("1e+6"),
      fromGrams: () => mass / 1000,
      fromKilograms: () => mass,
    };

    return conversions[fromUnits[unit]]();
  }

  function toMilligrams(mass, unit) {
    verifyUnit(unit);
    const conversions = {
      fromKilograms: () => mass * Number("1e+6"),
      fromMilligrams: () => mass,
      fromGrams: () => mass * 1000,
    };

    return conversions[fromUnits[unit]]();
  }

  return {
    toGrams,
    toKilograms,
    toMilligrams,
  };
})();

export default convert;
