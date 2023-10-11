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
 * Installation, Usage, License, Contributing, Tests, Questions and others
 */
const chalk = require('chalk');

const colors = ["blue", "green", "red", "yellow", "purple", "cyan"]
const arrbadges = ["HTML5/Websites", ".NET/Platform", "javascript/Language", "jQuery/Language", "nodejs/Server", "Bootstrap/Styling", "CSS3/Cascade Sheets", "github/Versions"]

const descriptionfill = ["Lorem Ipsum", "Free-Typing"]

/**
 * This array contains the instructions to add the application usage. User has the choice to manually enter
 * the information or allow the application to generate a random parragraph that will allow file to be created
 * with pseudo-data.
 */
const appusage = [
    {
        type: 'confirm',
        name: 'applicationusage',
        message: chalk.magenta('Would you like to include Application Usage Section?'),
        default: true
    },
    {
        type: "list",
        name: "loremusage",
        message: chalk.magenta("How you want to enter the Usage Information?"),
        choices: descriptionfill,
        default: "Lorem Ipsum",
        when(answer) {
            return answer.applicationusage === true; // Ask only when required
        }
    },
    {
        type: "input",
        name: "customusage",
        message: chalk.magenta("Please enter Application usage information:"),
        when(answer) {
            return answer.applicationusage === true && answer.loremusage !== "Lorem Ipsum"; // Ask only when required
        },
        validate(answer) {
            if (answer.length == 0) {
                return chalk.red('You must provide an explanation to the usage of the application! Press Ctrl-C to cancel');
            }
            return true;
        }
    }

]

/**
 * This array contains the instructions to install the application. The question is divided in three different 
 * sub-questions: How to clone application, how to run the NPM and how to launch the application.
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
        message: chalk.green('Please enter the instructions:'),
        default: 'Please follow the instructions to install the Readme-bot CLI application',
        when(answers) {
            return answers.includeinstalation === true;
        }
    },
    {
        type: 'input',
        name: 'clonecommand',
        message: chalk.yellow('Please enter the cloning github repo (this will be displayed as code):'),
        default: 'git clone http://github.com/gusmiller/readme-bot',
        when(answers) {
            return answers.includeinstalation === true;
        }
    },
    {
        type: 'input',
        name: 'npmpackage',
        message: chalk.yellow('Please enter the NPM initialize command (this will be displayed as code):'),
        default: 'npm install',
        when(answers) {
            return answers.includeinstalation === true;
        }
    },
    {
        type: 'input',
        name: 'runcommand',
        message: chalk.yellow('Please enter the command to launch the application (this will be displayed as code):'),
        default: 'node index.js',
        when(answers) {
            return answers.includeinstalation === true;
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
        message: chalk.blue('What is the name of your package?'),
        default: 'Carlton Coding Bootcamp Certification',
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
 * a confirmation for an image, table of contents and badges. These are optional to the project but are
 * important for my personal liking of a readme file.
 */
const badgesquestions = [
    {
        type: 'confirm',
        name: 'includeimage',
        message: chalk.green('Would you like to include Carleton image?'),
        default: true
    },
    {
        type: 'confirm',
        name: 'tablecontents',
        message: chalk.green('Would you like to include Table of Contents? (It will be created based on your selections)'),
        default: true
    },
    {
        type: 'confirm',
        name: 'includebadge',
        message: chalk.green('Would you like to include badges?'),
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

/**
 * This array contains the questions related to the Contact section. This was optiona from my part
 * but I intent to use this CLI application to create my Readme documents for future assignments and 
 * project I may have.
 */
const contactme = [
    {
        type: 'confirm',
        name: 'includecontact',
        message: chalk.blue('Do you want to include a Contact me Section?'),
        default: true
    },
    {
        type: "input",
        name: "contactdata",
        message: chalk.blue('Please enter your Contact information?'),
        default: "Gustavo Miller - gustavo.miller@miller-hs.com",
        when(answer) {
            return answer.includecontact === true;
        }
    },
    {
        type: "input",
        name: "contactproject",
        message: chalk.blue('Please enter your GitHub Repository address?'),
        default: "[Project Readme-bot](https://github.com/gusmiller/Readme-Bot)",
        when(answer) {
            return answer.includecontact === true;
        }
    }
]

module.exports = { arrbadges, descriptionfill, packagename, badgesquestions, description, license, installation, colors, appusage, contactme };