/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Identity } from './identity';
export interface IdentityGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: Identity;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
