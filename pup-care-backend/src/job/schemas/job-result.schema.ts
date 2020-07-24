import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class JobResult extends Document {
  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  job: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'Job'
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
}

export const JobResultSchema = SchemaFactory.createForClass(JobResult);