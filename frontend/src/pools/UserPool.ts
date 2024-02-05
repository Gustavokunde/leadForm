import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_COGNITO_POOL,
  ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
};

//creation of userPool to get access to users auth data
const userPool = new CognitoUserPool(poolData);

//Setup of cognito user in order to make registration and login with cognito control
const cognitoUser = (email: string) =>
  new CognitoUser({
    Pool: userPool,
    Username: email,
  });

export { cognitoUser, userPool };
