# TVO
Cypress Project
I have used Cypress framework along with Javascript basics.

The code is available in /e2e/spec.js file.
Multi browser testing: I have added multiple browsers in package.json file. We can execute the command to  run the tests:      npm run test:chrome/edge/firefox
Test Cases and the setup is mentioned in sheet 
I have changed the width and height of the run in the config.json to suit to my needs

I have created a POM file, in /cypress/pageobjects/HomePage.js . I have just created two fucntions in the .js file due to limited availability of time, but we can create and manitain
different files for different page. My goal was just to demostrate the functionality of POM.

For parallel test execution I am using cypress-gitlab-parallel-runner in package.json

