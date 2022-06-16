function addAverageSalary(employees) {
  for (let emp in employees) {
    if (
      employees[emp].salaryRange != null &&
      employees[emp].salaryRange.min != null &&
      employees[emp].salaryRange.max != null
    ) {
      employees[emp].averageSalary =
        (employees[emp].salaryRange.min + employees[emp].salaryRange.max) / 2;
    } else {
      employees[emp].averageSalary = null;
    }
  }
  return employees;
}
const employees = {
  first: {
    name: "john",
    salaryRange: {
      min: 300,
      max: 500,
    },
  },
  second: {
    name: "tim",
    salaryRange: {
      min: 200,
    },
  },
  third: {
    name: "alex",
    salaryRange: null,
  },
};

console.log(JSON.stringify(addAverageSalary(employees), undefined, 2));
