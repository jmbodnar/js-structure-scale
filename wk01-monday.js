// @ts-check

const convert = (function () {
  function clearValue(value) {
    if (!Number.parseFloat(value)) {
      throw TypeError(`"${value}" is not a number`);
    }

    if (!Number.isFinite(Number.parseFloat(value))) {
      throw TypeError(`${value} is not finite`);
    }

    return Number.parseFloat(value);
  }

  function gramsToKilograms(value) {
    const grams = clearValue(value);
    const kg = grams / 1000;
    return kg;
  }

  function gramsToMilligrams(value) {
    const grams = clearValue(value);
    const mg = grams * 1000;
    return mg;
  }

  function kilogramsToGrams(value) {
    const kg = clearValue(value);
    const grams = kg * 1000;
    return grams;
  }

  function kilogramsToMilligrams(value) {
    const kg = clearValue(value);
    const mg = kg * 1000 * 1000;
    return mg;
  }

  function milligramsToGrams(value) {
    const mg = clearValue(value);
    const grams = mg / 1000;
    return grams;
  }

  function milligramsToKillograms(value) {
    const mg = clearValue(value);
    const kg = mg / (1000 * 1000);
    return kg;
  }

  return {
    gramsToKilograms,
    gramsToMilligrams,
    kilogramsToGrams,
    milligramsToGrams,
    milligramsToKillograms,
  };
})();

const start = "42";

const gToKg = convert.gramsToKilograms(start);
console.log(`${gToKg}kg`); // 42 Grams is 0.042 Kilograms

const gToMg = convert.gramsToMilligrams(start);
console.log(`${gToMg}mg`); // 42 Grams is 42000 Milligrams

const kgToG = convert.kilogramsToGrams(gToKg);
console.log(`${kgToG}g`); // 0.042 Kiligrams is 42 Grams

const mgToG = convert.milligramsToGrams(gToMg);
console.log(`${mgToG}g`); // 42000 Milligrams is 42 Grams

const mgToKg = convert.milligramsToKillograms(gToMg);
console.log(`${mgToKg}kg`); // 42000 Milligrams is  0.042 Kilograms
