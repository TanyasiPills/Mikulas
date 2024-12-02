import { ConflictException, Injectable } from '@nestjs/common';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { PrismaService } from 'src/prisma.service';
import { Gyerek } from './entities/gyerek.entity';
import { log } from 'console';
import { disconnect } from 'process';

@Injectable()
export class GyerekService {

  db: PrismaService;

  constructor(db: PrismaService){
    this.db = db;
  }

  create(createGyerekDto: CreateGyerekDto) {
    return this.db.gyerek.create({data: createGyerekDto});
  }
  async addJatek(id: number, jatekid: number){
    try{
      const heo = await this.db.gyerek.findFirst({where:{id}});
      console.log(heo);
      if(heo.joVolt) {
        console.log("what?");
        return await this.db.gyerek.update({where: {id, joVolt: true}, data: {jatekok: {connect: {id: jatekid}}}, include: {jatekok: true}}); 
      }
      else return 0;
    } catch {return undefined;}
  }

  async deleteJatek(id: number, jatekidfrfr: number){
    try{      
        return await this.db.gyerek.update({where: {id}, data: {jatekok: {disconnect: {}}}, include: {jatekok: true}});
    } catch {return undefined;}
  }

  findAll() {
    return this.db.gyerek.findMany({include: {jatekok: true}});
  }

  findOne(id: number) {
    return this.db.gyerek.findFirst({where: {id}, include: {jatekok: true}});
  }
  update(id: number, updateGyerekDto: UpdateGyerekDto) {
    return this.db.gyerek.update({where: {id}, data: updateGyerekDto});
  }

  async remove(id: number) {
    try{
      return await this.db.gyerek.delete({where:{id}});
    }
    catch {return undefined;}
  }
}
