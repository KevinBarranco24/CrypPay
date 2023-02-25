/* tslint:disable */
/* eslint-disable */
import { ClassRatingResult } from './class-rating-result';
import { HttpStatusCode } from './http-status-code';
export interface ClassRatingResultGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: ClassRatingResult;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
