import { Document } from 'mongoose';
import { Species } from 'src/pet/species';

export interface Pet extends Document {
    readonly name: string;
    readonly breed: string;
    readonly age: number;
    readonly species: Species;
}
