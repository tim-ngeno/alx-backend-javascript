export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      const departmentNames = Object.keys(this.allEmployees);
      return departmentNames.length;
    },
  };

  return obj;
}
