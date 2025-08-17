import { Schema, model } from "mongoose";


export enum Role {
  USER = "user",
  ADMIN = "admin",
}

export interface IUserBase{
  name: string,
  surname: string,
  email: string,
  role: Role,
}

export interface IUser extends IUserBase{
  email: string,
  password: string,
}

const userSchema = new Schema<IUser>({
  name: {type: Schema.Types.String, required: true},
  surname: {type: Schema.Types.String, required: true},
  email: {type: Schema.Types.String, required: true, unique: true},
  password: {type: Schema.Types.String, required: true},
  role: {type: Schema.Types.String, required: true,  enum:[Role.ADMIN, Role.USER], default: Role.USER},

}, 
{timestamps: true})


const userModel = model<IUser>("users", userSchema)

export default userModel