/* tslint:disable */
/* eslint-disable */
import { ClassRatingResult } from './class-rating-result';
import { HttpStatusCode } from './http-status-code';
export interface ClassRatingResultListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<ClassRatingResult>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
