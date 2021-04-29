// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license.map(element => {
    console.log(element)
    if (element === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/Licenses/MIT)`;
    } else if (element === 'GNU') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else {
      return;
    };
  })
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}
  # ${data.projectName}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Use
  ${data.usage}

  ## Collaborators
  ${data.collab}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  Have Questions? Ask them at ${data.github} or ${data.email}
  
`;
}

module.exports = generateMarkdown;
