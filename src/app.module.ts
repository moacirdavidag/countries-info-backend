import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesInfoModule } from './countries-info/countries-info.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), CountriesInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
