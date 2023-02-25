/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Wallet } from './wallet';
export interface WalletGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: Wallet;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
