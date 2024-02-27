const http = require('http');
const { countStudents } = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // For the root URL, display 'Hello Holberton School!'
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Display list of students
    countStudents('database.csv')
      .then(() => {
        res.end('This is the list of our students');
      })
      .catch((error) => {
        console.error('Error:', error.message);
        res.end('Error: Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('404 not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
