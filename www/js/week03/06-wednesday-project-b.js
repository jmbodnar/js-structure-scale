/**
 * Time Constructor function, mutable instance
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
      // See Intl.DateTimeFormat() Constructor options:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
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
    date: { value: new Date(...date), writable: true },
    _settings: { value: _settings },
  });
}

Constructor.prototype.date = function () {
  return this.date;
};

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
