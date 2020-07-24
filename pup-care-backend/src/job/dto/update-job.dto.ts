import { Schema } from "mongoose";

export class UpdateJobDto {
  date: Date;
  approved: boolean;
  owner: Schema.Types.ObjectId;
  pet: Schema.Types.ObjectId;
  carer: Schema.Types.ObjectId;
  applicants: Schema.Types.ObjectId[];
}
