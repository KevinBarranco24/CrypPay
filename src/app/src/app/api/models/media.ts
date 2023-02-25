/* tslint:disable */
/* eslint-disable */
import { MediaStorageType } from './media-storage-type';
import { MediaType } from './media-type';
export interface Media {
  createdAt?: string;
  fileType?: MediaType;
  id?: number;
  mediaStorageType?: MediaStorageType;
  name?: null | string;
  route?: null | string;
  url?: null | string;
}
