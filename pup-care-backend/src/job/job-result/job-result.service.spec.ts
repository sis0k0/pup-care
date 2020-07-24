import { Test, TestingModule } from '@nestjs/testing';
import { JobResultService } from './job-result.service';

describe('JobResultService', () => {
  let service: JobResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobResultService],
    }).compile();

    service = module.get<JobResultService>(JobResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
