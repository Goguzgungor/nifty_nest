import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NiftybasicController } from './niftybasic/niftybasic.controller';
import { NiftybasicService } from './niftybasic/niftybasic.service';
import { NiftybasicModule } from './niftybasic/niftybasic.module';

@Module({
  imports: [NiftybasicModule],
  controllers: [AppController, NiftybasicController],
  providers: [AppService, NiftybasicService],
})
export class AppModule {}
