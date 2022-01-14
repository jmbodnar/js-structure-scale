// @ts-check

const Weight = (function () {
  const defaultUnits = "gram";

  function Constructor(weight) {
    return (this.weight = weight);
  }

  Constructor.prototype.inKilograms = function () {
    return this.weight / 1000;
  };

  Constructor.prototype.inMilligrams = function () {
    return this.weight * 1000;
  };

  Constructor.prototype.addGrams = function (grams) {
    this.weight = this.weight + grams;
    return this;
  };

  Constructor.prototype.addMilligrams = function (milligrams) {
    this.weight = this.weight + milligrams / 1000;
    return this;
  };

  Constructor.prototype.addGrams = function (grams) {
    this.weight = this.weight + grams;
    return this;
  };

  Constructor.prototype.addKilograms = function (kilograms) {
    this.weight = this.weight + kilograms * 1000;
    return this;
  };

  Constructor.prototype.format = function (units) {
    return this.weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : defaultUnits,
    });
  };

  return Constructor;
})();

const test = new Weight(1).addMilligrams(1).addKilograms(1).addGrams(1).format();
console.log(test); // 1,002.001 g
