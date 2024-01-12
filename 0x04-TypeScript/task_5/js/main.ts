export interface MajorCredits {
    credits: number;
}

export interface MinorCredits {
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return {
	credits: subject1.credits + subject2.credits,
    }
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return {
	credits: subject2.credits + subject2.credits,
    }
}



// Example usage
const majorSubject1: MajorCredits = { credits: 3 };
const majorSubject2: MajorCredits = { credits: 4 };
const resultMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log(resultMajorCredits);

const minorSubject1: MinorCredits = { credits: 2 };
const minorSubject2: MinorCredits = { credits: 1 };
const resultMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log(resultMinorCredits);
