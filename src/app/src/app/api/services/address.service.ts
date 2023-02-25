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

import { Address } from '../models/address';
import { AddressGenericResponse } from '../models/address-generic-response';
import { AddressListGenericResponse } from '../models/address-list-generic-response';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAddressGet
   */
  static readonly ApiAddressGetPath = '/api/Address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressGet$Plain$Response(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressGetPath, 'get');
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
        return r as StrictHttpResponse<AddressListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressGet$Plain(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<AddressListGenericResponse> {

    return this.apiAddressGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressListGenericResponse>) => r.body as AddressListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressGet$Json$Response(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressGetPath, 'get');
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
        return r as StrictHttpResponse<AddressListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressGet$Json(params?: {
    Id?: Array<number>;
  },
  context?: HttpContext

): Observable<AddressListGenericResponse> {

    return this.apiAddressGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressListGenericResponse>) => r.body as AddressListGenericResponse)
    );
  }

  /**
   * Path part for operation apiAddressPut
   */
  static readonly ApiAddressPutPath = '/api/Address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPut$Plain$Response(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressPutPath, 'put');
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
        return r as StrictHttpResponse<AddressGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPut$Plain(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<AddressGenericResponse> {

    return this.apiAddressPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressGenericResponse>) => r.body as AddressGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPut$Json$Response(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressPutPath, 'put');
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
        return r as StrictHttpResponse<AddressGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPut$Json(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<AddressGenericResponse> {

    return this.apiAddressPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressGenericResponse>) => r.body as AddressGenericResponse)
    );
  }

  /**
   * Path part for operation apiAddressPost
   */
  static readonly ApiAddressPostPath = '/api/Address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPost$Plain$Response(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressPostPath, 'post');
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
        return r as StrictHttpResponse<AddressGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPost$Plain(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<AddressGenericResponse> {

    return this.apiAddressPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressGenericResponse>) => r.body as AddressGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPost$Json$Response(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressPostPath, 'post');
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
        return r as StrictHttpResponse<AddressGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAddressPost$Json(params?: {
    body?: Address
  },
  context?: HttpContext

): Observable<AddressGenericResponse> {

    return this.apiAddressPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressGenericResponse>) => r.body as AddressGenericResponse)
    );
  }

  /**
   * Path part for operation apiAddressDelete
   */
  static readonly ApiAddressDeletePath = '/api/Address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressDelete$Plain$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressDeletePath, 'delete');
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
        return r as StrictHttpResponse<AddressGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressDelete$Plain(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<AddressGenericResponse> {

    return this.apiAddressDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressGenericResponse>) => r.body as AddressGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAddressDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressDelete$Json$Response(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.ApiAddressDeletePath, 'delete');
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
        return r as StrictHttpResponse<AddressGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAddressDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAddressDelete$Json(params?: {
    Id?: number;
  },
  context?: HttpContext

): Observable<AddressGenericResponse> {

    return this.apiAddressDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressGenericResponse>) => r.body as AddressGenericResponse)
    );
  }

}
