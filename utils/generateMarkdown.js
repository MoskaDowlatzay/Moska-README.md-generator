// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   ${data.description}

//   ## License
//   This project is licensed under the ${data.license} license.
  
//   ## Installation
//   To install required dependencies, run the following command:
//   ${data.installCommand}

  
//   ## Usage
//   ${data.usage}
  
//   ## Contribution
//   ${data.contribution}
  
//   ## Tests
//   ${data.test}
  
//   ## Questions
//   ${data.questions}
//   `;
//   }  
// module.exports = generateMarkdown;
// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.description}

${data['Table of Contents']}

## License
This project is licensed under the ${data.license} license.

## Installation
To install required dependencies, run the following command:
\`\`\`
${data.installCommand}
\`\`\`

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
