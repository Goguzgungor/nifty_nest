import { Module } from '@nestjs/common';
import { NiftybasicService } from './niftybasic.service';
import { NiftybasicController } from './niftybasic.controller';

@Module({
    controllers: [ NiftybasicController],
    providers: [NiftybasicService],
})
export class NiftybasicModule {}
