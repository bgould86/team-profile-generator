const Manager = require("../lib/Manager");

describe(`manager`, () => {
  it(`should create a new manager`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
});

it(`should set name`, () => {
  const employee = new Manager("brett", 123, "bgould86@gmail.com", 234);
  expect(employee.name).toBe("brett");
});

it(`should return the name when getName is called`, () => {
  const employee = new Manager("brett", 123, "bgould86@gmail.com", 234);
  expect(employee.getName()).toBe("brett");
});

it(`should return the ID when getEmpID is called`, () => {
  const employee = new Manager("brett", 123, "bgould86@gmail.com", 234);
  expect(employee.getEmpID()).toBe(123);
});

it(`should return email when getEmail is called`, () => {
  const employee = new Manager("brett", 123, "bgould86@gmail.com", 234);
  expect(employee.getEmail()).toBe("bgould86@gmail.com");
});

it(`should return office number when getOfficeNum is called`, () => {
  const employee = new Manager("brett", 123, "bgould86@gmail.com", 234);
  expect(employee.getOfficeNum()).toBe(234);
});

it(`should return the role when getRole is called`, () => {
  const employee = new Manager("Manager");
  expect(employee.getRole()).toBe("Manager");
});
