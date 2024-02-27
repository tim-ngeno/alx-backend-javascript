const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the database file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If the database is not available, reject the promise with an error
        reject(new Error('Cannot load the database'));
      } else {
        // Split the data into lines and trim
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Initialize counters for each field
        const fieldCounts = {};

        // Initialize a list for each field
        const fieldLists = {};

        // Iterate over each line (excluding the header)
        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i];
          const values = line.split(',');

          // Extract the field value from the line
          const fieldValue = values[values.length - 1].trim();

          // Increment the counter for the field value
          if (!fieldCounts[fieldValue]) {
            fieldCounts[fieldValue] = 1;
            fieldLists[fieldValue] = [];
          } else {
            fieldCounts[fieldValue] += 1;
          }

          // Add the student's name to the list for the field value
          values.forEach((value, index) => {
            if (index !== values.length - 1 && value.trim() !== '') {
              fieldLists[fieldValue].push(value);
            }
          });
        }

        // Log the number of students and the list of first names for
        // each field value
        console.log(`Number of students: ${lines.length - 1}`);
        Object.keys(fieldCounts).forEach((fieldValue) => {
          console.log(`Number of students in ${fieldValue}:`
                      + ` ${fieldCounts[fieldValue]}. List:`
                      + ` ${fieldLists[fieldValue].join(', ')}`);
        });

        // Resolve the promise
        resolve();
      }
    });
  });
}

module.exports = countStudents;
