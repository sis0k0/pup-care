import { Document, Schema } from 'mongoose';

export interface Job extends Document {
    readonly date: Date;
    readonly approved: boolean;
    readonly owner: Schema.Types.ObjectId,
    readonly pet: Schema.Types.ObjectId,
    readonly carer: Schema.Types.ObjectId,
    readonly applicants: Schema.Types.ObjectId[],
}
