import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { jobsProviders } from './job.providers';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [JobController],
  providers: [
    ...jobsProviders,
    JobService
  ]
})
export class JobModule {}
