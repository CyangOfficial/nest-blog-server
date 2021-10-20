import * as bcrypt from 'bcrypt'
export const encrypt = async (password: string) => {
  return await bcrypt.hash(password, 10)
}