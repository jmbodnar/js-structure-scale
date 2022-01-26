/**
 * Modify the date library to support developer options and immutable instances. Allow users to pass options to change
 * the text returned from the getWeekday(), getMonth(), and related methods. Users can pass options to set the locales,
 * dateStyle, timeStyle, weekday, and month values. They are set in the settings and allowed in the individual functions
 * if desired.
 *
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * - https://tc39.es/ecma402/#sec-intl-datetimeformat-constructor
 * - https://www.w3schools.com/tags/ref_language_codes.asp
 */

function Constructor(date = [], options = {}) {
  if (!Array.isArray(date)) {
    date = [date];
  }

  const settings = Object.assign(
    {
      locale: "en",
      dateStyle: "long",
      timeStyle: "long",
      weekday: "long",
      month: "long",
    },
    options
  );

  this.date = new Date(...date);

  Object.freeze(settings);

  Object.defineProperties(this, {
    date: { value: this.date },
    settings: { value: settings },
  });
}

Constructor.prototype.date = function () {
  return this.date;
};

Constructor.prototype.getDay = function () {
  return new Intl.DateTimeFormat(this.settings.locale, {
    weekday: this.settings.weekday,
  }).format(this.date);
};

Constructor.prototype.getMonth = function () {
  return new Intl.DateTimeFormat(this.settings.locale, {
    month: this.settings.month,
  }).format(this.date);
};

Constructor.prototype.getTime = function () {
  return new Intl.DateTimeFormat(this.settings.locale, {
    timeStyle: this.settings.timeStyle,
  }).format(this.date);
};

Constructor.prototype.getDate = function () {
  return new Intl.DateTimeFormat(this.settings.locale, {
    dateStyle: this.settings.dateStyle,
  }).format(this.date);
};

Constructor.prototype.addSeconds = function (seconds) {
  this.date.setSeconds(this.date.getSeconds() + seconds);
  return this;
};

Constructor.prototype.addMinutes = function (minutes) {
  this.date.setMinutes(this.date.getMinutes() + minutes);
  return this;
};

Constructor.prototype.addHours = function (hours) {
  this.date.setHours(this.date.getHours() + hours);
  return this;
};

Constructor.prototype.addDays = function (days) {
  this.date.setDate(this.date.getDate() + days);
  return this;
};

Constructor.prototype.addMonths = function (months) {
  this.date.setMonth(this.date.getMonth() + months);
  return this;
};

Constructor.prototype.addYears = function (years) {
  this.date.setFullYear(this.date.getFullYear() + years);
  return this;
};

export default Constructor;
