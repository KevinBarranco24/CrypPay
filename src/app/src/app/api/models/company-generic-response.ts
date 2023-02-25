/* tslint:disable */
/* eslint-disable */
import { Company } from './company';
import { HttpStatusCode } from './http-status-code';
export interface CompanyGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: Company;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
