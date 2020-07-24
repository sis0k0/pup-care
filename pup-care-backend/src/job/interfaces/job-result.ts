import { Document, Schema } from 'mongoose';

export interface JobResult extends Document {
    readonly startDate: Date;
    readonly endDate: Date;
    readonly job: Schema.Types.ObjectId;
    readonly pet: Schema.Types.ObjectId,
    readonly carer: Schema.Types.ObjectId,
}
