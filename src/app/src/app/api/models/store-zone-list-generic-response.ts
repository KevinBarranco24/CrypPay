/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { StoreZone } from './store-zone';
export interface StoreZoneListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<StoreZone>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
