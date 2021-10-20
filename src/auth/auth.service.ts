import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { LoginInputDto } from './dtos/login.input'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    console.log(user)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    throw new UnauthorizedException('账号或密码错误')
  }

  async generateJWT(username: string, password: string) {
    const payload = { username, password }
    return this.jwtService.sign(payload)
  }

  async login(user: LoginInputDto) {
    const { username, password } = user
    console.log('user:', user)
    const result = await this.validateUser(username, password)
    return {
      ...result,
      access_token: await this.generateJWT(username, password)
    }
  }
}
