const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and trim
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Extract field names from the header
    const fields = lines[0].split(',');

    // Find the index of the 'field' column
    const fieldIndex = fields.findIndex((field) => field.toLowerCase() === 'field');

    if (fieldIndex === -1) {
      throw new Error('Field column not found in the database');
    }

    // Initialize counters for each field value
    const fieldCounts = {};

    // Initialize a list for each field value
    const fieldLists = {};

    // Iterate over each line (excluding the header)
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const values = line.split(',');

      // Extract the field value from the line
      const fieldValue = values[fieldIndex].trim();

      // Increment the counter for the field value
      if (!fieldCounts[fieldValue]) {
        fieldCounts[fieldValue] = 1;
        fieldLists[fieldValue] = [];
      } else {
        fieldCounts[fieldValue] += 1;
      }

      // Add the student's name to the list for the field value
      fields.forEach((field, index) => {
        if (index !== fieldIndex && values[index].trim() !== '') {
          fieldLists[fieldValue].push(values[index]);
        }
      });
    }

    // Log the number of students and the list of first names for value
    console.log(`Number of students: ${lines.length - 1}`);
    Object.keys(fieldCounts).forEach((fieldValue) => {
      console.log(`Number of students in ${fields[fieldIndex]}`
                  + ` ${fieldValue}: ${fieldCounts[fieldValue]}.`
                  + `List: ${fieldLists[fieldValue].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
