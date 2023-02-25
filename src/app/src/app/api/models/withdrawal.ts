/* tslint:disable */
/* eslint-disable */
import { BitsoTransferWithdrawalDetails } from './bitso-transfer-withdrawal-details';
export interface Withdrawal {
  amount?: null | string;
  asset?: null | string;
  created_at?: string;
  currency?: null | string;
  details?: BitsoTransferWithdrawalDetails;
  integration?: null | string;
  method?: null | string;
  method_name?: null | string;
  network?: null | string;
  protocol?: null | string;
  status?: null | string;
  wid?: null | string;
}
