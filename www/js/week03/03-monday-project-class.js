// @ts-check

class Time {
  constructor(date) {
    this.dateObject = new Date(date);
  }

  get date() {
    return this.dateObject;
  }

  set date(date) {
    this.dateObject = new Date(date);
  }

  getWeekday() {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      this.dateObject
    );
  }

  getMonth() {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      this.dateObject
    );
  }

  addSeconds(seconds) {
    this.dateObject.setSeconds(this.dateObject.getSeconds() + seconds);
    return this;
  }

  addMinutes(minutes) {
    this.dateObject.setMinutes(this.dateObject.getMinutes() + minutes);
    return this;
  }

  addHours(hours) {
    this.dateObject.setHours(this.dateObject.getHours() + hours);
    return this;
  }

  addDays(days) {
    this.dateObject.setDate(this.dateObject.getDate() + days);
    return this;
  }

  addMonths(months) {
    this.dateObject.setMonth(this.dateObject.getMonth() + months);
    return this;
  }

  addYears(years) {
    this.dateObject.setFullYear(this.dateObject.getFullYear() + years);
    return this;
  }
}

export default Time;
