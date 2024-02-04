import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { userPool } from "../../pools/UserPool";

export const registerUser = async (
  email: string,
  password: string,
  phone: string
) => {
  const dataPhoneNumber = {
    Name: "phone_number",
    Value: phone,
  };
  const userAttribute = new CognitoUserAttribute(dataPhoneNumber);

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, [userAttribute], [], (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve("user created");
    });
  });
};
