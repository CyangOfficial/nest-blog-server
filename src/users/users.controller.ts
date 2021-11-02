import { Body, Controller, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service'
import { LoginDto } from './dtos/login.dto'
import { JwtService } from '../jwt/jwt.service'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ){}

  @Post('register')
  async register(@Body() body) {
    return this.usersService.create(body)
  }

  @Post('login')
  async login(@Body() user: LoginDto) {
    const { username, password } = user
    const result = await this.usersService.validateUser(username, password)
    return {
      ...result,
      access_token: await this.jwtService.generateJWT(username, password)
    }
  }

  @Post('update/username')
  async updateUserName(@Request() req) {
    console.log(req)
  }
}
