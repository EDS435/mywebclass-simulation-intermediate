# Local Development Setup Guide

This guide will help you set up and run a local copy of the repository. Please follow the instructions below to ensure a smooth setup process.

## Prerequisites

1.  Make sure you have Node.js installed on your computer. You can download it from [here](https://nodejs.org/en/download/). This will also install npm (Node Package Manager) globally on your computer.

## Getting Started

1.  Clone the repository to your local machine by running the following command in your terminal:



- `git clone [REPO_URL]` 

- Replace `[REPO_URL]` with the actual URL of the repository.

2.  Change to the repository directory:



- `cd [REPO_NAME]` 

Replace `[REPO_NAME]` with the name of the repository folder.

3.  Install the required Node.js dependencies:



- `npm install` 

## Automated Testing

We use Playwright and Lighthouse for automated testing. When you create a new page, you must create a Playwright test using Lighthouse to gather performance and accessibility metrics.

### Writing a Playwright Test with Lighthouse

1.  Navigate to the `tests` folder inside the repository.
    
2.  Create a new test file for the new page. Name it `[PAGE_NAME].test.js`, replacing `[PAGE_NAME]` with the actual name of the page.
    
3.  Inside the test file, import the necessary libraries and set up the basic structure of the test:
    

![enter image description here](https://raw.githubusercontent.com/EDS435/mywebclass-simulation-intermediate/master/Screenshot%202023-03-24%20221209.jpg)

 

Replace the URL inside `page.goto()` with the actual URL of the page you want to test.

## Code Standard and Security

We use ESLint to ensure code quality and maintain a consistent coding standard. CodeQL is used to analyze developers' code for security vulnerabilities.

### ESLint

1.  Before committing your code, make sure it passes ESLint checks by running:



`npm run lint` 

2.  Fix any issues reported by ESLint.

### CodeQL

1.  CodeQL checks will be run automatically when you create a pull request.
    
2.  If any security vulnerabilities are detected, fix them before merging your changes.
    

## Conclusion

By following this guide, you should be able to set up the repository on your local machine and contribute to the project by creating new pages and writing the required tests. Ensure that you follow the code standard and security best practices. Happy coding!