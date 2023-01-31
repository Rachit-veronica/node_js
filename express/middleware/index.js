const express = require("express");
const fs = require("fs");

fs.writeFileSync(".gitignore", "/node_modules");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("plz enter your age in url ");
  } else if (req.query.age < 18) {
    resp.send("you are invaild user ");
  } else {
    next();
  }
}; 

app.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("hello this is home");
});
app.get("/about", (req, resp) => {
  resp.send("hello this is about page");
});
app.listen(5000);
