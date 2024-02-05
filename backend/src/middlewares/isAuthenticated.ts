import { CognitoJwtVerifier } from "aws-jwt-verify";
import { NextFunction, Request, Response } from "express";

const poolData = {
  UserPoolId: process.env.COGNITO_POOL!,
  ClientId: process.env.COGNITO_CLIENT_ID!,
};

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.headers["authorization"]!;
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  //Checking authentication with CognitoJwtVerifier
  const verifier = CognitoJwtVerifier.create({
    userPoolId: poolData.UserPoolId,
    tokenUse: "access",
    clientId: poolData.ClientId,
  });

  try {
    const payload = await verifier.verify(accessToken);
    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
