/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Wallet } from './wallet';
export interface WalletListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Wallet>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
