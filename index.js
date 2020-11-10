const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'projectname',
    },
    {
      type: 'input',
      message: 'Describe your project',
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'Describe your Installation',
      name: 'installation',
      
    },
  ])
  .then((response) => {
   

    console.log('response', response)



    const code = `# README Boilerplate

    A template of README best practices to make your README simple to understand and easy to use. 
    
    ## Table of Contents
    
    - [Installation](#installation) 
    - [Name](#usage)
    - [Description](#description)
    
    
    ## Installation
    
    ${response.installation}

    ## Name

    ${response.projectname}
    
    ## Description

    ${response.description}
    `

    fs.writeFile('README.md', code, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });