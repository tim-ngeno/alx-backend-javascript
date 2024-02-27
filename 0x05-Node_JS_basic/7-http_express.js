const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFileName = 'database.csv';

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students URL
app.get('/students', (req, res) => {
  countStudents(databaseFileName)
    .then(() => {
      console.log('List of students displayed successfully.');
      res.send('This is the list of our students');
    })
    .catch((error) => {
      console.error('Error:', error.message);
      res.status(500).send('Error: Cannot load the database');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
