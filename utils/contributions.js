/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/9/2023 10:30:08 PM
 * 
 * Description :
 * This file is used to declare the array for the contribution section to be use in the application 
 */

const chalk = require('chalk');

const question = [
      {
            type: 'confirm',
            name: 'contributions',
            message: chalk.greenBright('Would you like to include a Contribution Section?'),
            default: true
      }
];

const paragraphdata =
      [
            {
                  data: "Contributions to this application are welcome! Being part of an open source community is what makes software so amazingly fun. Your contributions will be considered and **much appreciated**.\n\nWe are open to any suggestions that would make this application better and more stable. You know the process: fork the contents of my repo and create a pull request when you are done!\n\nDon't forget to give the project a star! Thanks again!"
            }

      ];

module.exports = { question, paragraphdata };