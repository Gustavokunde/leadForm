# Authentication with Cognito

To enable the functionality of this application, AWS Cognito, along with amazon-cognito-identity-js and aws-jwt-verify, was employed.

On the client side, a "pool" folder contains the configuration for the user pool, including the UserPoolId and ClientId. These parameters should be specified in the .env file, following the structure outlined in the .env_example file.

On the backend, a middleware is implemented to verify user authentication. To facilitate this functionality, the PoolId and ClientId must also be included in the .env file, following the format demonstrated in the provided .env_example. Token validation is performed using aws-jwt-verify.
