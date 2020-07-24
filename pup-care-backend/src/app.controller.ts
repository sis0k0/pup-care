import { Controller, Request, Post, UseGuards, Get, SetMetadata, Req, Body, Put, Param, Delete } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Roles } from './auth/roles.decorator';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UpdateUserDto } from './users/dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile/:username')
  getProfile(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  // @Roles('admin')
  @Get('users')
  getUsers(@Request() req) {
    return this.userService.getAll();
  }

  @Post('users')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put('users/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('users/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}