/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/8/2023 8:56:08 PM
 * 
 * Description :
 * This file is used to declare the arrays to be use in the 
 * application 
 */

// Badges array
const arrbadges = ["HTML5", ".NET", "javascript", "jQuery", "nodedotjs",
    "Bootstrap", "CSS3", "github", "NPM"]

const descriptionfill = ["Lorem Ipsum","Type Description"]

// Questions array of questions to process.
// Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions
const badgesquestions = [
    {
        type: 'confirm',
        name: 'includebadge',
        message: 'Would you like to include badges?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'badgeslist',
        message: 'Please select the badges you like to include',
        choices: arrbadges,
        when(answers) {
            return answers.includebadge !== false;
        }
    }
]

const description = [
    {
        type: "list",
        name: "descriptionparr",
        message: "How you want to enter the description?",
        choices: descriptionfill,
        default: "Lorem Ipsum"
    },
]

const manualdescription = [
    {
        type: "input",
        name: "descriptionparr",
        message: "Please enter your product description:",
        validate(value) {
            if (value.length == 0) {
                return chalk.red('You must enter a description for your product! Press Ctrl-C to cancel');
            }
            return true;
        }
    }
]

const questions = [
    {
        type: 'input',
        name: 'productname',
        message: 'What is the name of your package?',
        validate(value) {
            if (value.length == 0) {
                return chalk.red('You must enter a product name! Press Ctrl-C to cancel');
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'includeimage',
        message: 'Would you like to include Carleton image?',
        default: false
    },
    {
        type: 'confirm',
        name: 'includelicense',
        message: 'Would you like to include license section?',
        default: true
    },
    {
        type: 'input',
        name: 'licensetext',
        message: 'Please enter the license section',
        when(answers) {
            return answers.includelicense !== false;
        }
    }

];