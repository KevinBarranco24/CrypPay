/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { Identity } from './identity';
export interface Store {
  address?: Address;
  companyId?: number;
  createdAt?: string;
  id?: number;
  name?: null | string;
  storeManager?: Identity;
  updatedAt?: string;
  users?: null | Array<Identity>;
}
