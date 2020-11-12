const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "projectname",
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "Describe your Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "What files are included in this project?",
      name: "files",
    },
    {
      type: "input",
      message: "What is your project link?",
      name: "project",
    },

    {
      type: "input",
      message: "What is your Github account information?",
      name: "account",
    },
  ])
  .then((response) => {
    console.log("response", response);

    const code = `
  ## Project Title
    
    Title: ${response.projectname}

  ## Installation

    Install: ${response.installation}

  ## Files

    Files Included: ${response.files}

  ## Contributing

    Fork it! Github Link: ${response.project}

  ## Contact Info

    Github User Link: ${response.account}
`
fs.writeFile("README.md", code, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
