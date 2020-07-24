import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { jobsProviders } from './job.providers';
import { DatabaseModule } from '../database.module';
import { JobResultService } from './job-result/job-result.service';
import { JobResultController } from './job-result/job-result.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [JobController, JobResultController],
  providers: [
    ...jobsProviders,
    JobService,
    JobResultService
  ]
})
export class JobModule {}
