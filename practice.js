// This file is for practice

import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

// Displaying 5 day after today
const today = dayjs();
const fiveDaysDate = today.add(5, "days");
const dateString = fiveDaysDate.format("MMMM D");
console.log("5 day after today will be", dateString);

// calculating 1 month after today
const oneMonthDate = today.add(1, "month");
const dateStringOneMonth = oneMonthDate.format("MMMM D");
console.log("1 month after today will be", dateStringOneMonth);

// calculating 1 month before today
const oneMonthDateB4Today = today.subtract(1, "month");
const dateStringOneMonthB4Today = oneMonthDateB4Today.format("MMMM D");
console.log("1 month before today will be", dateStringOneMonthB4Today);

// Displaying day of the week
const dayOfWeek = today.format("dddd");
console.log("Day of the week", dayOfWeek);

// function that returns whether the date is saturday or sunday
function isWeekend(date) {
  const dayOfWeek = date.format("dddd");
  return dayOfWeek === "Saturday" || dayOfWeek === "Sunday";
}

let date = dayjs();
console.log(date.format("dddd MMMM D"));
console.log(isWeekend(date));

date = dayjs().add(2, "days");
console.log(date.format("dddd MMMM D"));
console.log(isWeekend(date));

date = dayjs().add(3, "days");
console.log(date.format("dddd MMMM D"));
console.log(isWeekend(date));

date = dayjs().add(4, "days");
console.log(date.format("dddd MMMM D"));
console.log(isWeekend(date));
