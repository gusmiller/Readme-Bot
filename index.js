/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/5/2023 2:06:08 PM
 */

// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

/**
 * Initialize arrays and other global requirements to be executed on load.
 */
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

/**
 * Entry point for the application. File will trigger this when it finishes
 * loading
 */
init();
