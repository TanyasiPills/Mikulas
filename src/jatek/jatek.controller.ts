import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { JatekService } from './jatek.service';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';

@Controller('jatek')
export class JatekController {
  constructor(private readonly jatekService: JatekService) {}

  @Post()
  create(@Body() createJatekDto: CreateJatekDto) {
    return this.jatekService.create(createJatekDto);
  }

  @Get()
  findAll() {
    return this.jatekService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const stuff = await this.jatekService.findOne(+id);   
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateJatekDto: UpdateJatekDto) {
    const stuff = await this.jatekService.update(+id, updateJatekDto);
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const stuff = await this.jatekService.remove(+id);
    if(stuff == undefined) throw new NotFoundException();
    return stuff;
  }
}
