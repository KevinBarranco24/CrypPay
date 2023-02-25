/* tslint:disable */
/* eslint-disable */
import { Country } from './country';
import { HttpStatusCode } from './http-status-code';
export interface CountryListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Country>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
