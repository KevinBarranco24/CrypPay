/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { HttpStatusCode } from './http-status-code';
export interface AddressListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Address>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
