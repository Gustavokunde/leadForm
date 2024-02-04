import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_COGNITO_POOL,
  ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

const cognitoUser = (email: string) =>
  new CognitoUser({
    Pool: userPool,
    Username: email,
  });

export { cognitoUser, userPool };
