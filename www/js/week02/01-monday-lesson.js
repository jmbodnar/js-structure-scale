// @ts-check

let Weight = (function () {
  // NOTE 3: Remove defaultUnits — replaced by this.settings.units
  // Default unit of weight
  // let defaultUnits = "pound";

  /**
   * The Constructor object
   * @param {Number} weight The starting weight
   */
  function Constructor(weight, settings = {}) {
    this.weight = weight;
    // NOTE 1: Add settings parameter for user-defined options/settings
    // this.settings = settings;
    this.settings = Object.assign(
      // Provide default settings here
      {
        units: "pound",
      },
      settings
    );
  }

  /**
   * Add an amount to a weight
   * @param {Number} amount The amount to add
   */
  Constructor.prototype.add = function (amount) {
    this.weight = this.weight + amount;
    return this;
  };

  /**
   * Subtract an amount from a weight
   * @param {Number} amount The amount to subtract
   */
  Constructor.prototype.subtract = function (amount) {
    this.weight = this.weight - amount;
    return this;
  };

  /**
   * Format a weight to a string
   * @param  {String} units  The weight units to use
   * @return {String}        The formatted weight
   */
  Constructor.prototype.format = function (units) {
    return this.weight.toLocaleString(undefined, {
      style: "unit",
      // NOTE 2: Use user-defined units, this.settings.units, not defaultUnits
      // unit: units ? units : defaultUnits,
      unit: units ? units : this.settings.units,
    });
  };

  // Export the constructor object
  return Constructor;
})();

// NOTE 4: Provide settings object with user-defined units option
let kg = new Weight(100, {
  units: "gram",
});

// NOTE 5: Calling kg.format() uses user-defined option for units
// 100 kg
const formatKg = kg.format();
console.log(formatKg);

export { Weight };
