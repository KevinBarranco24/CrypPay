/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { State } from './state';
export interface StateListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<State>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
