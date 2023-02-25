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

import { ClassRatingResultGenericResponse } from '../models/class-rating-result-generic-response';
import { Company } from '../models/company';
import { CompanyGenericResponse } from '../models/company-generic-response';
import { CompanyListGenericResponse } from '../models/company-list-generic-response';
import { Int64GenericResponse } from '../models/int-64-generic-response';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCompanyGet
   */
  static readonly ApiCompanyGetPath = '/api/Company';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGet$Plain$Response(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyGetPath, 'get');
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
        return r as StrictHttpResponse<CompanyListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGet$Plain(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<CompanyListGenericResponse> {

    return this.apiCompanyGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyListGenericResponse>) => r.body as CompanyListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGet$Json$Response(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyGetPath, 'get');
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
        return r as StrictHttpResponse<CompanyListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGet$Json(params?: {
    key?: string;
    Id?: Array<number>;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<CompanyListGenericResponse> {

    return this.apiCompanyGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyListGenericResponse>) => r.body as CompanyListGenericResponse)
    );
  }

  /**
   * Path part for operation apiCompanyPut
   */
  static readonly ApiCompanyPutPath = '/api/Company';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPut$Plain$Response(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyPutPath, 'put');
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
        return r as StrictHttpResponse<CompanyGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPut$Plain(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<CompanyGenericResponse> {

    return this.apiCompanyPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyGenericResponse>) => r.body as CompanyGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPut$Json$Response(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyPutPath, 'put');
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
        return r as StrictHttpResponse<CompanyGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPut$Json(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<CompanyGenericResponse> {

    return this.apiCompanyPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyGenericResponse>) => r.body as CompanyGenericResponse)
    );
  }

  /**
   * Path part for operation apiCompanyPost
   */
  static readonly ApiCompanyPostPath = '/api/Company';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPost$Plain$Response(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyPostPath, 'post');
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
        return r as StrictHttpResponse<CompanyGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPost$Plain(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<CompanyGenericResponse> {

    return this.apiCompanyPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyGenericResponse>) => r.body as CompanyGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPost$Json$Response(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyPostPath, 'post');
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
        return r as StrictHttpResponse<CompanyGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyPost$Json(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<CompanyGenericResponse> {

    return this.apiCompanyPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyGenericResponse>) => r.body as CompanyGenericResponse)
    );
  }

  /**
   * Path part for operation apiCompanyDelete
   */
  static readonly ApiCompanyDeletePath = '/api/Company';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDelete$Plain$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyDeletePath, 'delete');
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
        return r as StrictHttpResponse<CompanyGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDelete$Plain(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<CompanyGenericResponse> {

    return this.apiCompanyDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyGenericResponse>) => r.body as CompanyGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDelete$Json$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CompanyGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyDeletePath, 'delete');
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
        return r as StrictHttpResponse<CompanyGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDelete$Json(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<CompanyGenericResponse> {

    return this.apiCompanyDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CompanyGenericResponse>) => r.body as CompanyGenericResponse)
    );
  }

  /**
   * Path part for operation apiCompanyPaginationGet
   */
  static readonly ApiCompanyPaginationGetPath = '/api/Company/Pagination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyPaginationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyPaginationGet$Plain$Response(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Int64GenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyPaginationGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyPaginationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyPaginationGet$Plain(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<Int64GenericResponse> {

    return this.apiCompanyPaginationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Int64GenericResponse>) => r.body as Int64GenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyPaginationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyPaginationGet$Json$Response(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Int64GenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyPaginationGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyPaginationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyPaginationGet$Json(params?: {
    key?: string;
    Id?: Array<number>;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<Int64GenericResponse> {

    return this.apiCompanyPaginationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Int64GenericResponse>) => r.body as Int64GenericResponse)
    );
  }

  /**
   * Path part for operation apiCompanyRateCompanyPost
   */
  static readonly ApiCompanyRateCompanyPostPath = '/api/Company/RateCompany';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyRateCompanyPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyRateCompanyPost$Plain$Response(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClassRatingResultGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyRateCompanyPostPath, 'post');
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
        return r as StrictHttpResponse<ClassRatingResultGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyRateCompanyPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyRateCompanyPost$Plain(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<ClassRatingResultGenericResponse> {

    return this.apiCompanyRateCompanyPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClassRatingResultGenericResponse>) => r.body as ClassRatingResultGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyRateCompanyPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyRateCompanyPost$Json$Response(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClassRatingResultGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyRateCompanyPostPath, 'post');
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
        return r as StrictHttpResponse<ClassRatingResultGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCompanyRateCompanyPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyRateCompanyPost$Json(params?: {
    body?: Company
  },
  context?: HttpContext

): Observable<ClassRatingResultGenericResponse> {

    return this.apiCompanyRateCompanyPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClassRatingResultGenericResponse>) => r.body as ClassRatingResultGenericResponse)
    );
  }

}
