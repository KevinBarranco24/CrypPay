/* tslint:disable */
/* eslint-disable */
import { Country } from './country';
import { State } from './state';
export interface Address {
  altitude?: number;
  country?: Country;
  description?: null | string;
  id?: number;
  latitude?: number;
  longitude?: number;
  name?: null | string;
  postalcode?: null | string;
  state?: State;
  updatedAt?: string;
}
