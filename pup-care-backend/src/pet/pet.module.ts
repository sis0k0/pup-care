import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { petsProviders } from './pets.providers';
import { DatabaseModule } from '../database.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [PetController],
  providers: [
    ...petsProviders,
    PetService,
  ],
})
export class PetsModule {
    public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: 'pets', method: RequestMethod.GET},
        {path: 'pets', method: RequestMethod.POST},
        {path: 'pets', method: RequestMethod.PUT},
        {path: 'pets', method: RequestMethod.DELETE},
        {path: 'pets/user/:userId', method: RequestMethod.GET}
      )
  }
}