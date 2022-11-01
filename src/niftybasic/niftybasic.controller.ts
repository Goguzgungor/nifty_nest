import { Body, Controller, Get } from '@nestjs/common';
import { NiftybasicService } from './niftybasic.service';
import { Item } from 'nifty-protocol/dist/types';
import { getNft, getCustomNft } from './decorator/niftybasic.decorator';
import { NftBasicDto } from './dto/nftbasic.dto';

@Controller('niftybasic')
export class NiftybasicController {
    constructor(private readonly appService: NiftybasicService) {}
    @getNft()
    async getNft(){
    const res: Item = await  this.appService.getNiftysdk();
    return {'response':res};
    }
    @getCustomNft('getCustomNft')
    async getCustomNft(@Body() nftDto:NftBasicDto){
    const res: Item = await  this.appService.getNftCustom(nftDto);
    return {'response':res};
    }

    @Get('getNftList')
    async getNftList() {
    const res: Item[] = await this.appService.getNftList();
    return {'response':res};

        
    }

}
