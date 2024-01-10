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
