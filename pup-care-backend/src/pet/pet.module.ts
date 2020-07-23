import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { petsProviders } from './pets.providers';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PetController],
  providers: [
    ...petsProviders,
    PetService,
  ],
})
export class PetsModule {}