import Time from "./week03/08-friday-project-b.js";

document.addEventListener("time:ready", (event) => {
  // console.log("time:ready:", event.detail.time.getDateString());
});

document.addEventListener("time:update", (event) => {
  console.log("time:update", event.detail.time.getDate());
  if (event.detail.time.date.getFullYear() >= 2024) event.preventDefault();
});

let startTime = new Time("January 1, 2021", { locale: "de" });
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
