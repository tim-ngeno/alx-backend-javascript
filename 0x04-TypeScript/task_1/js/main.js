var teacher = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director = {
    firstName: 'Director',
    lastName: 'Dewey',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director);
console.log(teacher);
function printTeacher(firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var fullName = "".concat(firstLetter, ". ").concat(lastName);
    return fullName;
}
var result = printTeacher("John", "Doe");
console.log(result);
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var studentInstance = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
