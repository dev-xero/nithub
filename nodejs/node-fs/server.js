const http = require("http");
const { base } = require("./routes");

const host = "localhost";
const port = 8080;

const requestListener = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  switch (req.url) {
    case "/":
      res.end(base);
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
