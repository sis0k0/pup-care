import { Injectable, Inject } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Job } from './schemas/job.schema';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(
    @Inject('JOB_MODEL')
    private jobModel: Model<Job>,
  ) { }

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const createdJob = new this.jobModel(createJobDto);
    return createdJob.save();
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async findOne(id: string): Promise<Job> {
    return this.jobModel.findById(id);
  }

  async remove(_id: string): Promise<any> {
    return this.jobModel.findOneAndRemove({ _id });
  }

  async update(_id: string, update: UpdateJobDto): Promise<Job> {
    return this.jobModel.findOneAndUpdate({ _id }, (<any>update));
  }

  async findPetJobs(petString: string): Promise<Job[]> {
    const petId = Types.ObjectId(petString);
    return this.jobModel.find({ pet: (<any>petId) });
  }

  async findOwnerJobs(ownerString: string): Promise<Job[]> {
    const ownerId = Types.ObjectId(ownerString);
    return this.jobModel.find({ owner: (<any>ownerId) });
  }

  async findCarerJobs(carerString: string): Promise<Job[]> {
    const carerId = Types.ObjectId(carerString);
    return this.jobModel.find({ carer: (<any>carerId) });
  }
}
