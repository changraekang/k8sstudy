const http = require("http");

const server = http.createServer((req, res) => {
  // Deprecated Buffer constructor usage
  const buf = new Buffer("Hello World");

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(buf);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
