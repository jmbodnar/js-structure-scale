(function () {
  "use strict";

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

    emitEvent("time:ready", {
      time: this,
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
    const newDate = new Date(this.date);
    newDate.setSeconds(newDate.getSeconds() + seconds);

    const newTime = new Constructor(newDate, this._settings);

    const canceled = !emitEvent("time:update", {
      time: newTime,
      type: "seconds",
      value: seconds,
    });

    if (canceled) return this;
    return newTime;
  };

  Constructor.prototype.addMinutes = function (minutes) {
    const newDate = new Date(this.date);
    newDate.setMinutes(newDate.getMinutes() + minutes);

    const newTime = new Constructor(newDate, this._settings);

    const canceled = !emitEvent("time:update", {
      time: newTime,
      type: "minutes",
      value: minutes,
    });

    if (canceled) return this;
    return newTime;
  };

  Constructor.prototype.addHours = function (hours) {
    const newDate = new Date(this.date);
    newDate.setHours(newDate.getHours() + hours);

    const newTime = new Constructor(newDate, this._settings);

    const canceled = !emitEvent("time:update", {
      time: newTime,
      type: "hours",
      value: hours,
    });

    return canceled ? this : newTime;
  };

  Constructor.prototype.addDays = function (days) {
    const newDate = new Date(this.date);
    newDate.setDate(newDate.getDate() + days);

    const newTime = new Constructor(newDate, this._settings);

    const canceled = !emitEvent("time:update", {
      time: newTime,
      type: "days",
      value: days,
    });

    return canceled ? this : newTime;
  };

  Constructor.prototype.addMonths = function (months) {
    const newDate = new Date(this.date);
    newDate.setMonth(newDate.getMonth() + months);

    const newTime = new Constructor(newDate, this._settings);

    // Example without using emitEvent() function
    const event = new CustomEvent("time:update", {
      bubbles: true,
      cancelable: true,
      detail: {
        time: newTime,
        type: "months",
        value: months,
      },
    });

    // Note that dispatch event returns true/false depending if canceled
    const canceled = !document.dispatchEvent(event);

    return canceled ? this : newTime;
  };

  Constructor.prototype.addYears = function (years) {
    const newDate = new Date(this.date);
    newDate.setFullYear(newDate.getFullYear() + years);

    const newTime = new Constructor(newDate, this._settings);

    const event = new CustomEvent("time:update", {
      bubbles: true,
      cancelable: true,
      detail: {
        time: newTime,
        type: "years",
        value: years,
      },
    });

    const canceled = !document.dispatchEvent(event);

    return canceled ? this : newTime;
  };

  function emitEvent(type, detail = {}, elem = document) {
    if (!type) return;

    const event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail: detail,
    });

    return elem.dispatchEvent(event);
  }

  document.addEventListener("time:ready", (event) => {
    // console.log("time:ready:", event.detail.time.getDateString());
  });

  document.addEventListener("time:update", (event) => {
    console.log("time:update", event.detail.time.getDate());
    if (event.detail.time.date.getFullYear() >= 2024) event.preventDefault();
  });

  let startTime = new Constructor("January 1, 2021", { locale: "de" });
  console.log("START TIME:", startTime.getDate());

  let endTime = startTime
    .addSeconds(2)
    .addSeconds(3)
    .addMinutes(2)
    .addMinutes(3)
    .addHours(2)
    .addHours(3)
    .addDays(2)
    .addDays(3)
    .addMonths(2)
    .addMonths(3)
    .addYears(2)
    .addYears(3);

  console.log("END TIME:", endTime.getDate());
})();
