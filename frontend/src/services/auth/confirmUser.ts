import { cognitoUser } from "../../pools/UserPool";

export const confirmUser = (email: string, confirmationCode: string) => {
  return new Promise((resolve, reject) => {
    cognitoUser(email).confirmRegistration(
      confirmationCode,
      true,
      function (err, result) {
        if (err) {
          return reject(err);
        } else return resolve(result);
      }
    );
  });
};
