/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { TimeOnBusiness } from './time-on-business';
export interface TimeOnBusinessListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<TimeOnBusiness>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
