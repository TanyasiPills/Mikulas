import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';

@Injectable()
export class JatekService {
  create(createJatekDto: CreateJatekDto) {
    return 'This action adds a new jatek';
  }

  findAll() {
    return `This action returns all jatek`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jatek`;
  }

  update(id: number, updateJatekDto: UpdateJatekDto) {
    return `This action updates a #${id} jatek`;
  }

  remove(id: number) {
    return `This action removes a #${id} jatek`;
  }
}
