/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { LoginResponse } from './login-response';
export interface LoginResponseGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: LoginResponse;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
