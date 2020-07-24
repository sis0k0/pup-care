import { Model, Types } from 'mongoose';
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

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const createdPet = new this.petModel(createPetDto);
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

  async findUserPets(ownerString: string): Promise<Pet[]> {
    const ownerId = Types.ObjectId(ownerString);
    return this.petModel.find({ owner: (<any>ownerId) });
  }
}
