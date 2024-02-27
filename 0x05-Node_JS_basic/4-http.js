const app = require('node:http');

const port = 1245;

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, () => {
  console.log('Server running on port 1245...');
});

module.exports = app;
