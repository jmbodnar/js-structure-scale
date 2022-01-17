// @ts-check

let Convert = (function () {
  /**
   * The Constructor object
   * @param {Number} weight The weight
   */
  function Constructor(weight, settings = {}) {
    this.weight = weight;

    this.settings = Object.assign(
      // Provide defaults
      {
        units: "mg",
      },
      settings
    );
  }

  /**
   * Add milligrams to the weight
   * @param {Number} n The weight to add
   */
  Constructor.prototype.addMg = function (n) {
    this.weight = this.weight + n;
    return this;
  };

  /**
   * Add grams to the weight
   * @param {Number} n The weight to add
   */
  Constructor.prototype.addGrams = function (n) {
    this.weight = this.weight + n * 1000;
    return this;
  };

  /**
   * Add kilograms to the weight
   * @param {Number} n The weight to add
   */
  Constructor.prototype.addKg = function (n) {
    this.weight = this.weight + n * 1000 * 1000;
    return this;
  };

  /**
   * Get weight in milligrams
   * @return {Number} The weight in milligrams
   */
  Constructor.prototype.inMg = function () {
    return this.weight;
  };

  /**
   * Get weight in grams
   * @return {Number} The weight in grams
   */
  Constructor.prototype.inGrams = function () {
    return this.weight / 1000;
  };

  /**
   * Get weight in kilograms
   * @return {Number} The weight in kilograms
   */
  Constructor.prototype.inKg = function () {
    return this.weight / 1000 / 1000;
  };

  return Constructor;
})();

// Create a new instance in grams
let hummingbird = new Convert(4, {
  units: "grams",
});
console.dir(hummingbird);

// Create an instance with the default milligrams
let bumbleBee = new Convert(150);
console.dir(bumbleBee);

export default Convert;
