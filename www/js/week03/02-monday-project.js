// @ts-check

const Time = (function () {
  function validateDate(date) {
    const checkedDate = new Date(date).toString();

    if (checkedDate === "Invalid Date") {
      throw Error(
        "Invalid datestring. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"
      );
    }
  }

  function Constructor(date) {
    validateDate(date);
    this.dateObject = new Date(date);
  }

  Constructor.prototype.date = function () {
    return this.dateObject;
  };

  Constructor.prototype.getWeekday = function () {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      this.dateObject
    );
  };

  Constructor.prototype.getMonth = function () {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      this.dateObject
    );
  };

  Constructor.prototype.addSeconds = function (seconds) {
    this.dateObject.setSeconds(this.dateObject.getSeconds() + seconds);
    return this;
  };

  Constructor.prototype.addMinutes = function (minutes) {
    this.dateObject.setMinutes(this.dateObject.getMinutes() + minutes);
    return this;
  };

  Constructor.prototype.addHours = function (hours) {
    this.dateObject.setHours(this.dateObject.getHours() + hours);
    return this;
  };

  Constructor.prototype.addDays = function (days) {
    this.dateObject.setDate(this.dateObject.getDate() + days);
    return this;
  };

  Constructor.prototype.addMonths = function (months) {
    this.dateObject.setMonth(this.dateObject.getMonth() + months);
    return this;
  };

  Constructor.prototype.addYears = function (years) {
    this.dateObject.setFullYear(this.dateObject.getFullYear() + years);
    return this;
  };

  return Constructor;
})();

export default Time;
