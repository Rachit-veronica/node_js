const fs = require("fs");

const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
  console.log("if condition is true");
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
  console.log("if else constion is true");
} else {
  console.log("error");
}
