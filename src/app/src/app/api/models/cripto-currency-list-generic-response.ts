/* tslint:disable */
/* eslint-disable */
import { CriptoCurrency } from './cripto-currency';
import { HttpStatusCode } from './http-status-code';
export interface CriptoCurrencyListGenericResponse {
  errorMessage?: null | string;
  exceptionMessage?: null | string;
  response?: null | Array<CriptoCurrency>;
  statusCode?: HttpStatusCode;
  sucess?: boolean;
}
