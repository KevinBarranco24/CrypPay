/* tslint:disable */
/* eslint-disable */
import { Company } from './company';
import { HttpStatusCode } from './http-status-code';
export interface CompanyListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Company>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
