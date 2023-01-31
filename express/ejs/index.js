const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  const data = {
    name: "rachit",
    city: "kanpur",
  };
  resp.render("profile", {data});
});
app.listen(5000);