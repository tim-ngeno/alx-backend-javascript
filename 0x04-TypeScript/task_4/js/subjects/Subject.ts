namespace Subjects {
    export interface Teacher {
        firstName: string;
	lastName: string;
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
}
