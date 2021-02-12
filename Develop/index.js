// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

const readmeFile = (answers) =>
  `${answers.title} \n 
[Description]#Description \n
[Instruction]#Instrunction\n
[Usage]#Usage \n
[Test]#Test \n
[Contact] \n
Description \n
${answers.desription}\n
Instruction: \n
${answers.instructions}\n
Usage: \n
${answers.usage}\n
Test: \n
${answers.test}\n
Contact: \n
Github Profile-  ${answers.title}\n
Email- ${answers.title}
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
      choices: ["x", "y", "z"],
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

function init() {
  readmeResponse().then(function (answers) {
    fs.writeFile("REAME.md", readmeFile(answers), function (err) {
      err ? console.log(err) : console.log("Success!");
    });
  });
}

init();

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
