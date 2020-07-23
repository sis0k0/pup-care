import { Controller, Request, Post, UseGuards, Get, SetMetadata, Req } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Roles } from './auth/roles.decorator';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @Get('users')
  getUsers(@Request() req) {
    return this.userService.getAll();
  }
}