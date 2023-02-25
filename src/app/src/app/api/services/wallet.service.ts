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

import { BooleanGenericResponse } from '../models/boolean-generic-response';
import { WalletGenericResponse } from '../models/wallet-generic-response';
import { WalletListGenericResponse } from '../models/wallet-list-generic-response';
import { WalletRequest } from '../models/wallet-request';

@Injectable({
  providedIn: 'root',
})
export class WalletService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiWalletGet
   */
  static readonly ApiWalletGetPath = '/api/Wallet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletGet$Plain$Response(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WalletListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WalletService.ApiWalletGetPath, 'get');
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
        return r as StrictHttpResponse<WalletListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWalletGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletGet$Plain(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<WalletListGenericResponse> {

    return this.apiWalletGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WalletListGenericResponse>) => r.body as WalletListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletGet$Json$Response(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WalletListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WalletService.ApiWalletGetPath, 'get');
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
        return r as StrictHttpResponse<WalletListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWalletGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletGet$Json(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<WalletListGenericResponse> {

    return this.apiWalletGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WalletListGenericResponse>) => r.body as WalletListGenericResponse)
    );
  }

  /**
   * Path part for operation apiWalletPost
   */
  static readonly ApiWalletPostPath = '/api/Wallet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWalletPost$Plain$Response(params?: {
    body?: WalletRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WalletGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WalletService.ApiWalletPostPath, 'post');
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
        return r as StrictHttpResponse<WalletGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWalletPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWalletPost$Plain(params?: {
    body?: WalletRequest
  },
  context?: HttpContext

): Observable<WalletGenericResponse> {

    return this.apiWalletPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WalletGenericResponse>) => r.body as WalletGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWalletPost$Json$Response(params?: {
    body?: WalletRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WalletGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WalletService.ApiWalletPostPath, 'post');
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
        return r as StrictHttpResponse<WalletGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWalletPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiWalletPost$Json(params?: {
    body?: WalletRequest
  },
  context?: HttpContext

): Observable<WalletGenericResponse> {

    return this.apiWalletPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WalletGenericResponse>) => r.body as WalletGenericResponse)
    );
  }

  /**
   * Path part for operation apiWalletWalletIdDelete
   */
  static readonly ApiWalletWalletIdDeletePath = '/api/Wallet/{walletId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletWalletIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletWalletIdDelete$Plain$Response(params: {
    walletId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WalletService.ApiWalletWalletIdDeletePath, 'delete');
    if (params) {
      rb.path('walletId', params.walletId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWalletWalletIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletWalletIdDelete$Plain(params: {
    walletId: number;
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiWalletWalletIdDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWalletWalletIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletWalletIdDelete$Json$Response(params: {
    walletId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WalletService.ApiWalletWalletIdDeletePath, 'delete');
    if (params) {
      rb.path('walletId', params.walletId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWalletWalletIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWalletWalletIdDelete$Json(params: {
    walletId: number;
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiWalletWalletIdDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

}
