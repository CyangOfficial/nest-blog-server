import { string } from '@hapi/joi'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { encrypt } from '../../shared/utils'
import { User } from '../interfaces/user.interface'

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  email: {
    teyp: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: '',
    required: false
  }
}, {
  collection: 'user',
  timestamps: true
})

// pre前置钩子 密码加密
UserSchema.pre<User>('save', async function (next) {
  this.password = await encrypt(this.password)
  next()
})

// 密码检验
UserSchema.methods.comparePassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password)
}