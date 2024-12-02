import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JatekModule } from './jatek/jatek.module';
import { GyerekModule } from './gyerek/gyerek.module';

@Module({
  imports: [JatekModule, GyerekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
