// @ts-check

const Weight = (function () {
  const defaultUnits = "pound";

  function Constructor(weight) {
    this.weight = weight;
  }

  // Note that the name "Constructor" is arbitrary
  // Constructor.prototype object is accessible by any instance of the Weight object. Save memory with multiple
  // instances. And has access to this of currently called object; thus, this.weight is accessible
  Constructor.prototype.add = function (amount) {
    return (this.weight = this.weight + amount);
  };

  Constructor.prototype.subtract = function (amount) {
    return (this.weight = this.weight - amount);
  };

  Constructor.prototype.format = function (units) {
    return this.weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : defaultUnits,
    });
  };

  return Constructor;
})();

let weightA = new Weight(100); // Create a weight object, weightA
weightA.add(10); // Add 10 to weight, 110
const formattedWeightString = weightA.format(); // "110 lb"
