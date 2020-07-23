import { Document, Schema } from 'mongoose';

export interface Pet extends Document {
    readonly name: string;
    readonly breed: string;
    readonly age: number;
    readonly species: string;
    readonly owner: Schema.Types.ObjectId,
}
