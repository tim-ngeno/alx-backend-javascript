export default class HolbertonCourse {
  constructor(name, length, students = []) {
    // Verify types of constructor parameters
    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Name must be a string.');
    }

    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the name property
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for the length property
  get length() {
    return this._length;
  }

  set length(newLength) {
    // Verify newLength is a number and greater than 0
    if (typeof newLength !== 'number' || newLength <= 0) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter for the students property
  get students() {
    return this._students;
  }

  addStudent(student) {
    // Verify student is a string
    if (typeof student !== 'string') {
      throw new Error('Student must be a string');
    }

    if (this._students.length < this._length) {
      this._students.push(student);
    } else {
      console.log('Classroom is full');
    }
  }
}
