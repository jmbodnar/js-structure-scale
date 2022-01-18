// @ts-check

let Convert = (function () {
  function Constructor(weight, options = {}) {
    let settings = Object.assign(
      {
        units: "mg",
      },
      options
    );

    if (!["mg", "kg", "grams"].includes(settings.units)) {
      throw Error(
        `${settings.units} is an invalid. Unit must be mg, kg, or grams. Default is mg.`
      );
    }

    this.weight = weightToMg(weight, settings.units);
  }

  function weightToMg(weight, units) {
    switch (units) {
      case "grams":
        return weight * 1000;
      case "kg":
        return weight / (1000 * 1000);
      default:
        return weight;
    }
  }

  Constructor.prototype.addMg = function (n) {
    this.weight = this.weight + n;
    return this;
  };

  Constructor.prototype.addGrams = function (n) {
    this.weight = this.weight + n * 1000;
    return this;
  };

  Constructor.prototype.addKg = function (n) {
    this.weight = this.weight + n * 1000 * 1000;
    return this;
  };

  Constructor.prototype.inMg = function () {
    return this.weight;
  };

  Constructor.prototype.inGrams = function () {
    return this.weight / 1000;
  };

  Constructor.prototype.inKg = function () {
    return this.weight / 1000 / 1000;
  };

  return Constructor;
})();

const test1 = new Convert(4, {units: 'kg'});

export default Convert;
