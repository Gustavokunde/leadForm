import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { userPool } from "../../pools/UserPool";

export const registerUser = (
  email: string,
  password: string,
  phone: string
) => {
  const dataPhoneNumber = {
    Name: "phone_number",
    Value: phone,
  };
  const userAttribute = new CognitoUserAttribute(dataPhoneNumber);

  userPool.signUp(email, password, [userAttribute], [], (err, data) => {
    if (err) {
      return console.log("something went wrong:", err);
    }

    return console.log("user created");
  });
};
