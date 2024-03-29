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
 *          Contributing, (done)
 *          Tests
 */

// Include packages needed for this application
const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const contribution = require('./utils/contributions.js');
const questions = require('./utils/arrays.js');
const lorem = require('./utils/parragraphs.js');
const licenseList = require('./utils/license.js');
const testapps = require('./utils/testingapps.js');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const sp = "\n\n";
const readmefile = "Readme-new.md";

let buildfilesrting = "";

let builder = {
     productname: "",
     projectdescription: "",
     nameSolution: "",
     applicationusage: "",
     instructions: "",
     contactdata: "",
     contactproject: "",
     clonecommand: "",
     npmpackage: "",
     runcommand: "",
     licenseSelect: "",
     testingformation: "",
     includetesting: false,
     includeusage: false,
     includecontributions: false,
     contributiondata: "",
     includeimage: false,
     tablecontents: false,
     includelicense: false,
     includeinstallation: false,
     badgeslist: []
};


/**
 * This function is the one that generates the readme file.
 */
function writeToFile() {

     let data = `The purpose of this Readme-bot is to help developers create their project Readme.md file that is required for ALL projects. Over time this application can save the developer lots of time, as this is a tedious process. The Readme-bot can be enhanced and there is growth for much more.\n\nDo not hesitate in contacting me, ${builder.contactdata}.\n\nYou may find the application at: ${builder.contactproject}\n\nThe current application contains the following questions:\n\n- What is the name of your package?\n- How you want to enter the description?\n- Would you like to include Carleton image?\n- Would you like to include Table of Contents?\n- Would you like to include badges?\n- Please select the badges you like to include HTML5/Websites, .NET/Platform, javascript/Language, jQuery/Language\n- Do you want to include an MIT license?\n- Would you like to include the Installation Section?\n- Please enter the instructions: **Please follow the instructions to install the Readme-bot CLI application**\n- Please enter the cloning github repo (this will be displayed as code): **git clone {repository}**\n- Please enter the NPM initialize command (this will be displayed as code): **npm install**\n- Please enter the command to launch the application (this will be displayed as code): **node index.js**\n- Would you like to include Application Usage Section?\n- How you want to enter the Usage Information? - **Lorem Ipsum or Free-Typing**\n- Would you like to include a Contribution Section?\n- How would you like to create your contribution? By.. **Lorem Ipsum, Standard Text or Free-Typing**\n- Do you want to include a Contact me and Questions Section?\n- Please enter your Contact information?\n- Please enter your GitHub Repository address?\n- Would you like to include a Testing Section?\n- How would you like to create the Testing content? By.. **Lorem Ipsum, Standard Text or Free-Typing**\n`

     buildfilesrting = "<a id=\"readme-top\" name=\"readme-top\"></a>" + sp; // Instantiate file content
     if (builder.includeimage == true) {
          buildfilesrting += "<p align=\"center\"><img src=\"./assets/images/carleton-u-logo.jpg\" height=\"250\"></p>" + sp
     }

     BuildBadgesSection() // This will build the badges section

     buildfilesrting += "# " + builder.productname;
     buildfilesrting += sp;

     BuildTableContent(); // Build the table of contents
     BuildDescription(); // Build the description section
     BuildInstallationSection(); // Build the Installation section
     
     CommonSection("usage", "Application Usage", builder.applicationusage, builder.includeusage) // Build the application usage section
     CommonSection("contribution", "Contributing ", builder.contributiondata, builder.includecontributions) // Build the application usage section
     CommonSection("contactme", "Questions? Contact Me ", data, builder.includecontact) // Contact / Questions
     CommonSection("testing", "Testing Application ", builder.testingformation, builder.includetesting) // Build the testing section

     buildMIT("license", "License", builder.includelicense, builder.licenseSelect) // Build MIT license

     buildfilesrting += `---\n© ${currentYear} edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. Developed by Gustavo Miller`;

     fs.writeFile(readmefile, buildfilesrting, (err) =>
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

     // Validate whether file exists or not
     if (fs.existsSync(readmefile)) {

          fs.unlink(readmefile, (err) => {
               if (err) {
                    console.error(`Error deleting file: ${err}`);
               }
          });
     }

     inquirer.prompt(questions.packagename)
          .then((answer) => {
               if (answer.productname === "") {
                    return;
               } else {
                    builder.productname = answer.productname; // Store the product name in readme builder
                    ApplicationName(); // Retrieve project description
               }
          });
};

const ApplicationName = () => {

     inquirer.prompt(questions.applicationName)
          .then((answer) => {
               if (answer.appname === "") { return; }
               builder.nameSolution = answer.appname;
               ProjectDescription(); // Call Badges section
          });
}

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

               if (answer.includebadge === true) {
                    answer.badgeslist.forEach((badge) => {
                         builder.badgeslist.push(badge); // Store the badges selected
                    });
               }

               AddLicenseSection(); // Call License questions

          });
}

/**
 * This will return the licence key from the array.
 * @param {*} keyToFind 
 * @returns 
 */
function findByKey(keyToFind) {
     return licenseList.find(item => item.key === keyToFind).text;
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
               if (answer.licenseSelect !== null) {

                    builder.licenseSelect = answer.licenseSelect
                    builder.includelicense = true // Store include license response
                    builder.badgeslist.push(`License/${answer.licenseSelect}`);

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
               builder.includeinstallation = answer.includeinstalation; // Include or not Installation
               if (builder.includeinstallation === true) {
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

               builder.applicationusage = ""; // Make sure is not undefined

               //Validate whether we are displaying section
               if (answer.applicationusage === true) {

                    builder.includeusage = true; // Conditional for usage section

                    if (answer.loremusage === "Lorem Ipsum") {
                         builder.applicationusage = `Application usage entered automatically by Lorem Ipsum. ${lorem.p2}`;
                    } else {
                         builder.applicationusage = answer.customusage;
                    }

               }

               ContributionSection(); // Contribution section
          });
}

/**
 * This will ask about the Contribution section usage. This could be filled automatically or it can be entered manually. 
 * The automatic way uses two Lorem Ipsum parragraphs autogenerated (https://loremipsum.io/generator/).
 * User may be able to create the section using their default editor.
 */
const ContributionSection = () => {
     inquirer.prompt(contribution.question)
          .then((answer) => {
               if (answer.contributions == true) {

                    builder.includecontributions = true;

                    if (answer.loremcontribution === "Lorem Ipsum") {
                         builder.contributiondata = contribution.paragraphdata[0].lorem;
                    } else if (answer.loremcontribution === "Standard Text") {
                         builder.contributiondata = contribution.paragraphdata[0].data;
                    } else {
                         builder.contributiondata = answer.manualcontribution;
                    }

               }
               ContactMeSection(); // Proceed to writting the file
          });
}

/**
 * This will ask about the Contact Me section usage. 
 */
const ContactMeSection = () => {
     inquirer.prompt(questions.contactme)
          .then((answer) => {
               if (answer.includecontact == true) {

                    builder.includecontact = true;
                    builder.contactdata = answer.contactdata;
                    builder.contactproject = answer.contactproject;

               }
               TestingApplication(); // Testing application 
          });
}

/**
 * This function will prompt user about the Testing section. This could be filled automatically or it can be entered manually. 
 * The automatic way uses two Lorem Ipsum parragraphs autogenerated (https://loremipsum.io/generator/).
 * User may be able to create the section using their default editor.
 * This create the final section of the Readme file 
 */
const TestingApplication = () => {
     inquirer.prompt(testapps.questions)
          .then((answer) => {
               if (answer.confirmation == true) {

                    builder.includetesting = true;

                    if (answer.typetext === "Lorem Ipsum") {
                         builder.testingformation = testapps.paragraphdata[0].lorem;
                    } else if (answer.typetext === "Standard Text") {
                         builder.testingformation = testapps.paragraphdata[0].data;
                    } else {
                         builder.testingformation = answer.manualtext;
                    }

               }
               writeToFile(); // Proceed to writting the file
               AssertChanges(); // Hack to persist changes to file
          });
}

/************************************************************************************************
 *                R E P O R T - G E N E R A T O R S E C T I O N
 ************************************************************************************************/

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

          buildfilesrting += "\t\t<li><a href=\"#Description\">Generator Description</a></li>\n";
          if (builder.instructions.length > 0) {
               buildfilesrting += "\t\t<li><a href=\"#installation\">Installation</a></li>\n";
          };
          if (builder.includeusage === true) {
               buildfilesrting += "\t\t<li><a href=\"#usage\">Application Usage</a></li>\n";
          };
          if (builder.includecontributions === true) {
               buildfilesrting += "\t\t<li><a href=\"#contribution\">Contributions</a></li>\n"
          };
          if (builder.includecontact === true) {
               buildfilesrting += "\t\t<li><a href=\"#contactme\">Questions? Contact Me!</a></li>\n"
          };
          if (builder.includetesting === true) {
               buildfilesrting += "\t\t<li><a href=\"#testing\">Testing Application</a></li>\n"
          };
          if (builder.includelicense === true) {
               buildfilesrting += "\t\t<li><a href=\"#license\">License</a></li>\n";
          };

          buildfilesrting += "\t</ol>\n";
          buildfilesrting += "</details>\n";
     }
}

/**
 * This function will build the Installation Section of the Readme file. It uses variablea which
 * are available globaly so there is no need to pass parameters nor declare new working 
 */
function BuildInstallationSection() {

     if (builder.includeinstallation == true) {

          buildfilesrting += "<div id=\"installation\" style=\"margin-bottom: 20px;margin-top: 20px;\">" + sp;
          buildfilesrting += "## Installation" + sp;
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
}

/**
 * This function will generate the description section. It uses variablea which are available 
 * globaly so there is no need to pass parameters nor declare new working
 */
function BuildDescription() {
     buildfilesrting += "<div id=\"Description\" style=\"margin-top: 25px;\">" + sp;
     buildfilesrting += `## ${builder.nameSolution}` + sp;
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
 * globaly so there is no need to pass parameters nor declare new working. Notice that if we are implementing
 * a badges section then add the two lines after.
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
function CommonSection(idname, title, data, includesection) {
     if (includesection === true) {
          buildfilesrting += "<div id=\"" + idname + "\" style=\"margin-top: 25px;\">" + sp;
          buildfilesrting += "## " + title + sp;
          buildfilesrting += data + sp;
          buildfilesrting += "<p align=\"right\">(<a href=\"#readme-top\">back to top</a>)</p>" + sp
          buildfilesrting += "</div>" + sp;
     }
}

/**
 * This function will generate the MIT section it is based on the common but it includes a badge
 * It uses variablea which are available globaly so there is no need to pass parameters nor 
 * declare new working
 */
function buildMIT(idname, title, includesection, licenseSelect) {
     if (includesection === true) {

          const urladdress = `<a><img src=\"https://img.shields.io/static/v1.svg?label=License&message=${licenseSelect}&color=yellow\"/></a>`;

          buildfilesrting += "<div id=\"" + idname + "\" style=\"margin-top: 25px;\">" + sp;
          buildfilesrting += "## " + title + ` - ${licenseSelect}` + sp;
          buildfilesrting += `Copyright © ${currentYear} - ${builder.nameSolution}` + sp;
          buildfilesrting += findByKey(licenseSelect) + sp;
          buildfilesrting += urladdress + sp;
          buildfilesrting += "<p align=\"right\">(<a href=\"#readme-top\">back to top</a>)</p>" + sp
          buildfilesrting += "</div>" + sp;
     }
}

/**
 * This is a fix for a problem I encountered. When creating multiple times the Readme.md file the previewer will load
 * a cached version not reflecting the changes made to the Readme.md file. This might be a bug, but this ensures the 
 * file is touched before completion. Last file would be the created prior to this last action. This should not happens
 * unless file is created many many times.
 */
function AssertChanges() {
     fs.appendFile(readmefile, '.', (e, data) => {
          if (e) {
               console.error(`Error appending space to the file: ${e}`);
          }
     });
}

/**
 * Entry point for the application. File will trigger this when it finishes
 * loading
 */
init();