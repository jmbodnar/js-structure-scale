function Constructor(date = [], options = {}) {
  if (!Array.isArray(date)) {
    date = [date];
  }

  this.date = new Date(...date);

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
    date: { value: this.date },
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

// Constructor.prototype.addSeconds = function (seconds) {
//   this.date.setSeconds(this.date.getSeconds() + seconds);
//   return this;
// };

Constructor.prototype.addSeconds = function (seconds) {
  const newInstance = new Constructor(this.date, this._settings);
  newInstance.date.setSeconds(newInstance.date.getSeconds() + seconds);
  return newInstance;
};

// Constructor.prototype.addMinutes = function (minutes) {
//   this.date.setMinutes(this.date.getMinutes() + minutes);
//   return this;
// };

Constructor.prototype.addMinutes = function (minutes) {
  const newInstance = new Constructor(this.date, this._settings);
  newInstance.date.setMinutes(newInstance.date.getMinutes() + minutes);
  return newInstance;
};

// Constructor.prototype.addHours = function (hours) {
//   this.date.setHours(this.date.getHours() + hours);
//   return this;
// };

Constructor.prototype.addHours = function (hours) {
  const newInstance = new Constructor(this.date, this._settings);
  newInstance.date.setHours(newInstance.date.getHours() + hours);
  return newInstance;
};

// Constructor.prototype.addDays = function (days) {
//   this.date.setDate(this.date.getDate() + days);
//   return this;
// };

Constructor.prototype.addDays = function (days) {
  const newInstance = new Constructor(this.date, this._settings);
  newInstance.date.setDate(newInstance.date.getDate() + days);
  return newInstance;
};

// Constructor.prototype.addMonths = function (months) {
//   this.date.setMonth(this.date.getMonth() + months);
//   return this;
// };

Constructor.prototype.addMonths = function (months) {
  const newInstance = new Constructor(this.date, this._settings);
  newInstance.date.setMonth(newInstance.date.getMonth() + months);
  return newInstance;
};

// Constructor.prototype.addYears = function (years) {
//   this.date.setFullYear(this.date.getFullYear() + years);
//   return this;
// };

Constructor.prototype.addYears = function (years) {
  const newInstance = new Constructor(this.date, this._settings);
  newInstance.date.setFullYear(newInstance.date.getFullYear() + years);
  return newInstance;
};

export default Constructor;
