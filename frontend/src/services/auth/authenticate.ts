import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { cognitoUser } from "../../pools/UserPool";

export const authenticate = (
  email: string,
  password: string
): Promise<{ token: string }> => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });
  return new Promise((resolve, reject) => {
    cognitoUser(email).authenticateUser(authenticationDetails, {
      onSuccess: (data) => {
        console.log(data, data.getAccessToken().payload);
        return resolve({
          token: data.getAccessToken().getJwtToken(),
        });
      },
      onFailure: (err) => {
        return reject("something happened" + err);
      },
    });
  });
};
