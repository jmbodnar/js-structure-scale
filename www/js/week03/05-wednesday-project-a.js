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
    date: {
      value: new Date(...date),
    },
    _settings: { value: _settings },
  });
}

Constructor.prototype.dateString = function () {
  return this.date.toString();
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
