import NiftySDK from 'nifty-protocol';
import Nifty from 'nifty-protocol';
import { env } from 'nifty-protocol/dist/types';

const niftySDK = new NiftySDK({ key: 'key', env: Nifty.envs.TESTNET as env });

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



niftySDK.getNFTs(options)
  .then((res) => {
     console.log(res);
    })
  .catch((e) => {
    console.log('e', e);
  });
  
  
  
const chains = [
  { chainId: '', name: 'All' },
  { chainId: 1, name: 'Ethereum' },
  { chainId: 137, name: 'Polygon' },
  { chainId: 56, name: 'BNB' },
  { chainId: 43114, name: 'Avalanche' },
  { chainId: 1285, name: 'Moonriver' },
  { chainId: 4, name: 'rinkeby' },
];

const sortOptions = [
  { value: 'listed_desc', label: 'Recently Listed' },
  { value: 'created_desc', label: 'Recently Minted' },
  { value: 'sold_desc', label: 'Recently Sold' },
  { value: 'price_asc', label: 'Price (Lowest to highest)' },
  { value: 'price_desc', label: 'Price (Highest to lowest)' },
  { value: 'last_sell_desc', label: 'Highest Last Sale' },
];
