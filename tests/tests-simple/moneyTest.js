import { formatCurrency } from "../../scripts/utils/money.js";

// These are called test cases, so we have 3 test cases
console.log('Tase suite: formatCureency');

console.log('converts cents into dollars');


if (formatCurrency(2095) === "20.95") {
  console.log("Passed!");
} else {
  console.log("Failed!");
}

if (formatCurrency(0) === "0.00") {
  console.log("Passed!");
} else {
  console.log("Failed!");
}

if (formatCurrency(2000.5) === "20.01") {
  console.log("Passed!");
} else {
  console.log("Failed!");
}

if (formatCurrency(2000.4) === "20.00") {
    console.log('Passed!');
} else {
    console.log('Failed!');
    
}