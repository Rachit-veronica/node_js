const http = require("http");
const Color = require("colors");
console.log("hello".red);

const server = http.createServer((req, res) => {
  res.end("hello from other side");
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`hello world server is running 127.0.0.1:${8000}`);
});

