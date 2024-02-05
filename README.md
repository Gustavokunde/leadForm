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

