import { Species } from "src/pet/species";

export class CreatePetDto {
  name: string;
  breed: string;
  age: number;
  species: Species;
}