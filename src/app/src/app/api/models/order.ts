/* tslint:disable */
/* eslint-disable */
import { OrderStatus } from './order-status';
export interface Order {
  amount?: number;
  asset?: null | string;
  createdAt?: string;
  currency?: null | string;
  description?: null | string;
  fromWalletId?: number;
  id?: number;
  status?: OrderStatus;
  storeId?: number;
  toWalletId?: number;
}
