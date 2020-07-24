import { Schema } from "mongoose";

export class CreateJobDto {
  date: Date;
  approved: boolean;
  owner: string;
  pet: string;
  carer: string;
  applicants: Schema.Types.ObjectId[];
}
