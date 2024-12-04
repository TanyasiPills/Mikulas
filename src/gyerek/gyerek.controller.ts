import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put, ConflictException } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';

@Controller('gyerek')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}

  @Post()
  create(@Body() createGyerekDto: CreateGyerekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  @Get()
  findAll() {
    return this.gyerekService.findAll();
  }

  @Put(':id/jatek/:jatekid')
  async addJatek(@Param('id') id : string, @Param('jatekid') jatekid : string){
    const stuff = await this.gyerekService.addJatek(+id, +jatekid)
    if(stuff == undefined) throw new NotFoundException();
    if(stuff == 0) throw new ConflictException();
    return stuff;
  }
  @Delete(':id/jatek/:jatekid')
  async deleteJatek(@Param('id') id : string){
    const stuff = await this.gyerekService.deleteJatek(+id);
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const stuff = await this.gyerekService.findOne(+id);
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekDto) {
    const stuff = await this.gyerekService.update(+id, updateGyerekDto);
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const stuff = await this.gyerekService.remove(+id);
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }
}
