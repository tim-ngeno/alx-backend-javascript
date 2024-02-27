const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('database.csv');
      if (!data) {
        throw new Error('No data found in the database');
      }

      const fields = Object.keys(data);
      let response = 'This is the list of our students\n';
      fields.forEach((field) => {
        const students = data[field];
        response += `Number of students in ${field}:`
          + ` ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Error: Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Error: Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('database.csv');
      if (!data || !data[major]) {
        throw new Error(`No data found for ${major}`);
      }

      const students = data[major];
      const response = `List: ${students.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Error: Cannot load the database');
    }
  }
}

module.exports = StudentsController;
