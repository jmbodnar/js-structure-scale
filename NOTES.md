- [Library Patterns](#library-patterns)
  - [Object-Utility Pattern](#object-utility-pattern)
  - [Revealing Module Pattern](#revealing-module-pattern)
  - [Constructor Pattern](#constructor-pattern)
  - [Chaining Methods with the Constructor Pattern](#chaining-methods-with-the-constructor-pattern)

# Library Patterns

## Object-Utility Pattern

```js
let weight = {
  add: function (weight, amount) {
    return weight + amount;
  },

  subtract: function (weight, amount) {
    return weight - amount;
  },

  format: function (weight, amount) {
    return weight.toLocaleString(undefined, {
      style: "unit",
      unit: units,
    });
  },
};
```

## Revealing Module Pattern

## Constructor Pattern

## Chaining Methods with the Constructor Pattern

```js
let Weight = (function () {
  // Default unit of weight
  let defaultUnits = "pound";

  /**
   * The Constructor object
   * @param {Number} weight The starting weight
   */
  function Constructor(weight) {
    this.weight = weight;
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
      unit: units ? units : defaultUnits,
    });
  };

  // Export the constructor object
  return Constructor;
})();

let current = new Weight(100);

// returns "120 lb"
let formatted = current.add(5).add(5).add(10).format();

// returns 120
let stronger = current.weight;
```
