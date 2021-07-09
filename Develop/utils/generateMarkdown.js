// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license.map(el => {
    console.log(el)
    if (el === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/Licenses/MIT)`;
    } else if (el === 'GNU') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else {
      return;
    };
  })
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Included in the badge ^^^^

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license.map(el => {
    if (el === 'MIT') {
      return `
  MIT License

  Copyright <YEAR> <COPYRIGHT HOLDER>

  Permission is hereby granted, free of charge, to any person obtaining a copy 
  of this software and associated documentation files (the "Software"), to deal 
  in the Software without restriction, including without limitation the rights to 
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
  of the Software, and to permit persons to whom the Software is furnished to do 
  so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all 
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `;
    } else if (el === 'GNU') {
      return `
  GNU GENERAL PUBLIC LICENSE
  Version 3, 29 June 2007

  Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>

  Everyone is permitted to copy and distribute verbatim copies of this 
  license document, but changing it is not allowed.
      `;
    } else {
      return '';
    };
  });
};

const createTableOfContents = flag => {
  if (flag) {
    return `
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [How to Use](#How-to-use)
  * [Collaborators](#collaborators)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
    `
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}
  # ${data.projectName}
  ${createTableOfContents(data.tableOfContents)}
  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## How to Use
  ${data.usage}

  ## Collaborators
  ${data.collab}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  Have Questions? Ask them at <a href="http://github.com/${data.github}">${data.github}</a> or <a href="mailto:${data.email}">${data.email}</a>

  ## License
  ${renderLicenseSection(data.license)}
  
`;
}

module.exports = generateMarkdown;
