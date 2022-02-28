// generates card for manager type
const managerCard = function (manager) {
  return ` <div class="card" style="width: 18rem;">
    <div class="card-header">
    <h2 class="font-weight-bold">${manager.name}</h2>
    <h3 class="font-weight-bold">Manager</h3>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.empID}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNum}</li>
    </ul>
</div>`;
};

// generates card for engineer type
const engineerCard = function (engineer) {
  return ` <div class="card" style="width: 18rem;">
      <div class="card-header">
      <h2 class="font-weight-bold">${engineer.name}</h2>
      <h3 class="font-weight-bold">Engineer</h3>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.empID}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">GitHub Username: <a href = "https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
      </ul>
  </div>`;
};

// generates card for intern type
const internCard = function (intern) {
  return ` <div class="card" style="width: 18rem;">
      <div class="card-header">
      <h2 class="font-weight-bold">${intern.name}</h2>
      <h3 class="font-weight-bold">Intern</h3>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.empID}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
      </ul>
  </div>`;
};

//pushes and joins generated cards to an array
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

//adds generated cards to rest of HTML
function generateHTML(memberCards) {
  return `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <title>My Team</title>
  </head>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">My Team</h1>
  </div>
</div>
  <body>
<div class="row justify-content-center mx-auto">
    ${memberCards}
</div>
  </body>

  </html>`;
}

module.exports = generateHTML;
