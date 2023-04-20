const value = undefined;

if (value === false) {
  console.log("The boolean value false is falsy");
} else if (value === null) {
  console.log("The null value is falsy");
} else if (value === undefined) {
  console.log("undefined is falsy");
} else if (value === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
  console.log("The empty string is falsy (the only falsy string)");
} else {
  console.log("true");
}

const num1 = 50;
const num2 = 51;
const sum = num1 + num2;

if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
  console.log(sum + " is larger than 0");
} else if (sum > 100) {
  console.log(sum + " is greater than 100");
}

const nu1 = 5;
const nu2 = 6;

if ((nu1 >= 6) && (nu2 >= 6)) {
    console.log ("true");
}
else {
    console.log ("false"); 
}

const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";

if (param1A === "cat" && param1B === "cat" && param2A === 6 && param2B === "6") {
    console.log ("true");
}
else {
    console.log ("false"); 
}
