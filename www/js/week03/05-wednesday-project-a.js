/**
 * Time Constructor function, immutable instances
 *
 * @param {Array} date      Set date with string, object, or array of arguments
 * @param {Object} options  Override default settings with user-defined options
 */
function Constructor(date = [], options = {}) {
  if (!Array.isArray(date)) {
    date = [date];
  }

  const _settings = Object.assign(
    {
      locale: "en-US",
      dateStyle: "full",
      timeStyle: "full",
      weekday: "long",
      month: "long",
    },
    options
  );

  Object.freeze(_settings);

  Object.defineProperties(this, {
    date: {
      value: new Date(...date),
    },
    _settings: { value: _settings },
  });
}

Constructor.prototype.getDay = function () {
  return new Intl.DateTimeFormat(this._settings.locale, {
    weekday: this._settings.weekday,
  }).format(this.date);
};

Constructor.prototype.getMonth = function () {
  return new Intl.DateTimeFormat(this._settings.locale, {
    month: this._settings.month,
  }).format(this.date);
};

Constructor.prototype.getTime = function () {
  return new Intl.DateTimeFormat(this._settings.locale, {
    timeStyle: this._settings.timeStyle,
  }).format(this.date);
};

Constructor.prototype.getDate = function () {
  return new Intl.DateTimeFormat(this._settings.locale, {
    dateStyle: this._settings.dateStyle,
  }).format(this.date);
};

Constructor.prototype.addSeconds = function (seconds) {
  const newSeconds = this.date.getSeconds() + seconds;
  const newDate = new Date(this.date);
  newDate.setSeconds(newSeconds);
  return new Constructor(newDate, this._settings);
};

Constructor.prototype.addMinutes = function (minutes) {
  const newMinutes = this.date.getMinutes() + minutes;
  const newDate = new Date(this.date);
  newDate.setMinutes(newMinutes);
  return new Constructor(newDate, this._settings);
};

Constructor.prototype.addHours = function (hours) {
  const newHours = this.date.getHours() + hours;
  const newDate = new Date(this.date);
  newDate.setHours(newHours);
  return new Constructor(newDate, this._settings);
};

Constructor.prototype.addDays = function (days) {
  const newDays = this.date.getDay() + days;
  const newDate = new Date(this.date);
  newDate.setDate(newDays);
  return new Constructor(newDate, this._settings);
};

Constructor.prototype.addMonths = function (months) {
  const newMonths = this.date.getMonth() + months;
  const newDate = new Date(this.date);
  newDate.setMonth(newMonths);
  return new Constructor(newDate, this._settings);
};

Constructor.prototype.addYears = function (years) {
  const newYears = this.date.getFullYear() + years;
  const newDate = new Date(this.date);
  newDate.setFullYear(newYears);
  return new Constructor(newDate, this._settings);
};

export default Constructor;

/* // Imported and output in main.js
import Time from "./week03/05-wednesday-project-a.js";

const instanceA = new Time("April 11, 1918 10:30 AM");
const instanceB = instanceA
  .addYears(5)
  .addYears(7)
  .addMonths(2)
  .addMonths(1)
  .addDays(2)
  .addDays(1)
  .addHours(4)
  .addMinutes(20)
  .addMinutes(2)
  .addSeconds(2)
  .addSeconds(34);

const instanceC = new Time("December 19, 1975 10:42 AM", {
  locale: "zh",
  dateStyle: "short",
  timeStyle: "short",
  weekday: "short",
  month: "long",
});

console.log(instanceA.date.toString());
// Fri Apr 11 1975 10:30:00 GMT-0400 (Eastern Daylight Time) main.js:19:9

console.log(instanceB.date.toString());
// Tue Jul 14 1987 14:52:36 GMT-0400 (Eastern Daylight Time) main.js:20:9

console.log(instanceC.getDate()); // 1975/12/19
console.log(instanceC.getMonth()); // 十二月
console.log(instanceC.getTime()); // 10:42
*/
