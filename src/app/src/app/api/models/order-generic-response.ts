/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Order } from './order';
export interface OrderGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: Order;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
