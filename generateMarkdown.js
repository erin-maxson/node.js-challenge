// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license==="MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }

  else if() {
    return String();
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description} 
  
  ## Table of Contents (Optional)
  ${renderTableOfContents(data.table)}
  
  ## Installation
  
  ${data.installation}
   
  ## Usage
  ${renderUsage(data.usage)}
  
  ## Credits
  ${renderCredits(data.credits)}
  
  ## License
  
 ${renderLicenseBadge(data.license)}
  
  ## Features
  ${renderFeatures(data.features)}
  
  ## How to Contribute
  ${renderContributions(data.contributions)}
  
  ## Tests
  ${renderTests(data.tests)}

  ## Have Questions?
  ${renderGithub(data.github)}, ${renderEmail(data.email)}
`;
}

module.exports = generateMarkdown;
