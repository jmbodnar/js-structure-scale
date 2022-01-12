// @ts-check

let Weight = (function () {
  let defaultUnits = "pound";

  function Constructor(weight) {
    this.weight = weight;
  }

  Constructor.prototype.add = function (amount) {
    return (this.weight = this.weight + amount);
  };

  Constructor.prototype.subtract = function (amount) {
    return (this.weight = this.weight - amount);
  };

  Constructor.prototype.format = function (units) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    return this.weight.toLocaleString(undefined, {
      style: "unit",
      unit: units ? units : defaultUnits,
    });
  };

  return Constructor;
})();

let weightA = new Weight(100);
let weightB = new Weight(200);

console.log(weightA.weight);
console.log(weightB.weight);

console.log(weightA.add(10));
console.log(weightB.add(10));

console.log(weightA.weight);
console.log(weightB.weight);

console.log(weightA.format());
