import Time from "./week03/07-friday-project-a.js";

// Create a Time instances, halloween
const halloween = new Time("October 31, 2020 10:30 AM");

// Listen for the time:update event
document.addEventListener("time:update", function (event) {
  // Verify current years is less than 2021 and only update if so
  if (event.detail.time.date.getFullYear() >= 2021) {
    console.log("It's already 2021 or greater!");
    event.preventDefault();
  }
});

// Update month and year as test
halloween.addDays(3).addMonths(1).addYears(3);

console.log(halloween.dateString());
