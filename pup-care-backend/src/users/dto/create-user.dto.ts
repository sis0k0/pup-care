import { Schema } from "mongoose";

export class CreateUserDto {
  username: string;
  password: string;
  roles?: string[];
  pets?: Schema.Types.ObjectId[];
}