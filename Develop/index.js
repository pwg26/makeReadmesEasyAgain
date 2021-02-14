// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

const readmeFile = (answers) =>
  `### ${answers.title} \n 
## Contents  
[Description](#Description) \n
[Instruction](#Instrunction)\n
[Usage](#Usage)\n
[Test](#Test)\n
[Contact](#Contact)\n

*  *  *  *  *

## Description
${answers.desription}\n\n
## Instruction
${answers.instructions}\n\n
## Usage
${answers.usage}\n\n
## Test
${answers.test}\n\n
## License
${answers.license}\n\n
## Contact
Github Profile-  https://github.com/${answers.user} \n
Email- ${answers.email}
`;

const readmeResponse = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is projects title?",
    },
    {
      type: "input",
      name: "desription",
      message: "Write a descripition of the project",
    },
    {
      type: "input",
      name: "instructions",
      message: "What are the instructions for the projects instilation",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use the project?",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions",
    },
    {
      type: "list",
      name: "license",
      message: "What are the test instructions",
      choices: ["IBM", "Mozilla", "MIT", "None"],
    },
    {
      type: "input",
      name: "user",
      message: "What is your github username",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email",
    },
  ]);
};

function renderLicenseBadge(answers) {
  switch (answers.license) {
    case "MIT":
      answers.license = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) \n https://opensource.org/licenses/MIT"`;
      break;
    case "MOZILLA":
      answers.license = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg) \n https://opensource.org/licenses/MPL-2.0`;
      break;
    case "IBM":
      answers.license = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg) \n https://opensource.org/licenses/IPL-1.0`;
      break;
  }
  return answers.license;
}

function init() {
  readmeResponse().then(function (answers) {
    renderLicenseBadge(answers);
    fs.writeFile("REAME.md", readmeFile(answers), function (err) {
      err ? console.log(err) : console.log("Success!");
    });
  });
}

init();

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
