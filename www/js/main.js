import Time from "./week03/07-friday-project-a.js";

// Create a new Time() instance
let halloween = new Time("October 31, 2021");
console.log(halloween.getDateString());

// If the year on the Time() instance is greater than 2021, don't update
document.addEventListener("time:update", function (event) {
  if (event.detail.date.getFullYear() >= 2021) {
    event.preventDefault();
  }
});

// Adjust the date
// the addYears() method won't update the date in this instance
halloween.addDays(3).addMonths(1).addYears(1);
console.log(halloween.getDateString());
