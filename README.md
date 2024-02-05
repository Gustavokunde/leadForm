# Introduction

This is a simple application with Cognito Register and Authentication control that has a simple lead form generation. It was used vite + React + typescript in the frontend side and also formik + yup for form generations. For styling it was opted to use styled components due it's simplicitly and well combination in React environment.

For the backend side, it was opted to use sqlite3 to save the data and it was created a very simple architecture just to have the main creation of the user lead data.

#Instructions to run the application
In order to make the application to run, you need to provide env variables first both for frontend and backend in each of those folders. After that, you need to install the dependecies on each side (both client and server) by running "npm install". Then to run frontend you only need to run "npm run dev" and to run the backend you need to run script "npm start" only.

# Authentication with Cognito

To enable the functionality of this application, AWS Cognito, along with amazon-cognito-identity-js and aws-jwt-verify, was employed.

On the client side, a "pool" folder contains the configuration for the user pool, including the UserPoolId and ClientId. These parameters should be specified in the .env file, following the structure outlined in the .env_example file.

On the backend, a middleware is implemented to verify user authentication. To facilitate this functionality, the PoolId and ClientId must also be included in the .env file, following the format demonstrated in the provided .env_example. Token validation is performed using aws-jwt-verify.

# Git flow

To facilitate collaboration in this project, I have established a structured environment following git flow patterns with two main branches and additional branches created as required.

The primary shared branches include:

- master: Holds stable code ready for production deployment.
- develop: Houses code currently in progress, typically within the sprint (if using Scrum). It incorporates completed development work that is yet to be deployed to the production environment.

Additionally, we have specific branches for ongoing work:

- feature/x: Dedicated to work in progress for individual feature tasks. These branches are created from the develop branch.
- hotfix/x: Reserved for addressing urgent issues. Hotfix branches are created from the master branch when needed.

# Simple bug fixed:
In order to show how I would solve a bug, there was created a hotfix branch to hide and show password field in login page.

# Improvements

There were certaintly lots of enhancements to be done, such as unit testings, improvings in user experience and also architecture refactor based on growth needs.
