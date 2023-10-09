/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/8/2023 8:56:08 PM
 * 
 * Description :
 * This file is used to declare the arrays to be use in the application 
 * Questions array of questions to process: Description, Table of Contents,
 * Installation, Usage, License, Contributing, Tests, and Questions
 */
const chalk = require('chalk');

const arrbadges = ["HTML5", ".NET", "javascript", "jQuery", "nodedotjs", "Bootstrap", "CSS3", "github", "NPM"]

const descriptionfill = ["Lorem Ipsum", "Type Description"]

/**
 * This array contains the question to implement the installation instructions, based on what 
 * the user responds it contains two further questions. 
 */
const installation = [
    {
        type: 'confirm',
        name: 'includeinstalation',
        message: 'Would you like to include the Installation Section?',
        default: true
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter the instructions:',
        when(answers) {
            return answers.includeinstalation !== false;
        }
    },
    {
        type: 'input',
        name: 'commandline',
        message: chalk.yellow('Please enter the command line (this will be displayed as code):'),
        when(answers) {
            return answers.instructions !== null;
        }
    }
]

/**
 * This array has only one question. This is not optional and it must be entered by the user. User may
 * press Ctrl-C to break out of the program.
 */
const packagename = [
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
    }
]

/**
 * This array contains the questions related to stetics of the Readme file. It will prompt user for
 * a confirmation for an image and badges. These are optional to the project but are important for my
 * personal liking of a readme file.
 */
const badgesquestions = [
    {
        type: 'confirm',
        name: 'includeimage',
        message: 'Would you like to include Carleton image?',
        default: false
    },
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

/**
 * This array contains the questions related to the Description. The description goes in the top
 * of the document and it usually contains a detail description of what he application does. In this
 * case user can chose a Lorem Ipsum option to fill in two parragraphs of Lorem Ipsum. If user choses
 * to enter manually second option will be given to the user to enter description manually.
 */
const description = [
    {
        type: "list",
        name: "loremdata",
        message: "How you want to enter the description?",
        choices: descriptionfill,
        default: "Lorem Ipsum"
    },
    {
        type: "input",
        name: "manualdata",
        message: "Please enter your product description:",
        when(answer) {
            return answer.loremdata !== "Lorem Ipsum";
        },
        validate(answer) {
            if (answer.length == 0) {
                return chalk.red('You must enter a description for your product! Press Ctrl-C to cancel');
            }
            return true;
        }
    }
]

/**
 * This array contains the questions related to the License. The MIT licens is the most common license used
 * when creating open source code. A short and simple permissive license with conditions only requiring 
 * preservation of copyright and license notices. Licensed works, modifications, and larger works may be 
 * distributed under different terms and without source code. (ref: https://choosealicense.com/licenses/mit/)
 */
const license = [
    {
        type: 'confirm',
        name: 'includelicense',
        message: 'Do you want to include an MIT license?',
        default: true
    }
]

module.exports = { arrbadges, descriptionfill, packagename, badgesquestions, description, license, installation };