const http = require("http");
const data = require("./data");
const server = http.createServer((res, resp) => {
  resp.writeHead(200, { "content-Type": "application/json" });
  resp.write(JSON.stringify(data));
  resp.end();
});

server.listen(4000, () => {
  console.log("working");
});


    