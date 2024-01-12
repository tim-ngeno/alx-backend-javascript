namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
	experienceTeachingC?: number;
    }

    export class Subject {
        private _teacher: Teacher | undefined;

        setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }

        get teacher(): Teacher | undefined {
            return this._teacher;
        }
    }

    export class Cpp extends Subject {
	getRequirements(): string {
	    return 'Here is the list of requirements for Cpp';
	}

	getAvailableTeacher(): string {
	    if (this.teacher && this.teacher.experienceTeachingC()) {
		return `Available Teacher: ${this.teacher.firstName}`;
	    } else {
		return `No available teacher`;
	    }
	}
    }
}
