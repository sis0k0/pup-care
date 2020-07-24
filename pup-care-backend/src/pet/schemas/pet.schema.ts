import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Pet extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  breed: string;

  @Prop({ required: true })
  species: string;

  @Prop()
  image: string;

  @Prop()
  owner: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'User'
  }
}

export const PetSchema = SchemaFactory.createForClass(Pet);