import { Injectable, Inject } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateJobResultDto } from '../dto/create-job-result.dto';
import { JobResult } from '../schemas/job-result.schema';

@Injectable()
export class JobResultService {
  constructor(
    @Inject('JOB_RESULT_MODEL')
    private jobResultModel: Model<JobResult>,
  ) { }

  async create(createJobResultDto: CreateJobResultDto): Promise<JobResult> {
    const createdJobResult = new this.jobResultModel(createJobResultDto);
    return createdJobResult.save();
  }

  async findAll(): Promise<JobResult[]> {
    return this.jobResultModel.find().exec();
  }

  async findOne(id: string): Promise<JobResult> {
    return this.jobResultModel.findById(id);
  }

  async remove(_id: string): Promise<any> {
    return this.jobResultModel.findOneAndRemove({ _id });
  }

  async findJobJobResults(jobString: string): Promise<JobResult[]> {
    const jobId = Types.ObjectId(jobString);
    return this.jobResultModel.find({ job: (<any>jobId) });
  }

  async findPetJobResults(petString: string): Promise<JobResult[]> {
    const petId = Types.ObjectId(petString);
    return this.jobResultModel.find({ pet: (<any>petId) });
  }

  async findCarerJobResults(carerString: string): Promise<JobResult[]> {
    const carerId = Types.ObjectId(carerString);
    return this.jobResultModel.find({ carer: (<any>carerId) });
  }
}
