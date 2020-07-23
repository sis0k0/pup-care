import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './interfaces/pet';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetService {
  constructor(
    @Inject('PET_MODEL')
    private petModel: Model<Pet>,
  ) { }

  async create(createCatDto: CreatePetDto): Promise<Pet> {
    const createdPet = new this.petModel(createCatDto);
    return createdPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async findOne(id: string): Promise<Pet> {
    return this.petModel.findById(id);
  }

  async remove(_id: string): Promise<any> {
    return this.petModel.findOneAndRemove({ _id });
  }

  async update(_id: string, update: UpdatePetDto): Promise<Pet> {
    return this.petModel.findOneAndUpdate({ _id }, update);
  }
}
