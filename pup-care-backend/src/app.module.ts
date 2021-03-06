import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { AuthMiddleware } from './auth/auth.middleware';
import { PetService } from './pet/pet.service';
import { PetsModule } from './pet/pet.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [AuthModule, UsersModule, PetsModule, JobModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: 'users', method: RequestMethod.GET},
        {path: 'users', method: RequestMethod.POST},
        {path: 'users', method: RequestMethod.PUT},
        {path: 'users', method: RequestMethod.DELETE},
        {path: 'profile/:username', method: RequestMethod.GET}
      )
  }
}
