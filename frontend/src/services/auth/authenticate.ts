import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { cognitoUser } from "../../pools/UserPool";

export const authenticate = (email: string, password: string) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });
  return new Promise((resolve, reject) => {
    cognitoUser(email).authenticateUser(authenticationDetails, {
      onSuccess: () => {
        return resolve("user authenticated");
      },
      onFailure: (err) => {
        return reject("something happened" + err);
      },
    });
  });
};
