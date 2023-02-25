/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
export interface BooleanGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: boolean;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
