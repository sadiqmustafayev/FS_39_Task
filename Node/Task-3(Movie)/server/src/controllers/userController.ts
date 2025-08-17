import { getHashedPassword, getPasswordStatus } from "../helper/bcrypt.js"
import { createToken } from "../helper/jwt.js"
import userModel, { IUser, IUserBase, Role } from "../models/userModel.js"
import { Request, Response } from "express"

const register = async (req:Request, res:Response) => {
  const {name, surname, email, password} = req.body

  const newUser: IUser = {
    name, 
    surname,
    email,
    password: getHashedPassword(password),
    role: Role.USER
  }

  try {
    const createUserResp = await userModel.create(newUser)
    if(createUserResp.name){  
      res.status(201).json({message: createUserResp})
    }
    res.json({res: createUserResp})
  } catch (error) {
    res.status(500).json({message:error})
  }
}

const login = async (req:Request, res:Response) => {
  const {email, password} = req.body
  
  if(!email.trim() || !password.trim()) { 
    return res.send(400).json({message: "Crendentials required!"})
  }

  try {
    const currentUser = await userModel.findOne({email})

    if(!currentUser){
      return res.status(404).json({ message: "User not found" })
    }
    
    const isCorrectPassword = getPasswordStatus(password, currentUser.password)

    if(!isCorrectPassword){
      return res.status(404).json({message: "Password is wrong!"})
    }

    const tokenPayload: IUserBase = {
      email: currentUser.email,
      name: currentUser.name,
      surname: currentUser.surname,
      role: currentUser.role,
    }
    const token = createToken(tokenPayload)
    res.json({message: "Login success!", data:token})
    
  } catch (error) {
    res.status(500).json({message: error})
  }
}

export {login, register};