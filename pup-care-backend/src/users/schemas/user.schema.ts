import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  roles: string[];

  @Prop()
  pets: [{
    type: MongooseSchema.Types.ObjectId,
    ref: 'Pet'
  }]
}

export const UserSchema = SchemaFactory.createForClass(User);