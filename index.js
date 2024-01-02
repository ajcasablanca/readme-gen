// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instruction.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you use for your project?',
        choices: ['MIT','Apache','Not Listed','None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include any testing instructions:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list any other contributors:',
    },
    {
        type: 'input',
        name: 'gitUserName',
        message: 'Please enter your github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() { inquirer.prompt(questions)
    .then((data) => {
      const readmeContent = generateMarkdown(data); 
      writeToFile('READMEgen.md', readmeContent);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
