/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { HttpStatusCode } from './http-status-code';
export interface AddressGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: Address;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
