import { Connection } from 'mongoose';
import { PetSchema } from '../schemas/pet.schema';

export const petsProviders = [
  {
    provide: 'PET_MODEL',
    useFactory: (connection: Connection) => connection.model('Pet', PetSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
