interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}


class Director implements DirectorInterface {
    workFromHome() {
	return 'Working from home';
    }

    getCoffeeBreak() {
	return 'Getting a coffee break';
    }

    workDirectorTasks() {
	return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
	return 'Cannot work from home';
    }
    getCoffeeBreak() {
	return 'Cannot have a break';
    }
    workTeacherTasks() {
	return 'Getting to work';
    }
}

function createEmployee(salary: number | string) {
    if (typeof(salary) === 'number' && salary < 500) {
	return new Teacher();
    }
    return new Director;
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// Creating a function specific to employees

// Function to check if employee is director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
	console.log(employee.workDirectorTasks())
    } else {
	console.log(employee.workTeacherTasks());
    }
}
const employee1 = createEmployee(200);
executeWork(employee1); // Output: Getting to work

const employee2 = createEmployee(1000);
executeWork(employee2); // Output: Getting to director tasks



// STRING LITERAL TYPES

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
	return `Teaching ${todayClass}`;
    } else if (todayClass === 'History') {
	return `Teaching ${todayClass}`;
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
