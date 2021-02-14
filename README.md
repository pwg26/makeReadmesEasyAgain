
# makeReadmesEasyAgain 
 
## Contents  
[Description](#Description) 

[Development](#Development)

[Instillation](#Instillation)

[Usage](#Usage)

[Tests](#Tests)

[Contributors](#Contributors)

[License](#License)

[Contact](#Contact)


*  *  *  *  *

## Description
This repository contains a readme generator that takes user inputs from prompts and uses them as inputs for generating a readme file. The application uses the node package manager "Inquirer" to as the mechanism to generate the command line prompts. This read.me created useing this application

## Development
First a layout was made via pen and paper to properly plan how the apllication would function and appear. Next I installed npm inquier and created the prompts for user input responses for the sections of the eventual readme. input prompts were used for the majority of the question exept for a list prompt which was usded for picking out the licenses. For the list prompt a switch statment was used to pickout the desire licesnse badge image and ur. Then I created the actual string which would serve as the skeloton of the readme and string concatination to add the user resonses to each seaction. Lastely I created a fucntion which intitializes the inquiry prompts, concatonates the users responses to the readme string skeloton then writes the entire read me string to a readme.md file

## Installation
To intal this application first make sure your donwload node.js from https://nodejs.org/en/. Once you've done this simply clone this repositry to a desired location on your device.


## Usage
To use the application navigate to the repositories location via the command line and run node index.js. You will then be prompted with a series of questions prompting responses which will be the content of the sections to your repository. onces the final qeustion is complete you will be prompted with a success or error statment and if successful a readme.md will be created in the repository.

## Tests
There were no tests run in this applications creation.


## Contributors
This project was created by myself alone


## License
NONE


## Contact
For any questions or suggestions or improve the application reach me at...

Github-  https://github.com/pwg26 

Email- kcaskade@gmail.com


