# makeReadmesEasyAgain  

## Contents  
[Description](#Description) 
 
[Development](#Development) 

[Instillation](#Instillation)

[Usage/Instruction](#Usage)

[Tests](#Tests)

[Contributors](#Contributors)

[License](#License)

[Contact](#Contact)


*  *  *  *  *

## Description
This repository contains a readme generator that takes user inputs from prompts and uses them as content for generating a readme file. The application uses the node package manager "Inquirer" to act as the mechanism to generate the command line prompts. This read.me created using this application.


## Development
First a layout was made via pen and paper to properly plan how the application would function and appear. Next I installed npm inquirer and created the prompts for user responses to eventually serve as the sections to the readme. input prompts were used for the majority of the question except for a list prompt which was used for picking out the licenses. For the list prompt a switch statement was used to pickout the desired license badge image and url. Then I created the actual string which would serve as the skeleton of the readme and string concatenation inputs to add the user responses to each section. Lastly I created a function which initializes the inquiry prompts, concatenates the users responses to the readme string skeleton then writes the entire readme string to a readme.md file.


## Instillation
To install this application first make sure your download node.js from https://nodejs.org/en/. Once you've done this simply clone this repository to a desired location on your device.


## Usage/Instructions
To use the application, the user navigates to the repositories location via the command line then runs node index.js. The user will then be prompted with a series of questions prompting responses which will be the content of the sections to the readme. Once the final question is complete the user will be prompted with a success or error statement and if successful a readme.md will be created in the repository.


## Tests
There were no tests run in this application's creation.


## Contributors
his project was created by myself alone.


## License



## Contact
For any questions or suggestions or improvment this project reach me at 

Github Profile-  https://github.com/pwg26 

Email- kcaskade@gmail.com
