const { createServer } = require('node:http');
const { readFileSync } = require('fs');

const hostname = '0.0.0.0';
const port = 80;

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));
const ver = packageJson.version || "unknown";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const curTime = Date.now();
  const resData = {message:"My name is Jacob Dodson",timestamp:curTime,version:ver};

  res.end(JSON.stringify(resData));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
