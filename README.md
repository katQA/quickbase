# QUICKBASE_DEMO Project

This project is meant as a demo project for Quickbase. Which implements few tests executed on http://webdriver.io

## Dependencies used

1. Webdriver io -> The automation framework tool we use to automate the web app.
2. Typescript and ts-node.
3. Cucumber -> Framework used for Behavior-Driven Development (BDD) 

## Installation
1. Clone the git repo `git clone `
2. Go to the project folder and run `npm install`
3. To execute the tests run `npm run wdio`

## Project structure

```
features
│── pageobjects
│── step-definitions
config files
```

**features** -> This is where we store the feature files (tests).

**pageobjects** -> This is where we keep the specific selectors and methods for a specific page

**step-definitions** -> This is where we implement the steps from the feature files

**config-files** -> This is where we store config files for the project
