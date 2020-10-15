const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "What will the project be used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license type",
        choices: ["Community License", "MIT License", "GNU GPL"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Enter the project tests"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Your Email"
    },

    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    
    {
        type: "input",
        name: "repo",
        message: "Enter your repo link?"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
          fs.writeFile("README.md", generate(data), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file was successful!");
          });
        

});

function init() {

}

init();