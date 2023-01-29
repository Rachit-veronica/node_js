const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send("hello this is home page");
});
app.get("/about", (req, resp) => {
  resp.send(`hello this is about page
      we can also recevice the req of an use and print on it ${req.query.name}
  `);
});

app.listen(5000);
