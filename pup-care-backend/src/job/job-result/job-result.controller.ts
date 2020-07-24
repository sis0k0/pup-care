import { Controller, Post, Body, Get, Query, Param, Delete } from '@nestjs/common';
import { JobResultService } from './job-result.service';
import { CreateJobResultDto } from '../dto/create-job-result.dto';

@Controller('jobResult')
export class JobResultController {
    constructor(private jobResultService: JobResultService) {
    }

    @Post()
    async create(@Body() createJobResultDto: CreateJobResultDto) {
        const jobResult = await this.jobResultService.create(createJobResultDto);

        return jobResult;
    }

    @Get()
    async findAll(@Query() query: any) {
        const jobResults = await this.jobResultService.findAll();
        return jobResults;
    }

    @Get('/pet/:petId')
    async getPetJobResults(@Param('petId') petId: string) {
        return this.jobResultService.findPetJobResults(petId);
    }

    @Get('/carer/:carerId')
    async getCarerJobResults(@Param('carerId') carerId: string) {
        return this.jobResultService.findPetJobResults(carerId);
    }
 
    @Get('/job/:jobId')
    async getJobJobResults(@Param('jobId') jobId: string) {
        return this.jobResultService.findJobJobResults(jobId);
    }

   @Get(':id')
    findOne(@Param('id') id: string) {
        return this.jobResultService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.jobResultService.remove(id);
    }
}
