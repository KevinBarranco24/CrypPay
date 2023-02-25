/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Media } from './media';
export interface MediaListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Media>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
