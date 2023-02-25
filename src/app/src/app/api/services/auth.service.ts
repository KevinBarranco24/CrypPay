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

import { LoginRequest } from '../models/login-request';
import { LoginResponseGenericResponse } from '../models/login-response-generic-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthLoginPost
   */
  static readonly ApiAuthLoginPostPath = '/api/Auth/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain$Response(params?: {
    body?: LoginRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LoginResponseGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthLoginPostPath, 'post');
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
        return r as StrictHttpResponse<LoginResponseGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain(params?: {
    body?: LoginRequest
  },
  context?: HttpContext

): Observable<LoginResponseGenericResponse> {

    return this.apiAuthLoginPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<LoginResponseGenericResponse>) => r.body as LoginResponseGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json$Response(params?: {
    body?: LoginRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LoginResponseGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthLoginPostPath, 'post');
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
        return r as StrictHttpResponse<LoginResponseGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json(params?: {
    body?: LoginRequest
  },
  context?: HttpContext

): Observable<LoginResponseGenericResponse> {

    return this.apiAuthLoginPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<LoginResponseGenericResponse>) => r.body as LoginResponseGenericResponse)
    );
  }

  /**
   * Path part for operation apiAuthSlidePut
   */
  static readonly ApiAuthSlidePutPath = '/api/Auth/Slide';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthSlidePut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSlidePut$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LoginResponseGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthSlidePutPath, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponseGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthSlidePut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSlidePut$Plain(params?: {
  },
  context?: HttpContext

): Observable<LoginResponseGenericResponse> {

    return this.apiAuthSlidePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<LoginResponseGenericResponse>) => r.body as LoginResponseGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthSlidePut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSlidePut$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LoginResponseGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthSlidePutPath, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponseGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthSlidePut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSlidePut$Json(params?: {
  },
  context?: HttpContext

): Observable<LoginResponseGenericResponse> {

    return this.apiAuthSlidePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<LoginResponseGenericResponse>) => r.body as LoginResponseGenericResponse)
    );
  }

}
