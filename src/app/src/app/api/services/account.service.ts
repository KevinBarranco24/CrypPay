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

import { AccountStatus } from '../models/account-status';
import { BooleanGenericResponse } from '../models/boolean-generic-response';
import { CompleteRecoverPasswordRequest } from '../models/complete-recover-password-request';
import { CompleteRegistration } from '../models/complete-registration';
import { Identity } from '../models/identity';
import { IdentityGenericResponse } from '../models/identity-generic-response';
import { IdentityListGenericResponse } from '../models/identity-list-generic-response';
import { Int32GenericResponse } from '../models/int-32-generic-response';
import { RecoverPasswordRequest } from '../models/recover-password-request';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountGet
   */
  static readonly ApiAccountGetPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Plain$Response(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('id', params.id, {});
      rb.query('role', params.role, {});
      rb.query('accountStatus', params.accountStatus, {});
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
        return r as StrictHttpResponse<IdentityListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Plain(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<IdentityListGenericResponse> {

    return this.apiAccountGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityListGenericResponse>) => r.body as IdentityListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Json$Response(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('id', params.id, {});
      rb.query('role', params.role, {});
      rb.query('accountStatus', params.accountStatus, {});
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
        return r as StrictHttpResponse<IdentityListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Json(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    currentPage?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<IdentityListGenericResponse> {

    return this.apiAccountGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityListGenericResponse>) => r.body as IdentityListGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountPut
   */
  static readonly ApiAccountPutPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPut$Plain$Response(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPutPath, 'put');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPut$Plain(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPut$Json$Response(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPutPath, 'put');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPut$Json(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountPost
   */
  static readonly ApiAccountPostPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPost$Plain$Response(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPostPath, 'post');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPost$Plain(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPost$Json$Response(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPostPath, 'post');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountPost$Json(params?: {
    body?: Identity
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountDelete
   */
  static readonly ApiAccountDeletePath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDelete$Plain$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountDeletePath, 'delete');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDelete$Plain(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDelete$Json$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountDeletePath, 'delete');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDelete$Json(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountPaginationGet
   */
  static readonly ApiAccountPaginationGetPath = '/api/Account/Pagination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPaginationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPaginationGet$Plain$Response(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Int32GenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPaginationGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('id', params.id, {});
      rb.query('role', params.role, {});
      rb.query('accountStatus', params.accountStatus, {});
      rb.query('splitBy', params.splitBy, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Int32GenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountPaginationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPaginationGet$Plain(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<Int32GenericResponse> {

    return this.apiAccountPaginationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Int32GenericResponse>) => r.body as Int32GenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountPaginationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPaginationGet$Json$Response(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Int32GenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountPaginationGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('id', params.id, {});
      rb.query('role', params.role, {});
      rb.query('accountStatus', params.accountStatus, {});
      rb.query('splitBy', params.splitBy, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Int32GenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountPaginationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountPaginationGet$Json(params?: {
    key?: string;
    id?: Array<number>;
    role?: Role;
    accountStatus?: AccountStatus;
    splitBy?: number;
  },
  context?: HttpContext

): Observable<Int32GenericResponse> {

    return this.apiAccountPaginationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Int32GenericResponse>) => r.body as Int32GenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountCompleteAccountRegistrationPut
   */
  static readonly ApiAccountCompleteAccountRegistrationPutPath = '/api/Account/CompleteAccountRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountCompleteAccountRegistrationPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteAccountRegistrationPut$Plain$Response(params?: {
    body?: CompleteRegistration
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountCompleteAccountRegistrationPutPath, 'put');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountCompleteAccountRegistrationPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteAccountRegistrationPut$Plain(params?: {
    body?: CompleteRegistration
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountCompleteAccountRegistrationPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountCompleteAccountRegistrationPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteAccountRegistrationPut$Json$Response(params?: {
    body?: CompleteRegistration
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountCompleteAccountRegistrationPutPath, 'put');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountCompleteAccountRegistrationPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteAccountRegistrationPut$Json(params?: {
    body?: CompleteRegistration
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountCompleteAccountRegistrationPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountApproveIdPut
   */
  static readonly ApiAccountApproveIdPutPath = '/api/Account/Approve/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountApproveIdPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountApproveIdPut$Plain$Response(params: {
    Id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountApproveIdPutPath, 'put');
    if (params) {
      rb.path('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountApproveIdPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountApproveIdPut$Plain(params: {
    Id: number;
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountApproveIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountApproveIdPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountApproveIdPut$Json$Response(params: {
    Id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountApproveIdPutPath, 'put');
    if (params) {
      rb.path('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountApproveIdPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountApproveIdPut$Json(params: {
    Id: number;
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountApproveIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountBeginRecoverPasswordPost
   */
  static readonly ApiAccountBeginRecoverPasswordPostPath = '/api/Account/BeginRecoverPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountBeginRecoverPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountBeginRecoverPasswordPost$Plain$Response(params?: {
    body?: RecoverPasswordRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountBeginRecoverPasswordPostPath, 'post');
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
        return r as StrictHttpResponse<BooleanGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountBeginRecoverPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountBeginRecoverPasswordPost$Plain(params?: {
    body?: RecoverPasswordRequest
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiAccountBeginRecoverPasswordPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountBeginRecoverPasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountBeginRecoverPasswordPost$Json$Response(params?: {
    body?: RecoverPasswordRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountBeginRecoverPasswordPostPath, 'post');
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
        return r as StrictHttpResponse<BooleanGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountBeginRecoverPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountBeginRecoverPasswordPost$Json(params?: {
    body?: RecoverPasswordRequest
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiAccountBeginRecoverPasswordPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * Path part for operation apiAccountCompleteRecoverPasswordPut
   */
  static readonly ApiAccountCompleteRecoverPasswordPutPath = '/api/Account/CompleteRecoverPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountCompleteRecoverPasswordPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteRecoverPasswordPut$Plain$Response(params?: {
    body?: CompleteRecoverPasswordRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountCompleteRecoverPasswordPutPath, 'put');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountCompleteRecoverPasswordPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteRecoverPasswordPut$Plain(params?: {
    body?: CompleteRecoverPasswordRequest
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountCompleteRecoverPasswordPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountCompleteRecoverPasswordPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteRecoverPasswordPut$Json$Response(params?: {
    body?: CompleteRecoverPasswordRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdentityGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountCompleteRecoverPasswordPutPath, 'put');
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
        return r as StrictHttpResponse<IdentityGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountCompleteRecoverPasswordPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCompleteRecoverPasswordPut$Json(params?: {
    body?: CompleteRecoverPasswordRequest
  },
  context?: HttpContext

): Observable<IdentityGenericResponse> {

    return this.apiAccountCompleteRecoverPasswordPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdentityGenericResponse>) => r.body as IdentityGenericResponse)
    );
  }

}
