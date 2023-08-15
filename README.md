# TVO
Cypress Project
I have used Cypress framework along with Javascript basics.
Node modules will not be included in the Git hub, so request you to download node modules.
The code is available in /e2e/spec.js file. (For parallel execution I have created 2 different folders with TestA and TestB for Jenkins)
Multi browser testing: I have added multiple browsers in package.json file. We can execute the command to  run the tests:      npm run test:chrome/edge/firefox
Test Cases and the setup is mentioned in sheet 
I have changed the width and height of the run in the config.json to suit to my needs

I have created a POM file, in /cypress/pageobjects/HomePage.js . I have just created only two fucntions in the .js file due to limited availability of time, but we can create and manitain
different files for different page. My goal was just to demostrate the functionality of POM.

For parallel test execution I am using cypress-gitlab-parallel-runner in package.json and I have also implemented Jenkins Pipe line as well by creating a Jenkins file. But in order to 
execute the same we will have to install Jenkins plugin and write the CLI commands in Cypress. We can also implement Cypress parallel execution in local desktop as well, but that is 
not recommended as it takes lot of CPU, unless done on a headless browser on a UNIX/LINUX machine.
![image](https://github.com/rahulsharma0403/TVO/assets/10370518/344da03f-9b49-468d-abce-f9bad783f347)
