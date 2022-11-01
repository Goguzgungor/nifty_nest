import { Injectable } from '@nestjs/common';
import NiftySDK from 'nifty-protocol';
import { env, Item } from 'nifty-protocol/dist/types';
import Nifty from 'nifty-protocol';
import * as request from 'supertest';
import { reduceRight } from 'cypress/types/lodash';
import { NftBasicDto } from './dto/nftbasic.dto';


let niftySDK = new NiftySDK({ key: 'key', env: Nifty.envs.TESTNET as env });
@Injectable()
export class NiftybasicService {

    
    async getNiftysdk() {
        let nftResp:Item;
        const contractAddress = '0xaa6013d9c1ed5d44e262285a2f6d9b2c31cbefc4';
        const tokenID = 3000482;
        const chainId= 4
        await niftySDK.getNFT(contractAddress, tokenID, chainId)
        .then((res) => {
            nftResp = res;
            console.log(nftResp)
        });
        return nftResp;
    }

    async getNftCustom(dto:NftBasicDto) {
        let nftResp:Item;
        await niftySDK.getNFT(dto.contractAddress, dto.tokenId, dto.chainId)
        .then((res) => {
            nftResp = res;
            console.log(nftResp)
        });
        return nftResp;
    }

     async getNftList() {
        const options = {
            //chianlerin her birine id atamışlar 1'de eth var. Idleri liste şeklinde gönderiyoruz.
            //Yanlış veri girdiğimizde Status code:500 alıyoruz.
                chains:[1, 4, 56, 137, 1284, 1285, 43113, 43114],
                sort: 'price_asc',
                search: '',
                contracts: [],
                order: null,
                verified: true
                //parametreleri arttırınca saçmalıyor. Order ve verifed parametresini aynı anda verince sürekli boş liste dönüyor.Çünkü dökümantasyonda true ya da false dönecek deyip sonra null döndürmüşler.
            }
            let nftResp:Item[];

            
            
            await niftySDK.getNFTs(options)
              .then((res) => {
                nftResp = res;
                })
              .catch((e) => {
                console.log('e', e);
                return;
              });
              return nftResp;
    
   }
}
