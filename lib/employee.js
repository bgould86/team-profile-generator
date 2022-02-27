class Employee {
  constructor(name, empID, email, role) {
    this.name = name;
    this.empID = empID;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getEmpID() {
    return this.empID;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
