/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Int64GenericResponse } from '../models/int-64-generic-response';
import { Store } from '../models/store';
import { StoreGenericResponse } from '../models/store-generic-response';
import { StoreListGenericResponse } from '../models/store-list-generic-response';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStoreGet
   */
  static readonly ApiStoreGetPath = '/api/Store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Plain$Response(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('Id', params.Id, {});
      rb.query('currentPage', params.currentPage, {});
      rb.query('offset', params.offset, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Plain(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StoreListGenericResponse> {

    return this.apiStoreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreListGenericResponse>) => r.body as StoreListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Json$Response(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('Id', params.Id, {});
      rb.query('currentPage', params.currentPage, {});
      rb.query('offset', params.offset, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreGet$Json(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StoreListGenericResponse> {

    return this.apiStoreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreListGenericResponse>) => r.body as StoreListGenericResponse)
    );
  }

  /**
   * Path part for operation apiStorePut
   */
  static readonly ApiStorePutPath = '/api/Store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStorePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePut$Plain$Response(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStorePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStorePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePut$Plain(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStorePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStorePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePut$Json$Response(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStorePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStorePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePut$Json(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStorePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * Path part for operation apiStorePost
   */
  static readonly ApiStorePostPath = '/api/Store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStorePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePost$Plain$Response(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStorePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStorePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePost$Plain(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStorePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStorePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePost$Json$Response(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStorePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStorePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStorePost$Json(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStorePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * Path part for operation apiStoreDelete
   */
  static readonly ApiStoreDeletePath = '/api/Store';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreDelete$Plain$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreDeletePath, 'delete');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreDelete$Plain(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStoreDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreDelete$Json$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreDeletePath, 'delete');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreDelete$Json(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStoreDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * Path part for operation apiStorePaginationGet
   */
  static readonly ApiStorePaginationGetPath = '/api/Store/Pagination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStorePaginationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStorePaginationGet$Plain$Response(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Int64GenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStorePaginationGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('Id', params.Id, {});
      rb.query('splitBy', params.splitBy, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Int64GenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStorePaginationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStorePaginationGet$Plain(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<Int64GenericResponse> {

    return this.apiStorePaginationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Int64GenericResponse>) => r.body as Int64GenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStorePaginationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStorePaginationGet$Json$Response(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Int64GenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStorePaginationGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('Id', params.Id, {});
      rb.query('splitBy', params.splitBy, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Int64GenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStorePaginationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStorePaginationGet$Json(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<Int64GenericResponse> {

    return this.apiStorePaginationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Int64GenericResponse>) => r.body as Int64GenericResponse)
    );
  }

  /**
   * Path part for operation apiStoreAddUserPost
   */
  static readonly ApiStoreAddUserPostPath = '/api/Store/AddUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreAddUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreAddUserPost$Plain$Response(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreAddUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreAddUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreAddUserPost$Plain(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStoreAddUserPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreAddUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreAddUserPost$Json$Response(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreAddUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreAddUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoreAddUserPost$Json(params?: {
    body?: Store
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStoreAddUserPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * Path part for operation apiStoreRemoveUserDelete
   */
  static readonly ApiStoreRemoveUserDeletePath = '/api/Store/RemoveUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreRemoveUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreRemoveUserDelete$Plain$Response(params?: {
    userId?: number;
    storeId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreRemoveUserDeletePath, 'delete');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('storeId', params.storeId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreRemoveUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreRemoveUserDelete$Plain(params?: {
    userId?: number;
    storeId?: number;
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStoreRemoveUserDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoreRemoveUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreRemoveUserDelete$Json$Response(params?: {
    userId?: number;
    storeId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.ApiStoreRemoveUserDeletePath, 'delete');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('storeId', params.storeId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoreRemoveUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoreRemoveUserDelete$Json(params?: {
    userId?: number;
    storeId?: number;
  },
  context?: HttpContext

): Observable<StoreGenericResponse> {

    return this.apiStoreRemoveUserDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreGenericResponse>) => r.body as StoreGenericResponse)
    );
  }

}
