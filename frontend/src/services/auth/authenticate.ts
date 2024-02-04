import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { cognitoUser } from "../../pools/UserPool";

export const authenticate = (email: string, password: string) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });
  cognitoUser(email).authenticateUser(authenticationDetails, {
    onSuccess: () => {
      console.log("user authenticated");
    },
    onFailure: (err) => {
      console.log("something happened", err);
    },
  });
};
