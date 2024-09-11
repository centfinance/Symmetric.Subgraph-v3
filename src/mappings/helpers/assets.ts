// This file is automatically generated and contains assets from telos.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssetAggregators: Address[][];
}

export const USDC_ADDRESS = Address.fromString('0x8d97cea50351fb4329d591682b148d43a0c3611b');
export const USDT_ADDRESS = Address.fromString('0x975ed13fa16857e83e7c493c7741d556eaad4a3f');
export const USDM_ADDRESS = Address.fromString('0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x8d97cea50351fb4329d591682b148d43a0c3611b'), // USDC
    Address.fromString('0x975ed13fa16857e83e7c493c7741d556eaad4a3f'), // USDT
    Address.fromString('0x8f7D64ea96D729EF24a0F30b4526D47b80d877B9'), // USDM
  ],
  pricingAssets: [
    Address.fromString('0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E'), // WTLOS
    Address.fromString('0x71fd3b5e53e444ed1e8309b578cffd7d33294c59'), // myaUSDC
    Address.fromString('0xc8994727bf84b432a9955403e4335a874c1ae919'), // myaUSDT
    Address.fromString('0x542a31176829f9dda137942c7cabbb4533523ad3'), // myaUSDM
    Address.fromString('0xf0333afa20b852776911edb986061cef1376b4fe'), // myaUSD
    Address.fromString('0xd5f2a24199c3dfc44c1bf8b1c01ab147809434ca'), // tSYMM
    Address.fromString('0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905'), // STLOS
    Address.fromString('0x058D4893eFa235D86CcEeD5a7Eef0809B76c8c66'), // USDC-USDT
    Address.fromString('0xa3b4AeE7B43B2Fb390420c411ec180B0ae87E9da'), // SOULS
  ],
  fxAssets: [],
  fxAggregators: [],
};
