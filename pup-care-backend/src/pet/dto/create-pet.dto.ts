import { Schema } from "mongoose";

export class CreatePetDto {
  name: string;
  breed: string;
  age: number;
  species: string;
  owner: Schema.Types.ObjectId;
}