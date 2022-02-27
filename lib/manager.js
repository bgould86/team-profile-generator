const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, empID, email, officeNum) {
    super(name, empID, email);
    this.officeNum = officeNum;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
