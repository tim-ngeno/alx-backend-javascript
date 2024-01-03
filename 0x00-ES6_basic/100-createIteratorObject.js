export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const department = departments[currentDepartmentIndex];
        const employees = report.allEmployees[department];

        if (currentEmployeeIndex < employees.length) {
          const employee = employees[currentEmployeeIndex];
          currentEmployeeIndex += 1;
          return { value: employee, done: false };
        }
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
