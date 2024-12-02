import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekService {

  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createJatekDto: CreateJatekDto) {
    return this.db.jatek.create({data: createJatekDto});
  }

  findAll() {
    return this.db.jatek.findMany();
  }

  async findOne(id: number) {
    try{
      return await this.db.jatek.findFirst({where: {id}});
    } catch {return undefined;}
  }

  async update(id: number, UpdateJatekDto: UpdateJatekDto) {
    try{
      if(await this.db.jatek.findFirst({where:{id}}) == null) return undefined;
      return await this.db.jatek.update({where: {id}, data: UpdateJatekDto});
    } catch {return undefined;}
  }

  async remove(id: number) {
    try{
      return await this.db.jatek.delete({where: {id}});
    } catch {return undefined;}
  }
}
