const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 80;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const curTime = Math.floor(Date.now());
  const resData = {message:"My name is Jacob Dodson",timestamp: curTime};

  res.end(JSON.stringify(resData));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
