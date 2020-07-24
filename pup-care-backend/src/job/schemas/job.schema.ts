import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop()
  date: Date;

  @Prop({ default: false })
  approved: boolean;

  @Prop()
  owner: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'User'
  }

  @Prop()
  pet: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'Pet'
  }

  @Prop()
  carer: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'User'
  }

  @Prop({ default: [] })
  applicants: [{
    type: MongooseSchema.Types.ObjectId,
    ref: 'User'

  }]
}

export const JobSchema = SchemaFactory.createForClass(Job);