- [Library Patterns](#library-patterns)
  - [Object-Utility Pattern](#object-utility-pattern)
  - [Revealing Module Pattern](#revealing-module-pattern)
  - [Constructor Pattern](#constructor-pattern)
  - [Chaining Methods with the Constructor Pattern](#chaining-methods-with-the-constructor-pattern)

# Library Patterns

## Object-Utility Pattern

```js
let weight = {
  /**
   * Add an amount to a weight
   * @param {Number} weight The starting weight
   * @param {Number} amount The amount to add
   */
  add: function (weight, amount) {
    return weight + amount;
  },

  /**
   * Subtract an amount from a weight
   * @param {Number} weight The starting weight
   * @param {Number} amount The amount to subtract
   */
  subtract: function (weight, amount) {
    return weight - amount;
  },

  /**
   * Format a weight to a string
   * @param  {Number} weight The weight to format
   * @param  {String} units  The weight units to use
   * @return {String}        The formatted weight
   */
  format: function (weight, units) {
    return weight.toLocaleString(undefined, {
      style: "unit",
      unit: units,
    });
  },
};

// Current weight
let current = 100;

// Updated weight
// returns 105
let gotStronger = weight.add(current, 5);

// Formatted weight
// returns "105 lb" in the United States
let formatted = weight.format(gotStronger, "pound");
```

## Revealing Module Pattern

```js
let weight = (function () {
  // Default unit of weight
  let defaultUnits = "pound";

  /**
   * Add an amount to a weight
   * @param {Number} weight The starting weight
   * @param {Number} amount The amount to add
   */
  function add(weight, amount) {
    return weight + amount;
  }

  /**
   * Subtract an amount from a weight
   * @param {Number} weight The starting weight
   * @param {Number} amount The amount to subtract
   */
  function subtract(weight, amount) {
    return weight - amount;
  }

  /**
   * Format a weight to a string
   * @param  {Number} weight The weight to format
   * @param  {String} units  The weight units to use
   * @return {String}        The formatted weight
   */
  function format(weight, units) {
    return weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : defaultUnits,
    });
  }

  // Export public methods
  return { add, subtract, format };
})();

// returns "100 lb"
let formatted = weight.format(100);

// returns undefined
let units = weight.defaultUnits;
```

## Constructor Pattern

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
  };

  /**
   * Subtract an amount from a weight
   * @param {Number} amount The amount to subtract
   */
  Constructor.prototype.subtract = function (amount) {
    this.weight = this.weight - amount;
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

// Create a new instance
let current = new Weight(100);

// Add 5 to it
current.add(5);

// Get a formatted string
// returns "105 lb"
let formatted = current.format();
```

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

## Constructor with Settings, Options and Chaining

```js

```
