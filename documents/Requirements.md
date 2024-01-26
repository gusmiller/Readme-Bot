## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 

 > Description,<br/> 
 > Table of Contents,<br/> 
 > Installation,<br/> 
 > Usage,<br/> 
 > License,<br/> 
 > Contributing,<br/> 
 > Tests, and<br/> 
 > Questions

WHEN I enter my project title<br/>
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br/>
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options<br/>
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username<br/>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address<br/>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents<br/>
THEN I am taken to the corresponding section of the README