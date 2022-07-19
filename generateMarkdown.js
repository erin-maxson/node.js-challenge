// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license==="MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }

  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache"){
    return 'https://opensource.org/licenses/Apache-2.0';
  }

  if (license === "MIT"){
    return 'https://opensource.org/licenses/MIT';
  }

  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return ''
  }

  else {
    const link = renderLicenseLink(license)
    const badge = renderLicenseBadge(license)

    return `[![License: ${license}](${badge})](${link})`
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description} 
  
  ## Table of Contents (Optional)
  ${data.table}
  
  ## Installation
  
  ${data.installation}
   
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  
 ${data.license}
  
  ## Features
  ${data.features}
  
  ## How to Contribute
  ${data.contributions}

  By default, we've added a Contributor Covenant, 
  
  ## Tests
  ${data.tests}

  ## Have Questions?
  - Contact the contributor at [${data.github}]/(github.com/${data.github}) or via email at <${data.email}>
`;
}

module.exports = generateMarkdown;
