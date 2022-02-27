const managerCard = function (manager) {
  return ` <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${manager.name}
        Manager
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.empID}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNum}</li>
    </ul>
</div>`;
};

const engineerCard = function (engineer) {
  return ` <div class="card" style="width: 18rem;">
      <div class="card-header">
          ${engineer.name}
          Engineer
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.empID}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GitHub Username: ${engineer.gitHub}</li>
      </ul>
  </div>`;
};

const internCard = function (intern) {
  return ` <div class="card" style="width: 18rem;">
      <div class="card-header">
          ${intern.name}
          Intern
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.empID}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
      </ul>
  </div>`;
};

generateEmployeesHTML = (data) => {
  teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const memberData = data[i];
    const teamMember = memberData.getRole();

    if (teamMember === "Manager") {
      const manager = managerCard(memberData);
      teamArray.push(manager);
    }
    if (teamMember === "Engineer") {
      const engineer = engineerCard(memberData);
      teamArray.push(engineer);
    }
    if (teamMember === "Intern") {
      const intern = internCard(memberData);
      teamArray.push(intern);
    }
  }
  const memberCards = teamArray.join("");
  const createHTML = generateHTML(memberCards);

  return createHTML;
};
function generateHTML(memberCards) {
  return `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <title>Document</title>
  </head>

  <body>

    ${memberCards}

  </body>

  </html>`;
}

module.exports = generateHTML;
