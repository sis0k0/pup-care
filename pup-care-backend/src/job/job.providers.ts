import { Connection } from 'mongoose';
import { JobSchema } from './schemas/job.schema';
import { JobResultSchema } from './schemas/job-result.schema';

export const jobsProviders = [
  {
    provide: 'JOB_MODEL',
    useFactory: (connection: Connection) => connection.model('Job', JobSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'JOB_RESULT_MODEL',
    useFactory: (connection: Connection) => connection.model('JobResult', JobResultSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
