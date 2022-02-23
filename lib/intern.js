const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, empID, email, role, school) {
    super(name, empID, email, role);
    this.school = school;
  }

  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
