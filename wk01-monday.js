const convert = (function () {
  function confirmNumber(value) {
    if (typeof value !== 'number') {
      throw TypeError('Value must be a number')
    }

    if (!isFinite(value)) {
      throw TypeError('Value must be a number')
    }
  }

  function gramsToKilograms(grams) {
    confirmNumber(grams)
    const kg = grams / 1000
    return kg
  }

  function gramsToMilligrams(grams) {
    confirmNumber(grams)
    const mg = grams * 1000
    return mg
  }

  function kilogramsToGrams(kg) {
    confirmNumber(kg)
    const grams = kg * 1000
    return grams
  }

  function kilogramsToMilligrams(kg) {
    confirmNumber(kg)
    const mg = kg * 1000 * 1000
    return mg
  }

  function milligramsToGrams(mg) {
    confirmNumber(mg)
    const grams = mg / 1000
    return grams
  }

  function milligramsToKillograms(mg) {
    confirmNumber(mg)
    const kg = mg / (1000 * 1000)
    return kg
  }

  return {
    gramsToKilograms,
    gramsToMilligrams,
    kilogramsToGrams,
    milligramsToGrams,
    milligramsToKillograms,
  }
})()

const start = 42

const gToKg = convert.gramsToKilograms(start)
console.log(`${start} Grams is ${gToKg} Kilograms `) // 42 Grams is 0.042 Kilograms

const gToMg = convert.gramsToMilligrams(start)
console.log(`${start} Grams is ${gToMg} Milligrams`) // 42 Grams is 42000 Milligrams

const kgToG = convert.kilogramsToGrams(gToKg)
console.log(`${gToKg} Kiligrams is ${kgToG} Grams`) // 0.042 Kiligrams is 42 Grams

const mgToG = convert.milligramsToGrams(gToMg)
console.log(`${gToMg} Milligrams is ${mgToG} Grams`) // 42000 Milligrams is 42 Grams

const mgToKg = convert.milligramsToKillograms(gToMg)
console.log(`${gToMg} Milligrams is  ${mgToKg} Kilograms`) // 42000 Milligrams is  0.042 Kilograms
