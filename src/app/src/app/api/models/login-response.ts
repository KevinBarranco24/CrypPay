/* tslint:disable */
/* eslint-disable */
import { Identity } from './identity';
export interface LoginResponse {
  identity?: Identity;
  slidingExpiration?: string;
  token?: null | string;
}
