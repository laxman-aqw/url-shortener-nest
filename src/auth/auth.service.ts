import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignUpUserDto } from './dto/signup-user-dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async signUp(signUpUserDto: SignUpUserDto): Promise<any> {
    const user = await this.userService.create(signUpUserDto);
    if (user?.password !== 'pass') {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    //todo jwt
    return result;
  }
}
