/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { IndustryType } from './industry-type';
export interface IndustryTypeListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<IndustryType>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
