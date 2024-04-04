const http = require("http");
const fs = require("fs");

// http://localhost:8000/pages/hello-world.html
http
  .createServer((request, response) => {
    console.log(request.url);

    fs.readFile(`.${request.url}`, "utf8", (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  })
  .listen(8000);
