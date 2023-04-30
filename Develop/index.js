// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title for your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "How did you install the project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage of this project?",
        },
        {
            type: "input",
            name: "contributing",
            message: "Who is contributing to this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "What do you need to test this app?",
        },
        {
            type: "list",
            name: "license",
            message: "License Choice.",
            choices: ["MIT License", "GNU GPL v3", "Boost Software License 1.0", "Apache 2.0", "Other", "None"],
        },
        {
            type: "input",
            name: "email",
            message: "Please input your email.",
        },
    ])
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Your README.md has been generated!"));
}

// Function call to initialize app
init();
