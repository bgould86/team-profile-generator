const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
require("./src/generateHTML");

const employeeArray = [];

//questions array
const createEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          name: "role",
          type: "list",
          message: "What employee type would you like to create?",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          name: "name",
          type: "input",
          message: "Enter the employee's name.",
        },
        {
          name: "empID",
          type: "input",
          message: "Enter the employee's employee ID.",
        },
        {
          name: "email",
          type: "input",
          message: "Enter the employee's email address.",
        },
        {
          name: "officeNum",
          type: "input",
          when: (answers) => answers.role === "Manager",
          message: "Enter the employee's office number.",
        },
        {
          name: "gitHub",
          type: "input",
          when: (answers) => answers.role === "Engineer",
          message: "Enter the employee's GitHub username.",
        },
        {
          name: "school",
          type: "input",
          when: (answers) => answers.role === "Intern",
          message: "Enter the name of the intern's school.",
        },
        {
          name: "confirm",
          type: "confirm",
          message: "Would you like to add another employee?",
          default: false,
        },
      ])

      //organizes input into appropriate class, pushes each new employee into an array
      .then((employeeData) => {
        let { role, name, empID, email, officeNum, gitHub, school, confirm } = employeeData;
        let teamMember;

        if (role === "Manager") {
          teamMember = new Manager(name, empID, email, officeNum);
        } else if (role === "Engineer") {
          teamMember = new Engineer(name, empID, email, gitHub);
        } else if (role === "Intern") {
          teamMember = new Intern(name, empID, email, school);
        }
        employeeArray.push(teamMember);

        if (confirm) {
          return createEmployee(employeeArray);
        } else {
          return employeeArray;
        }
      })
  );
};

//fires HTML generator and writes file
createEmployee().then((employeeArray) => {
  const HTMLText = generateEmployeesHTML(employeeArray);
  fs.writeFile("./dist/index.html", HTMLText, (err) => (err ? console.error(err) : console.log("Success! Your HTML file has generated.")));
  return generateEmployeesHTML(employeeArray);
});
