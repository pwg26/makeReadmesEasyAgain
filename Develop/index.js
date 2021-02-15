// utilizes inquire features
const inquirer = require("inquirer");
// alows for writing files
const fs = require("fs");

// skelatal stirng readme content to be filled with user input
const readmeFile = (answers) =>
  `# ${answers.title} ${answers.badge} \n
## Contents  
[Description](#Description) \n 
[Development](#Development) \n
[Instillation](#Instillation)\n
[Usage/Instruction](#Usage/Instructions)\n
[Tests](#Tests)\n
[Contributors](#Contributors)\n
[License](#License)\n
[Contact](#Contact)\n

*  *  *  *  *

## Description
${answers.decsription}\n\n
## Development
${answers.development}\n\n
## Instillation
${answers.instillation}\n\n
## Usage/Instructions
${answers.usage}\n\n
## Tests
${answers.test}\n\n
## Contributors
${answers.contributors}\n\n
## License
${answers.license}\n\n
## Contact
For any questions or suggestions or improvment this project reach me at \n
Github Profile-  https://github.com/${answers.user} \n
Email- ${answers.email}
`;

// inquire prompts
const readmeResponse = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is projects title?",
    },
    {
      type: "input",
      name: "decsription",
      message: "Write a description of the project.",
    },
    {
      type: "input",
      name: "development",
      message: "How was the project developed?",
    },
    {
      type: "input",
      name: "instillation",
      message: "What are the instructions for the projects instillation?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use the project?",
    },
    {
      type: "input",
      name: "test",
      message: "What were the conducted tests?",
    },
    {
      type: "input",
      name: "contributors",
      message: "List the contributors.",
    },
    {
      type: "list",
      name: "license",
      message: "What licesnses were used?",
      choices: ["IBM", "MOZILLA", "MIT", "None"],
    },
    {
      type: "input",
      name: "user",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
};

// renders licensebages depending on user answers
function renderLicenseBadge(answers) {
  switch (answers.license) {
    case "MIT":
      answers.license = `[This project pocesses MIT ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      answers.badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case "MOZILLA":
      answers.license = `This project pocesses MOZILLA ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      answers.badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case "IBM":
      answers.license = `This project pocesses IBM ![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
      answers.badge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
      break;
    default:
      answers.license = ``;
      answers.badge = ``;
  }
  return answers.license, answers.badge;
}

// takes users ansers to render license, concatinate the skelatal string, then write a new file with the string as the readme content
function init() {
  readmeResponse().then(function (answers) {
    renderLicenseBadge(answers);
    fs.writeFile("REAME.md", readmeFile(answers), function (err) {
      err ? console.log(err) : console.log("Success!");
    });
  });
}

// initializes everything
init();
