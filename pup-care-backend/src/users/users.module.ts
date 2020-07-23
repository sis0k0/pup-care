import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usersProviders,
    UsersService
  ],
  exports: [UsersService],
})
export class UsersModule {}