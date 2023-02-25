/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Store } from './store';
export interface StoreListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Store>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
