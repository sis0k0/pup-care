import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('job')
export class JobController {
    constructor(private jobService: JobService) {
    }

    @Post()
    async create(@Body() createJobDto: CreateJobDto) {
        const job = await this.jobService.create(createJobDto);

        return job;
    }

    @Get()
    async findAll(@Query() query: any) {
        const jobs = await this.jobService.findAll();
        return jobs;
    }

    @Get('/pet/:petId')
    async getPetJobs(@Param('petId') petId: string) {
        return this.jobService.findPetJobs(petId);
    }


    @Get('/owner/:ownerId')
    async getOwnerJobs(@Param('ownerId') ownerId: string) {
        return this.jobService.findOwnerJobs(ownerId);
    }


    @Get('/carer/:carerId')
    async getCarerJobs(@Param('carerId') carerId: string) {
        return this.jobService.findPetJobs(carerId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.jobService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
        return this.jobService.update(id, updateJobDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.jobService.remove(id);
    }
}
