function generateMarkdown(data) {
  return `# ${data.title}
${data.description}

![${data.license}](https://img.shields.io/badge/license-${data.license}-green)

${data["Table of Contents"]}

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
If you have any questions, please feel free to reach out to me via [GitHub](https://github.com/${data.githubUsername}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;
