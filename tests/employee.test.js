const Employee = require("../lib/Employee");

describe(`employee`, () => {
  it(`should create a new employee`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
});

it(`should set name`, () => {
  const employee = new Employee("brett", 123, "bgould86@gmail.com");
  expect(employee.name).toBe("brett");
});

it(`should return the name when getName is called`, () => {
  const employee = new Employee("brett", 123, "bgould86@gmail.com");
  expect(employee.getName()).toBe("brett");
});

it(`should return the ID when getEmpID is called`, () => {
  const employee = new Employee("brett", 123, "bgould86@gmail.com");
  expect(employee.getEmpID()).toBe(123);
});

it(`should return email when getEmail is called`, () => {
  const employee = new Employee("brett", 123, "bgould86@gmail.com");
  expect(employee.getEmail()).toBe("bgould86@gmail.com");
});

it(`should return the role when getRole is called`, () => {
  const employee = new Employee("Employee");
  expect(employee.getRole()).toBe("Employee");
});
