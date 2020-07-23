import { Schema } from "mongoose";

export class UpdateUserDto {
  username: string;
  password: string;
  roles: string[];
  pets?: Schema.Types.ObjectId[];
}