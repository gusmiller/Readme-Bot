/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/5/2023 2:06:08 PM
 * 
 * Description: the goal of this script is to build a Readme file using the different sections
 * that have been specified in the requirements. The areas require are as follow:
 *          Description, (done)
 *          Table of Contents, (done)
 *          Installation, (done)
 *          Usage, (done)
 *          License, (done)
 *          Contributing,  
 *          Tests
 */

// Include packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const contribution = require('./utils/contributions.js');
const questions = require('./utils/arrays.js');
const lorem = require('./utils/parragraphs.js');
const license = require('./utils/license.js');
const sp = "\n\n";

let buildfilesrting = "";

let builder = {
    productname: "",
    projectdescription: "",
    applicationusage: "",
    contributiondata: "",
    includeimage: false,
    tablecontents: true,
    includelicense: true,
    includeinstallation: false,
    instructions: "",
    clonecommand: "",
    npmpackage: "",
    runcommand: "",
    badgeslist: []
};

// TODO: Create a function to write README file
function writeToFile() {

    buildfilesrting = "<a id=\"readme-top\" name=\"readme-top\"></a>" + sp; // Instantiate file content
    if (builder.includeimage == true) {
        buildfilesrting += "<p align=\"center\"><img src=\"./assets/images/carleton-u-logo.jpg\" height=\"250\"></p>" + sp
    }

    BuildBadgesSection() // This will build the badges section

    buildfilesrting += sp;
    buildfilesrting += "# " + builder.productname;
    buildfilesrting += sp;

    BuildTableContent(); // Build the table of contents
    BuildDescription(); // Build the description section
    BuildInstallationSection(); // Build the Installation section
    CommonSection("license", "License", license.license) // Build the License section
    CommonSection("usage", "Application Usage", builder.applicationusage) // Build the application usage section
    CommonSection("contribution", "Contributing ", builder.contributiondata) // Build the application usage section

    fs.writeFile('Readme.md', buildfilesrting, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

/**
 * Start the Readme questionnaire process; the goal is to achieve sections for Description, Table of Contents,
 * Installation, Usage, License, Contributing, and Tests. This is the start of a chain of events build on promises, 
 * each section will feed a global array of ojects that will be used to creae the Readme document. 
 * We start with the product name.
 */
const init = () => {

    inquirer.prompt(questions.packagename)
        .then((answer) => {
            if (answer.productname === "") {
                return;
            } else {
                builder.productname = answer.productname; // Store the product name in readme builder
                ProjectDescription(); // Retrieve project description
            }
        });
};

/**
 * This will ask questions about the project description. This could be filled automatically bor it can
 * be entered manually. The automatic way uses two Lorem Ipsum parragraphs autogenerated (https://loremipsum.io/generator/) 
 * to fill in the description.
 */
const ProjectDescription = () => {

    inquirer.prompt(questions.description)
        .then((answer) => {
            if (answer.loremdata === "Lorem Ipsum") {
                builder.projectdescription = `Description entered automatically by Lorem Ipsum. ${lorem.p1}\n\n${lorem.p2}`;
            } else {
                builder.projectdescription = answer.manualdata;
            }
            BadgeImages(); // Call Badges section
        });
}

/**
 * This section takes care of two items; whether the user is using an image and display badges. The image is aread
 * included in the package -there is no way select an image from the users computer or from the internet, perhaps in 
 * future version I can build that. User can select different badges available to select; the badges were retrieved
 * from https://shields.io/badges website. 
 */
const BadgeImages = () => {
    inquirer.prompt(questions.badgesquestions)
        .then((answer) => {
            builder.includeimage = answer.includeimage; // Store wheter image is needed
            builder.tablecontents = answer.tablecontents; // Store table of contents
            if (answer.includebadge == true) {
                answer.badgeslist.forEach((badge) => {
                    builder.badgeslist.push(badge); // Store the badges selected
                });
            }
            AddLicenseSection(); // Call License questions
        });
}

/**
 * This section takes care of license section. For this example we are using the MIT license as it covers pretty much 
 * all we need to share the code. A short and simple permissive license with conditions only requiring  preservation of 
 * copyright and license notices. Licensed works, modifications, and larger works may be distributed under different 
 * terms and without source code. (ref: https://choosealicense.com/licenses/mit/)
 */
const AddLicenseSection = () => {
    inquirer.prompt(questions.license)
        .then((answer) => {
            if (answer.includelicense == true) {
                builder.includelicense = answer.includelicense // Store include license response
            }
            AddInstallation(); // Call Add installation questions
        });
}

/**
 * This section takes care of installation section, which is split in two; the first section will allow user to
 * enter the instructions and then the command line that will display as a code in the Readme file
 */
const AddInstallation = () => {
    inquirer.prompt(questions.installation)
        .then((answer) => {
            builder.includeinstallation = answer.includeinstalation;
            if (answer.includeinstalation == true) {
                builder.instructions = answer.instructions // Store instructions 
                builder.clonecommand = answer.clonecommand // Store Clonning command  
                builder.npmpackage = answer.npmpackage // Store npm package
                builder.runcommand = answer.runcommand // Store run command
            }
            ApplicationUsage();
        });
}

/**
 * This will ask about the application usage. This could be filled automatically or it can be entered manually. 
 * The automatic way uses two Lorem Ipsum parragraphs autogenerated (https://loremipsum.io/generator/).
 */
const ApplicationUsage = () => {
    inquirer.prompt(questions.appusage)
        .then((answer) => {
            if (answer.loremusage === "Lorem Ipsum") {
                builder.applicationusage = `Application usage entered automatically by Lorem Ipsum. ${lorem.p2}`;
            } else {
                builder.applicationusage = answer.customusage;
            }
            ContributionSection(); // Contribution section
        });
}

const ContributionSection = () => {
    inquirer.prompt(contribution.question)
        .then((answer) => {
            if (answer.contributions == true) {
                builder.contributiondata = contribution.paragraphdata;
            }
            writeToFile(); // Proceed to writting the file
        });
}

/**
 * This function will take care of building the table of contents. This uses variablea which
 * are available globaly so there is no need to pass parameters nor declare new working 
 * variables
 */
function BuildTableContent() {
    // This section will build the table of contents
    if (builder.tablecontents == true) {

        buildfilesrting += "<details style=\"margin-bottom: 25px; margin-top: 25px;\">\n";
        buildfilesrting += "\t<summary>Table of Contents</summary>\n";
        buildfilesrting += "\t<ol>\n";

        buildfilesrting += "\t\t<li><a href=\"#Description\">Project Description</a></li>\n";
        if (builder.instructions.length > 0) {
            buildfilesrting += "\t\t<li><a href=\"#installation\">Installation</a></li>\n";
        }
        if (builder.includelicense == true) {
            buildfilesrting += "\t\t<li><a href=\"#license\">License</a></li>\n";
        }
        if (builder.applicationusage.length > 0) {
            buildfilesrting += "\t\t<li><a href=\"#usage\">Application Usage</a></li>\n";
        }
        buildfilesrting += "\t\t<li><a href=\"#\">Acknowledgments</a></li>\n";

        buildfilesrting += "\t</ol>\n";
        buildfilesrting += "</details>\n";
    }
}

/**
 * This function will build the Installation Section of the Readme file. It uses variablea which
 * are available globaly so there is no need to pass parameters nor declare new working 
 */
function BuildInstallationSection() {
    // This section creates the installation area
    buildfilesrting += "<div id=\"installation\" style=\"margin-bottom: 20px;margin-top: 20px;\">" + sp;
    buildfilesrting += "# Installation" + sp;
    buildfilesrting += builder.instructions + sp;
    buildfilesrting += "1. Clone the Readme-bot repository\n";
    buildfilesrting += "\t```js\n";
    buildfilesrting += "\t" + builder.clonecommand + "\n";
    buildfilesrting += "\t```\n";
    buildfilesrting += "2. Install NPM Packaged\n";
    buildfilesrting += "\t```js\n";
    buildfilesrting += "\t" + builder.npmpackage + "\n";
    buildfilesrting += "\t```\n";
    buildfilesrting += "3. Run CLI application\n";
    buildfilesrting += "\t```js\n";
    buildfilesrting += "\t" + builder.runcommand + "\n";
    buildfilesrting += "\t```\n";
    buildfilesrting += "</div>" + sp;
    buildfilesrting += "<p align=\"right\">(<a href=\"#readme-top\">back to top</a>)</p>" + sp
}

/**
 * This function will build the License section. It uses variablea which are available globaly so
 * there is no need to pass parameters nor declare new working
 */
function BuildLicenseSection() {
    if (builder.includelicense == true) {
        buildfilesrting += "<div id=\"license\" style=\"margin-bottom: 20px;margin-top: 20px;\">" + sp;
        buildfilesrting += "# License" + sp;
        buildfilesrting += license.license + "\n";
        buildfilesrting += "<p align=\"right\">(<a href=\"#readme-top\">back to top</a>)</p>\n";
        buildfilesrting += "</div>" + sp;
    }
}

/**
 * This function will generate the description section. It uses variablea which are available 
 * globaly so there is no need to pass parameters nor declare new working
 */
function BuildDescription() {
    buildfilesrting += "<div id=\"Description\" style=\"margin-top: 25px;\">" + sp;
    buildfilesrting += "# Description" + sp;
    buildfilesrting += builder.projectdescription + sp;
    buildfilesrting += "Here is my product!" + sp
    buildfilesrting += "<div style=\"margin-top: 15px;\">\n"
    buildfilesrting += "\t<img src=\"./assets/images/node001.png\">\n"
    buildfilesrting += "</div>\n";
    buildfilesrting += "</div>" + sp;
    buildfilesrting += "<p align=\"right\">(<a href=\"#readme-top\">back to top</a>)</p>" + sp
}

/**
 * This function will generate the badges section. It uses variablea which are available 
 * globaly so there is no need to pass parameters nor declare new working
 */
function BuildBadgesSection() {
    if (builder.badgeslist.length > 0) {

        buildfilesrting += "<p align=\"center\" style=\"margin-top:25px; margin-bottom:50px;\">\n";

        builder.badgeslist.forEach((badge) => {
            const badgeparts = badge.split("/"); // Badges are split between the label/message and a random color assigned
            let color = questions.colors[Math.floor(Math.random() * 6)] // Retrieve randon number from 0 to 6
            buildfilesrting += "\t<a><img src=\"https://img.shields.io/static/v1.svg?label=" + badgeparts[0] + "&message=" + badgeparts[1] + "&color=" + color + "\"/></a>\n";
        });

        buildfilesrting += "</p>" + sp;
    }
}

/**
 * This function will generate a section that is common and only contains static information. 
 * It uses variablea which are available globaly so there is no need to pass parameters nor 
 * declare new working
 */
function CommonSection(idname, title, data) {
    if (builder.applicationusage.length > 0) {
        buildfilesrting += "<div id=\"" + idname + "\" style=\"margin-top: 25px;\">" + sp;
        buildfilesrting += "## " + title + sp;
        buildfilesrting += data + sp;
        buildfilesrting += "<p align=\"right\">(<a href=\"#readme-top\">back to top</a>)</p>" + sp
        buildfilesrting += "</div>" + sp;
    }
}

/**
 * Entry point for the application. File will trigger this when it finishes
 * loading
 */
init();
//writeToFile();