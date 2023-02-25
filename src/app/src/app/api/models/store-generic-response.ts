/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Store } from './store';
export interface StoreGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: Store;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
