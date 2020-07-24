import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';
import { Roles } from 'src/auth/roles.decorator';

@Controller('pets')
export class PetController {
    constructor(private petService: PetService) {
    }

    @Roles('owner')
    @Post()
    async create(@Body() createPetDto: CreatePetDto) {
        const pet = await this.petService.create(createPetDto);

        return pet;
    }

    @Roles('owner')
    @Get()
    async findAll(@Query() query: any) {
        const pets = await this.petService.findAll();
        return pets;
    }

    @Roles('owner')
    @Get('/user/:userId')
    async getUserPets(@Param('userId') userId: string) {
        return this.petService.findUserPets(userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.petService.findOne(id);
    }

    @Roles('owner')
    @Put(':id')
    update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        return this.petService.update(id, updatePetDto);
    }

    @Roles('owner')
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.petService.remove(id);
    }
}
