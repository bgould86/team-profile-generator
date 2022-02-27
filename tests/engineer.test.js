const Engineer = require("../lib/Engineer");

describe(`engineer`, () => {
  it(`should create a new engineer`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
});

it(`should set name`, () => {
  const employee = new Engineer("brett", 123, "bgould86@gmail.com", "bgould86");
  expect(employee.name).toBe("brett");
});

it(`should return the name when getName is called`, () => {
  const employee = new Engineer("brett", 123, "bgould86@gmail.com", "bgould86");
  expect(employee.getName()).toBe("brett");
});

it(`should return the ID when getEmpID is called`, () => {
  const employee = new Engineer("brett", 123, "bgould86@gmail.com", "bgould86");
  expect(employee.getEmpID()).toBe(123);
});

it(`should return email when getEmail is called`, () => {
  const employee = new Engineer("brett", 123, "bgould86@gmail.com", "bgould86");
  expect(employee.getEmail()).toBe("bgould86@gmail.com");
});

it(`should return github username when getGitHub is called`, () => {
  const employee = new Engineer("brett", 123, "bgould86@gmail.com", "bgould86");
  expect(employee.getGitHub()).toBe("bgould86");
});

it(`should return the role when getRole is called`, () => {
  const employee = new Engineer("Engineer");
  expect(employee.getRole()).toBe("Engineer");
});
