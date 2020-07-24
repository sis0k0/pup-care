import { Schema } from "mongoose";

export class UpdatePetDto {
  name: string;
  breed: string;
  age: number;
  species: string;
  image: string;
  owner: Schema.Types.ObjectId;
}