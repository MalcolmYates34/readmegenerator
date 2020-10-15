function generateMarkdown(data) {
        return `
  # **${data.title}**
  
  ## Description 
  ${data.description}
  ## Table of contents
 * [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Resources](#resources)
* [Tests](#tests)
* [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Licence
  ${data.licence}
  ## Contributors
  ${data.contributing}
  ## Test
  ${data.test}

  ## Questions
For more information:
Visit: (https://${data.username}.github.io)
Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
