/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
export interface Int64GenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: number;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
