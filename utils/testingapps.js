/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment - 09 Readme Bot
 * Date : 10/11/2023 2:03:16 PM
 * 
 * Description :
 * This file is used to declare the array for the testing instructions for the application 
 */

const chalk = require('chalk');

const options = ["Lorem Ipsum", "Standard Text", "Free-Typing"]

const questions = [
      {
            type: 'confirm',
            name: 'confirmation',
            message: chalk.cyan('Would you like to include a Testing Section?'),
            default: true
      }, {
            type: "list",
            name: "typetext",
            message: chalk.cyanBright("How would you like to create the Testing content? By.."),
            choices: options,
            default: "Standard Text",
            when(answer) {
                  return answer.confirmation === true;
            }
      },
      {
            type: "editor",
            name: "manualtext",
            message: chalk.cyanBright("Please enter your Testing content (you may use Markdown markup):"),
            when(answer) {
                  return answer.confirmation === true && answer.typetext === "Free-Typing";
            },
            validate(answer) {
                  if (answer.length == 0) {
                        return chalk.red('You must enter a context! Press Ctrl-C to cancel');
                  }
                  return true;
            },
            waitUserInput: true
      }
];

const paragraphdata =
      [
            {
                  data: "Testing the Readme-bot application is very important.\n\nWe want to make sure we have all the sections tested and that our Readme file is being created correctly.\n\nYou can enter the following sections in the readme-bot application:\n\n\t1.Provide the Application Name\n\t2.Application Description.\n\t3.Provide Badges (optional)\n\t4.Application License (optional).\t\n5.Installation Process (optional).\n\t6.Application Usage (optional).\n\t7.Contributions Section (optional).\n\t8.Contact section (optional).\n\t9.Testing Application (optional).",
                  lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus natus iure dolorum aperiam itaque? Ipsam ad quidem quo neque aliquam natus blanditiis totam. Rerum accusantium fugit, alias numquam tenetur nemo necessitatibus laudantium officiis:\n\n\t1.Reprehenderit dolor labore iusto ut minus fugiat\n\t2.tempora, expedita corrupti.\n\t3.Ab tenetur similique ipsa dolore odio earum\n\t4.aliquam animi ducimus optio quibusdam\n\t5.psam eos ipsum perferendis, perspiciatis\n\t6.quasi temporibus. Aliquam perspiciatis\n\t7.dolorum est expedita quo possimus, quas\n\t8.temporibus pariatur mollitia debitis.\n\t9.Ducimus sapiente impedit culpa eos.\n\nAlias voluptas minima corporis veniam commodi perspiciatis. At quaerat quas porro veritatis sapiente nihil fugit cumque voluptatum voluptatem recusandae alias nulla iusto, quam exercitationem, ipsa corrupti possimus eligendi repellendus!"
            }

      ];

module.exports = { questions, paragraphdata };