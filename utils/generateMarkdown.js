// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return " "; /* empty string */
  }

  switch (license) {
    case "MIT":
      return (license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
    case "GNU GPL v3":
      return (license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
    case "Boost Software License 1.0":
      return (license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)%22)");
    case "Apache 2.0":
      return (license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
    case "other":
      return (license = "[![License: LICENSE NAME HERE](BADGE IMG SRC LINK HERE)](BADGE LINK HERE)");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return " "; /* empty string */
  }

  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "GNU GPL v3": 
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "Boost Software License 1.0":
      return "(https://www.boost.org/LICENSE_1_0.txt)%22)";
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "other":
      return "(BADGE LINK HERE)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return " "; /* empty string */
  }

  var licenseLink = renderLicenseLink(license);
  var licenseBadge = renderLicenseBadge(license);

  return `##license

  ${licenseBadge}

  This project is licensed under [${license}](${licenseLink}) license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Description
${data.description}

#Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

# Installation
In order to run this properly you must install, ${data.installation}

# Usage
To use this app you must, ${data.usage}

# Contributing
${data.contributing}

# Tests
${data.tests}

#License
[![License](https://img.shields.io/badge/License-${answers.license}-blue)](https://opensource.org/licenses/${license})

# Questions

If have any questions for me, please [contact me](mailto:${data.email})`;
}

module.exports = generateMarkdown;
