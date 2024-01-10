interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;		// Allows any additional attributes
}

const teacher: Teacher = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    firstName: 'Director',
    lastName: 'Dewey',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}

console.log(director);
console.log(teacher);


// Write a function printTeacher
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
}

const result = printTeacher("John", "Doe");
console.log(result);



// Writing a class with an interfaced constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentMethods {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentMethods {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
	this.firstName = firstName;
	this.lastName = lastName;
    }

    workOnHomework(): string {
	return 'Currently working';
    }

    displayName(): string {
	return this.firstName
    }
}

const studentInstance = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
