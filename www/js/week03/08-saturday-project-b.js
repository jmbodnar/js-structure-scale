function emitEvent(type, detail = {}, elem = document) {
  if (!type) return;

  const event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: detail,
  });

  return elem.dispatchEvent(event);
}

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
    date: { value: new Date(...date), writable: false },
    _settings: { value: _settings },
  });

  emitEvent("time:ready", {
    timer: this,
  });
}

Constructor.prototype.getDateString = function () {
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
  const beforeUpdate = new Date(this.date);
  let afterUpdate = new Date(this.date);
  afterUpdate.setSeconds(afterUpdate.getSeconds() + seconds);

  let canceled = !emitEvent("time:update", {
    type: "seconds",
    value: seconds,
    beforeUpdate,
    afterUpdate,
  });

  if (canceled) {
    return new Constructor(beforeUpdate, this._settings);
  }

  return new Constructor(afterUpdate, this._settings);
};

Constructor.prototype.addMinutes = function (minutes) {
  const beforeUpdate = new Date(this.date);
  let afterUpdate = new Date(this.date);
  afterUpdate.setMinutes(afterUpdate.getMinutes() + minutes);

  let canceled = !emitEvent("time:update", {
    type: "minutes",
    value: minutes,
    beforeUpdate,
    afterUpdate,
  });

  if (canceled) {
    return new Constructor(beforeUpdate, this._settings);
  }

  return new Constructor(afterUpdate, this._settings);
};

Constructor.prototype.addHours = function (hours) {
  const beforeUpdate = new Date(this.date);
  let afterUpdate = new Date(this.date);
  afterUpdate.setHours(afterUpdate.getHours() + hours);

  let canceled = !emitEvent("time:update", {
    type: "hours",
    value: hours,
    beforeUpdate,
    afterUpdate,
  });

  if (canceled) {
    return new Constructor(beforeUpdate, this._settings);
  }

  return new Constructor(afterUpdate, this._settings);
};

Constructor.prototype.addDays = function (days) {
  const beforeUpdate = new Date(this.date);
  let afterUpdate = new Date(this.date);
  afterUpdate.setDate(afterUpdate.getDate() + days);

  let canceled = !emitEvent("time:update", {
    type: "days",
    value: days,
    beforeUpdate,
    afterUpdate,
  });

  if (canceled) {
    return new Constructor(beforeUpdate, this._settings);
  }

  return new Constructor(afterUpdate, this._settings);
};

Constructor.prototype.addMonths = function (months) {
  const beforeUpdate = new Date(this.date);
  let afterUpdate = new Date(this.date);
  // afterUpdate.getMonth(afterUpdate.setMonth() + months);
  afterUpdate.setMonth(afterUpdate.getMonth() + months);

  let canceled = !emitEvent("time:update", {
    type: "months",
    value: months,
    beforeUpdate,
    afterUpdate,
  });

  if (canceled) {
    return new Constructor(beforeUpdate, this._settings);
  }

  return new Constructor(afterUpdate, this._settings);
};

Constructor.prototype.addYears = function (years) {
  const beforeUpdate = new Date(this.date);
  let afterUpdate = new Date(this.date);
  afterUpdate.setFullYear(afterUpdate.getFullYear() + years);

  let canceled = !emitEvent("time:update", {
    type: "years",
    value: years,
    beforeUpdate,
    afterUpdate,
  });

  if (canceled) {
    return new Constructor(beforeUpdate, this._settings);
  }

  return new Constructor(afterUpdate, this._settings);
};

export { Constructor as default, Constructor as Time };
