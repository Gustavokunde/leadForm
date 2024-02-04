import { cognitoUser } from "../../pools/UserPool";

export const confirmUser = (email: string, confirmationCode: string) => {
  cognitoUser(email).confirmRegistration(
    confirmationCode,
    true,
    function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    }
  );
};
