/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
export interface Int32GenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: number;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
