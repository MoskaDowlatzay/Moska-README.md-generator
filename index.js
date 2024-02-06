const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
    },
    {
        type: 'list',  
        name: 'license',  
        message: 'Choose a license for your project:', 
        choices: ['MIT','GPL v3','Apache License 2.0'],
    },
    {
        type:'input',
        name:'installCommand',
        message:'If applicable, please provide the command to install required dependencies:',
    },
    {
        type:'input',
        name:'usage',
        message:'Please provide usage information:'
    },
    {
        type:'input',
        name:'contribution',
        message:`How can users contribute to this project?`,
    },
    {
        type:'input',
        name:'test',
        message:'Do you have any tests for your application and if so, what are they?',
    },
    {
        type: "input", 
        name: "questions",
        message: "Questions?",
    },
];
// Function to generate the table of contents
function generateTableOfContents(sections) {
    let toc = "# Table of Contents\n\n";
    sections.forEach(section => {
        // Convert section title to lowercase and replace spaces with hyphens
        let anchorName = section.toLowerCase().replace(/\s+/g, "-");
        toc += `- [${section}](#${anchorName})\n`;
    });
    return toc;
}
// function to write README file
function writeToFile(fileName, data) {
    // Use fs.writeFile to write data to a file
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} has been generated successfully!`);
    });
// }
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then((data)=> {
        console.log("Generating README...");
        // Generate table of contents from section titles
        const sections = ['Introduction', 'Installation', 'Usage', 'Contributing', 'License', 'Questions'];
        const tableOfContents = generateTableOfContents(sections);

        // Append table of contents to generated markdown
        data['Table of Contents'] = tableOfContents;

        const markdown = generateMarkdown(data);
        writeToFile('README.md',markdown);
        console.log("README generated!")
    })
}

// Initialize the app by running `node index` in terminal
init(); 
