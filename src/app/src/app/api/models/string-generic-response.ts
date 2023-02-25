/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
export interface StringGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | string;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
