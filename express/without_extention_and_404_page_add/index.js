const express = require("express");
const path = require("path");

const dirpath = path.join(__dirname, "/public");
const app = express();

app.get("", (req, resp) => {
  resp.sendFile(`${dirpath}/index.html`);
});
app.get("/about", (req, resp) => {
  resp.sendFile(`${dirpath}/about.html`);
});
app.get("*", (req, resp) => {
  resp.sendFile(`${dirpath}/nopage.html`);
});
app.listen(5000);
