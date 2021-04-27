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
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
    validate: description => {
      if (description) return true;
      else {
        console.log('Please enter a description for your project');
        return false;
      };
    }
  },
  {
    type: 'confirm',
    name: 'tableOfContents',
    message: 'Would you like to include a table of contents for your README?',
    default: false
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install your project?',
    validate: install => {
      if (install) return true;
      else {
        console.log('Please enter the install process for your project');
        return false;
      };
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
    validate: usage => {
      if (usage) return true;
      else {
        console.log('Please enter how to use your project');
      };
    }
  },
  {
    type: 'input',
    name: 'collab',
    message: "List your project's collaborators",
    validate: collab => {
      if (collab) return true;
      else {
        console.log('Please enter your collaborators for your project');
        return false;
      };
    }
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'how can others contribute to your project?',
    validate: contribute => {
      if (contribute) return true;
      else {
        console.log('Please enter how others can contribute to your project');
        return false;
      };
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can others test your project?',
    validate: test => {
      if (test) return true;
      else {
        console.log('Please enter how others can test to your project');
        return false;
      };
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose one of the following licenses for your project:',
    choices: ['MIT', 'GNU', 'Other', 'None']
  },
  {
    type: 'insert',
    name: 'github',
    message: 'Enter your GitHub username',
    validate: github => {
      if (github) return true;
      else {
        console.log('Please enter your GitHub username');
        return false;
      };
    }
  },
  {
    type: 'insert',
    name: 'email',
    message: 'Enter your email address',
    validate: email => {
      if (email) return true;
      else {
        console.log('Please enter your email address');
        return false;
      };
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)
};

// Function call to initialize app
init();
