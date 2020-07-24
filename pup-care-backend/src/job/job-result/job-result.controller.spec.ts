import { Test, TestingModule } from '@nestjs/testing';
import { JobResultController } from './job-result.controller';

describe('JobResult Controller', () => {
  let controller: JobResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobResultController],
    }).compile();

    controller = module.get<JobResultController>(JobResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
