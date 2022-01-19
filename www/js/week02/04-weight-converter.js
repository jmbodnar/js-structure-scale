// @ts-check

const WeightConverter = (function () {
  function convertToGrams(weight, unit) {
    let gramWeight;

    switch (unit) {
      case "kilogram":
        gramWeight = weight * 1000;
        break;
      case "milligram":
        gramWeight = weight / 1000;
        break;
      default:
        gramWeight = weight;
        break;
    }

    return gramWeight;
  }

  function approveUnit(unit) {
    if (!["gram", "milligram", "kilogram"].includes(unit)) {
      throw Error(
        `${unit} is invalid. Value must be gram, milligram, or kilogram`
      );
    }
  }

  function Constructor(weight, options = {}) {
    const settings = Object.assign(
      {
        unit: "gram",
      },
      options
    );

    approveUnit(settings.unit);
    this.weight = convertToGrams(weight, settings.unit);
  }

  Constructor.prototype.inGrams = function () {
    return this.weight + ' g';
  };

  Constructor.prototype.inKilograms = function () {
    return (this.weight / 1000) + ' kg';
  };

  Constructor.prototype.inMilligrams = function () {
    return (this.weight * 1000) + ' mg';
  };

  Constructor.prototype.plus = function (weight, unit) {
    approveUnit(unit);
    const addWeight = convertToGrams(weight, unit);
    this.weight = this.weight + addWeight;
    return this;
  };

  Constructor.prototype.minus = function (weight, unit) {
    approveUnit(unit);
    const addWeight = convertToGrams(weight, unit);
    this.weight = this.weight - addWeight;
    return this;
  };

  return Constructor;
})();

const gramTest = new WeightConverter(1, { unit: "milligram" });
console.log(gramTest.plus(2, 'milligram').minus(8, 'milligram').inGrams());

export default WeightConverter;
