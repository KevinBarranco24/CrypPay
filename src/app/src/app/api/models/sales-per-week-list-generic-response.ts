/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { SalesPerWeek } from './sales-per-week';
export interface SalesPerWeekListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<SalesPerWeek>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
