// @ts-check

const Weight = (function () {
  function Constructor(weight) {
    this.weight = weight;
  }

  Constructor.prototype.inKilograms = function () {
    return this.weight / 1000;
  };

  Constructor.prototype.inMilligrams = function () {
    return this.weight * 1000;
  };

  return Constructor;
})();

// const oneGram = new Weight(1);
// const kg = oneGram.inKilograms();
// const mg = oneGram.inMilligrams();
// console.log(
//   `${oneGram.weight} gram is one thousandth (${kg}) of a kilogram and ${mg} milligrams.`
// );
