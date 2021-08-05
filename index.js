const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the project title?",
            name: "name"
        },
        {
            type: "input",
            message: "Describe your project and why you built it.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "installation"  
        },
        {
            type: "input",
            message: "Provide instructions and examples for use.",
            name: "usage"
        },      
        {
            type: "input",
            message: "Explain guidlines for contributing.",
            name: "contributing"
        },
        {
            type: "tests",
            message: "Provide examples of how to run tests for your application.",
            name: "tests"
        },
        {
            type: "list",
            message: "Under which license is this application covered?",
            name: "license",
            choices: [
                "the GNU AFFERO GENERAL PUBLIC LICENSE Version 3",
                "the GNU GENERAL PUBLIC LICENSE Version 3", 
                "the GNU LESSER GENERAL PUBLIC LICENSE Version 3",
                "the Mozilla Public License Version 2.0",
                "the Apache License Version 2.0",
                "the MIT License",
                "the Boost Software License Version 1.0",
                "the Unlicense"
                ]
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github"  
        }   
    ])
    .then((responses)=>{
        fs.writeFile( `$README.md`,generateReadme(responses),(err)=>{
            err ? console.error(err) : console.log("Success!");
        })
    });

function generateReadme(responses) {

    switch (responses.license) {
        case "the GNU AFFERO GENERAL PUBLIC LICENSE Version 3":
            var badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            break;
        case "the GNU GENERAL PUBLIC LICENSE Version 3":
            var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "the GNU LESSER GENERAL PUBLIC LICENSE Version 3":
            var badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
        case "the Mozilla Public License Version 2.0":
            var badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
            break;
        case "the Apache License Version 2.0":
            var badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "the MIT License":
            var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "the Boost Software License Version 1.0":
            var badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
        case "the Unlicense":
            var badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
      }

//GIVEN a command-line application that accepts user input

//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//WHEN I enter my project title
//THEN this is displayed as the title of the README

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README

    return `
# ${responses.name}

${badge}

## Description 
${responses.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## License
This application is covered under ${responses.license}.

## Contributing
${responses.contributing}

## Tests
${responses.tests}

## Questions
You can reach me with questions at ${responses.email} or view my github page at https://github.com/${responses.github}.
    `
}