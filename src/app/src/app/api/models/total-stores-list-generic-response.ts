/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { TotalStores } from './total-stores';
export interface TotalStoresListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<TotalStores>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
