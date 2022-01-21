// @ts-check

// Reavealing module pattern
export const time = (function () {
  // function getDay(date) {
  //   const days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  //   return days[date.getDay()];
  // }

  // Using the Intl.DateTimeFormat object

  // function getMonth(date) {
  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  //   return months[date.getMonth()];
  // }

  function getWeekday(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  function getMonth(date) {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  }

  function addSeconds(date, seconds) {
    date.setSeconds(date.getSeconds() + seconds);
  }

  function addMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() + minutes);
  }

  function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
  }

  function addDays(date, days) {
    date.setDate(date.getDate() + days);
  }

  function addMonths(date, months) {
    date.setMonth(date.getMonth() + months);
  }

  function addYears(date, years) {
    date.setFullYear(date.getFullYear() + years);
  }

  return {
    getWeekday,
    getMonth,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addMonths,
    addYears,
  };
})();

let birthday = new Date("12/19/1974 10:30:05 AM");
time.addDays(birthday, 5);
console.log(time.getWeekday(birthday));

export default time;
