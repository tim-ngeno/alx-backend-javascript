const fs = require('fs').promises;

async function readDatabase (path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    const students = {};
    rows.forEach((row) => {
      const [firstname, lastname, age, field] = row.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    return students;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
