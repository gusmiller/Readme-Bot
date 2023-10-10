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

const parragraphoptions = ["Lorem Ipsum", "Standard Text", "Free-Typing"]

const question = [
      {
            type: 'confirm',
            name: 'contributions',
            message: chalk.greenBright('Would you like to include a Contribution Section?'),
            default: true
      }, {
            type: "list",
            name: "loremcontribution",
            message: chalk.greenBright("How would you like to create your contribution? By.."),
            choices: parragraphoptions,
            default: "Standard Text"
      },
      {
            type: "editor",
            name: "manualcontribution",
            message: "Please enter your contribution content (you may use Markdown markup):",
            when(answer) {
                  return answer.loremcontribution === "Free-Typing";
            },
            validate(answer) {
                  if (answer.length == 0) {
                        return chalk.red('You must enter your contribution parragraph! Press Ctrl-C to cancel');
                  }
                  return true;
            },
            waitUserInput: true
      }
];

const paragraphdata =
      [
            {
                  data: "Contributions to this application are welcome! Being part of an open source community is what makes software so amazingly fun. Your contributions will be considered and **much appreciated**.\n\nWe are open to any suggestions that would make this application better and more stable. You know the process: fork the contents of my repo and create a pull request when you are done!\n\nDon't forget to give the project a star!\n\n\t1.Fork the Project\n\t2.Create your working feature.\n\t3.Do your developing (don't forget to commit often!)\n\t4.Push your branch and create a Pull request.\t\n5.Thank you! we will review your chnges.\n",
                  lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus natus iure dolorum aperiam itaque? Ipsam ad quidem quo neque aliquam natus blanditiis totam. Rerum accusantium fugit, alias numquam tenetur nemo necessitatibus laudantium officiis. Reprehenderit dolor labore iusto ut minus fugiat tempora, expedita corrupti.\n\nAb tenetur similique ipsa dolore odio earum aliquam animi ducimus optio quibusdam ipsam eos ipsum perferendis, perspiciatis quasi temporibus. Aliquam perspiciatis dolorum est expedita quo possimus, quas temporibus pariatur mollitia debitis. Ducimus sapiente impedit culpa eos alias voluptas minima corporis veniam commodi perspiciatis. At quaerat quas porro veritatis sapiente nihil fugit cumque voluptatum voluptatem recusandae alias nulla iusto, quam exercitationem, ipsa corrupti possimus eligendi repellendus!"
            }

      ];

module.exports = { question, paragraphdata };