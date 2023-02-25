/* tslint:disable */
/* eslint-disable */
import { ActivityType } from './activity-type';
import { Address } from './address';
import { ClassRatingResult } from './class-rating-result';
import { Identity } from './identity';
import { IndustryType } from './industry-type';
import { SalesPerWeek } from './sales-per-week';
import { StoreZone } from './store-zone';
import { TimeOnBusiness } from './time-on-business';
import { TotalStores } from './total-stores';
export interface Company {
  activityType?: ActivityType;
  address?: Address;
  alreadyBankAccount?: boolean;
  alreadyBitsoWallet?: boolean;
  classRatingResult?: ClassRatingResult;
  createdAt?: string;
  digitalPaymentMethods?: boolean;
  email?: null | string;
  id?: number;
  industryType?: IndustryType;
  name?: null | string;
  owner?: Identity;
  phone?: null | string;
  privacyAdvice?: boolean;
  rfc?: null | string;
  salesPerWeek?: SalesPerWeek;
  storeZone?: StoreZone;
  termsAndConditions?: boolean;
  timeOnBusiness?: TimeOnBusiness;
  totalStores?: TotalStores;
  updatedAt?: string;
}
