const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, empID, email, role, gitHub) {
    super(name, empID, email, role);
    this.gitHub = gitHub;
  }

  getRole() {
    return this.role;
  }

  getGitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
