import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';

@Controller('pets')
export class PetController {
    constructor(private petService: PetService) {
    }

    @Post()
    async create(@Body() createPetDto: CreatePetDto) {
        const pet = await this.petService.create(createPetDto);

        return pet;
    }

    @Get()
    async findAll(@Query() query: any) {
        const pets = await this.petService.findAll();
        return pets;
    }

    @Get('/user/:userId')
    async getUserPets(@Param('userId') userId: string) {
        return this.petService.findUserPets(userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.petService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        return this.petService.update(id, updatePetDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.petService.remove(id);
    }
}
