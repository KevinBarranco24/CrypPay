/* tslint:disable */
/* eslint-disable */
import { HttpStatusCode } from './http-status-code';
import { Order } from './order';
export interface OrderListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<Order>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
