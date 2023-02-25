/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Identity } from './identity';
export interface IdentityListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Identity>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
