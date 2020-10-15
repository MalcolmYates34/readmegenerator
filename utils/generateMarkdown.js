function generateMarkdown(data) {
        return `
  # **${data.title}**
  
  ## Description 
  ${data.description}
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
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
