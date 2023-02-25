/* tslint:disable */
/* eslint-disable */
import { AccountStatus } from './account-status';
import { Gender } from './gender';
import { Role } from './role';
export interface Identity {
  accountStatusId?: AccountStatus;
  dob?: null | string;
  email?: null | string;
  firstname?: null | string;
  gender?: Gender;
  id?: number;
  lastLoginDate?: null | string;
  lastname?: null | string;
  middlename?: null | string;
  password?: null | string;
  phone?: null | string;
  role?: Role;
}
