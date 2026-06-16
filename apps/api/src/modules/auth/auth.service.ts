import * as bcrypt from 'bcrypt';
import {UnauthorizedException, Injectable} from '@nestjs/common'
import {PrismaService} from '../prisma/prisma.service'
import {JwtService} from '@nestjs/jwt'
import {LoginDto} from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(dto:LoginDto) {
    const {email, password} = dto
    const user =
      await this.prisma.user.findUnique({
        where: { email },
      });

    if (!user) {
      throw new UnauthorizedException();
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password,
      );

    if (!valid) {
      throw new UnauthorizedException();
    }

    return {
      accessToken:
        await this.jwt.signAsync({
          sub: user.id,
          email: user.email,
          role: user.role,
        }),
    };
  }
}