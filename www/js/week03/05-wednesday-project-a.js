// @ts-check

function Constructor(date = []) {
  if (!Array.isArray(date)) {
    date = [date];
  }

  this.dateObject = new Date(...date);
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

export default Constructor;

// import Time from "./week03/04-tuesday-project-updated.js";
// // Create a new Time() instance
// let halloween = new Constructor("October 31, 2021");
// let halloween2 = new Constructor([2021, 9, 31]);
// let now = new Constructor();
// console.log(halloween, halloween2, now);

// // Get details from the instance
// let date = halloween.date();
// let day = halloween.getWeekday();
// let month = halloween.getMonth();
// console.log(date, day, month);

// // Add some time, then check again
// halloween.addDays(3).addMonths(1).addYears(5);
// let newDate = halloween.date();
// let newDay = halloween.getWeekday();
// let newMonth = halloween.getMonth();
// console.log(newDate, newDay, newMonth);
