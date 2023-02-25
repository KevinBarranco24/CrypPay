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

import { OrderGenericResponse } from '../models/order-generic-response';
import { OrderListGenericResponse } from '../models/order-list-generic-response';
import { OrderRequest } from '../models/order-request';
import { WithdrawalWebhook } from '../models/withdrawal-webhook';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrderGet
   */
  static readonly ApiOrderGetPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain$Response(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
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
        return r as StrictHttpResponse<OrderListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<OrderListGenericResponse> {

    return this.apiOrderGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderListGenericResponse>) => r.body as OrderListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json$Response(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
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
        return r as StrictHttpResponse<OrderListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<OrderListGenericResponse> {

    return this.apiOrderGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderListGenericResponse>) => r.body as OrderListGenericResponse)
    );
  }

  /**
   * Path part for operation apiOrderPost
   */
  static readonly ApiOrderPostPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Plain$Response(params?: {
    body?: OrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderPostPath, 'post');
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
        return r as StrictHttpResponse<OrderGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Plain(params?: {
    body?: OrderRequest
  },
  context?: HttpContext

): Observable<OrderGenericResponse> {

    return this.apiOrderPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderGenericResponse>) => r.body as OrderGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Json$Response(params?: {
    body?: OrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OrderGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderPostPath, 'post');
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
        return r as StrictHttpResponse<OrderGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Json(params?: {
    body?: OrderRequest
  },
  context?: HttpContext

): Observable<OrderGenericResponse> {

    return this.apiOrderPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<OrderGenericResponse>) => r.body as OrderGenericResponse)
    );
  }

  /**
   * Path part for operation apiOrderWebhookPost
   */
  static readonly ApiOrderWebhookPostPath = '/api/Order/webhook';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderWebhookPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderWebhookPost$Response(params?: {
    body?: WithdrawalWebhook
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderWebhookPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderWebhookPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderWebhookPost(params?: {
    body?: WithdrawalWebhook
  },
  context?: HttpContext

): Observable<void> {

    return this.apiOrderWebhookPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
