function generateHTML({ name, empID, email, role, officeNum, gitHub, school }) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
  
      <h1>${name}</h1>
      <h1>${empID}</h1>
      <h1>${email}</h1>
      <h1>${role}</h1>
      <h1>${officeNum}</h1>
      <h1>${gitHub}</h1>
      <h1>${school}</h1>
  
  </body>
  
  </html>`;
}

module.exports = generateHTML;
