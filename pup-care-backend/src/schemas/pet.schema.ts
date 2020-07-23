
import * as mongoose from 'mongoose';

export const PetSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  species: String,
});