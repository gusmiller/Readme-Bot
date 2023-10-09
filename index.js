/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/5/2023 2:06:08 PM
 */

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');

const packagename = require('./utils/arrays.js');
const arrbadges = require('./utils/arrays.js');
const descriptionfill = require('./utils/arrays.js');

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

/**
 * Initialize arrays and other global requirements to be executed on load.
 */
const init = () => {
    inquirer.prompt(packagename)
        .then((value) => {
            if (value.productname === "") {
                return;
            } else {
                console.log("test")
                // clearOrder();
                // getName();
            }
        });
};

const description = () => {

    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
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
