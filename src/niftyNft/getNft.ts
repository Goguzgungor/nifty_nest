
import NiftySDK from 'nifty-protocol';
import Nifty from 'nifty-protocol';
import { env } from 'nifty-protocol/dist/types';

//Çalışıyor

const niftySDK = new NiftySDK({ key: 'key', env: Nifty.envs.TESTNET as env });
const contractAddress = '0xaa6013d9c1ed5d44e262285a2f6d9b2c31cbefc4';
const tokenID = 3000482;
const chainId= 4

niftySDK.getNFT(contractAddress, tokenID, chainId)
  .then((res) => {
    console.log(res);
  });
