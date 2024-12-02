import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { JatekModule } from './jatek/jatek.module';
import { GyerekModule } from './gyerek/gyerek.module';

@Module({
  imports: [SongsModule, PlaylistsModule, JatekModule, GyerekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
