import {hashSync, compareSync } from "bcrypt";

const getHashedPassword = (password: string) => hashSync(password, 10);

const getPasswordStatus = (password: string, oldPassword: string) =>
  compareSync(password, oldPassword);

export { getHashedPassword, getPasswordStatus }