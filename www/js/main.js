import Time from "./week03/08-saturday-project-b.js";

document.addEventListener("time:update", function (event) {
  if (event.detail.afterUpdate.getFullYear() >= 2023) {
    console.log(
      "Event canceled: \n - ",
      event.detail.beforeUpdate.toString(),
      "(before)",
      "\n - ",
      event.detail.afterUpdate.toString(),
      "(after)"
    );
    return event.preventDefault();
  }
  console.log("updatedTime: ", event.detail.afterUpdate.toString());
});

let startTime = new Time("January 1, 2021");

let updatedTime = startTime
  .addSeconds(1)
  .addSeconds(1)
  .addMinutes(20)
  .addHours(10)
  .addDays(3)
  .addMonths(3)
  .addYears(1)
  .addMonths(12);

console.log(updatedTime.getDateString());
