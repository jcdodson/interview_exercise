const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const curTime = Math.floor(Date.now() / 1000);
  const resData = {message:"Jacob Dodson",timestamp: curTime};

  res.end(JSON.stringify(resData));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
