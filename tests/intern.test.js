const Intern = require("../lib/Intern");

describe(`intern`, () => {
  it(`should create a new intern`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
});

it(`should set name`, () => {
  const employee = new Intern("brett", 123, "bgould86@gmail.com", "ISU");
  expect(employee.name).toBe("brett");
});

it(`should return the name when getName is called`, () => {
  const employee = new Intern("brett", 123, "bgould86@gmail.com", "ISU");
  expect(employee.getName()).toBe("brett");
});

it(`should return the ID when getEmpID is called`, () => {
  const employee = new Intern("brett", 123, "bgould86@gmail.com", "ISU");
  expect(employee.getEmpID()).toBe(123);
});

it(`should return email when getEmail is called`, () => {
  const employee = new Intern("brett", 123, "bgould86@gmail.com", "ISU");
  expect(employee.getEmail()).toBe("bgould86@gmail.com");
});

it(`should return school when getSchool is called`, () => {
  const employee = new Intern("brett", 123, "bgould86@gmail.com", "ISU");
  expect(employee.getSchool()).toBe("ISU");
});

it(`should return the role when getRole is called`, () => {
  const employee = new Intern("Intern");
  expect(employee.getRole()).toBe("Intern");
});
