/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/8/2023 8:56:08 PM
 * 
 * Description :
 * This file contains the Questions / contact me information. This was implemented late in the
 * project as I was late in understanding the requirements of the assignment
 */

let content = function (contactdata, contactproject) {
    return `The purpose of this Readme-bot is to help developers create their project Readme.md file that is required for ALL projects. Over time this application can save the developer lots of time, as this is a tedious process. The Readme-bot can be enhanced and there is growth for much more.\n\nDo not hesitate in contacting me, ${contactdata}.\nYou may find the application at: [Project Readme-bot](${contactproject})\n\nThe current application contains the following questions:\n\n- What is the name of your package?\n- How you want to enter the description?\n- Would you like to include Carleton image?\n- Would you like to include Table of Contents?\n- Would you like to include badges?\n- Please select the badges you like to include HTML5/Websites, .NET/Platform, javascript/Language, jQuery/Language\n- Do you want to include an MIT license?\n- Would you like to include the Installation Section?\n- Please enter the instructions: **Please follow the instructions to install the Readme-bot CLI application**\n- Please enter the cloning github repo (this will be displayed as code): **git clone {repository}**\n- Please enter the NPM initialize command (this will be displayed as code): **npm install**\n- Please enter the command to launch the application (this will be displayed as code): **node index.js**\n- Would you like to include Application Usage Section?\n- How you want to enter the Usage Information? - **Lorem Ipsum or Free-Typing**\n- Would you like to include a Contribution Section?\n- How would you like to create your contribution? By.. **Lorem Ipsum, Standard Text or Free-Typing**\n- Do you want to include a Contact me and Questions Section?\n- Please enter your Contact information?\n- Please enter your GitHub Repository address?\n- Would you like to include a Testing Section?\n- How would you like to create the Testing content? By.. **Lorem Ipsum, Standard Text or Free-Typing**\n`
}

module.exports = content;