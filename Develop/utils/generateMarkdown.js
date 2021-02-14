import { answers } from "./index.js";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(answers) {
  // switch(answers.license){
  //     case "MIT":
  //         let mozillabadge =[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  //         let mozillalink = (https://opensource.org/licenses/MIT)
  //     break;3

  //     case "MOZILLA"

  // }
  switch (answers.license) {
    case MIT:
      let bagelin = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) \n https://opensource.org/licenses/MIT"`;
      break;
    case MOZILLA:
      let bagelin = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)] \n(https://opensource.org/licenses/MPL-2.0)`;
      break;
    case IBM:
      let bagelin = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)] \n (https://opensource.org/licenses/IPL-1.0)`;
      break;
  }
  return bagelin;
}
