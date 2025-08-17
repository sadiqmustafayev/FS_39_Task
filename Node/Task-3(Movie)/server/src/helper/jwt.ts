import jwt  from "jsonwebtoken"
import { IUserBase } from "../models/userModel.js"
import { SECRET_KEY } from "../constants/index.js"


const createToken = (tokenPayload: IUserBase) => {
  const token = jwt.sign(tokenPayload, SECRET_KEY, {expiresIn: "1h"})
  return token
}


export { createToken } 