import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import { NextFunction, Request, Response } from "express";

const poolData = {
  UserPoolId: process.env.COGNITO_POOL!,
  ClientId: process.env.COGNITO_CLIENT_ID!,
};

const userPool = new CognitoUserPool(poolData);

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.headers["authorization"]!;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const authenticationData = {
    AccessToken: accessToken,
    Username: "",
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userData = {
    Username: "",
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: () => {
      next();
    },
    onFailure: (err) => {
      console.error("Authentication failed:", err);
      return res.status(401).json({ message: "Unauthorized" });
    },
  });
}
