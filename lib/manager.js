const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, empID, email, role, officeNum) {
    super(name, empID, email, role);
    this.officeNum = officeNum;
  }

  getRole() {
    return this.role;
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
