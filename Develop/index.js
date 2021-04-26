// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project',
    validate: projectName => {
      if (projectName) return true;
      else {
        console.log('Please enter the name of your project');
        return false;
      };
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)
};

// Function call to initialize app
init();
