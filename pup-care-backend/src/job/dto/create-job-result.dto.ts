import { Schema } from "mongoose";

export class CreateJobResultDto {
  startDate: Date;
  endDate: Date;
  job: Schema.Types.ObjectId;
  pet: Schema.Types.ObjectId;
  carer: Schema.Types.ObjectId;
}
