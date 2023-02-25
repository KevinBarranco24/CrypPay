/* tslint:disable */
/* eslint-disable */
import { WalletItem } from './wallet-item';
import { WalletType } from './wallet-type';
export interface Wallet {
  id?: number;
  item?: WalletItem;
  userId?: number;
  walletType?: WalletType;
}
