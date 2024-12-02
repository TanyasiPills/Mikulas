import { Module } from '@nestjs/common';
import { JatekService } from './jatek.service';
import { JatekController } from './jatek.controller';

@Module({
  controllers: [JatekController],
  providers: [JatekService],
})
export class JatekModule {}
