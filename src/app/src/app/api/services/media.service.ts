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

import { MediaListGenericResponse } from '../models/media-list-generic-response';
import { MediaStorageType } from '../models/media-storage-type';

@Injectable({
  providedIn: 'root',
})
export class MediaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMediaGet
   */
  static readonly ApiMediaGetPath = '/api/Media';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMediaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMediaGet$Plain$Response(params?: {
    id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MediaListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MediaService.ApiMediaGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MediaListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMediaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMediaGet$Plain(params?: {
    id?: Array<number>;
  },
  context?: HttpContext

): Observable<MediaListGenericResponse> {

    return this.apiMediaGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<MediaListGenericResponse>) => r.body as MediaListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMediaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMediaGet$Json$Response(params?: {
    id?: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MediaListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MediaService.ApiMediaGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MediaListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMediaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMediaGet$Json(params?: {
    id?: Array<number>;
  },
  context?: HttpContext

): Observable<MediaListGenericResponse> {

    return this.apiMediaGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<MediaListGenericResponse>) => r.body as MediaListGenericResponse)
    );
  }

  /**
   * Path part for operation apiMediaPost
   */
  static readonly ApiMediaPostPath = '/api/Media';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMediaPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiMediaPost$Plain$Response(params?: {
    mediaStorageType?: MediaStorageType;
    body?: {
'request'?: Array<Blob>;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MediaListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MediaService.ApiMediaPostPath, 'post');
    if (params) {
      rb.query('mediaStorageType', params.mediaStorageType, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MediaListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMediaPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiMediaPost$Plain(params?: {
    mediaStorageType?: MediaStorageType;
    body?: {
'request'?: Array<Blob>;
}
  },
  context?: HttpContext

): Observable<MediaListGenericResponse> {

    return this.apiMediaPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<MediaListGenericResponse>) => r.body as MediaListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMediaPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiMediaPost$Json$Response(params?: {
    mediaStorageType?: MediaStorageType;
    body?: {
'request'?: Array<Blob>;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MediaListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, MediaService.ApiMediaPostPath, 'post');
    if (params) {
      rb.query('mediaStorageType', params.mediaStorageType, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MediaListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMediaPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiMediaPost$Json(params?: {
    mediaStorageType?: MediaStorageType;
    body?: {
'request'?: Array<Blob>;
}
  },
  context?: HttpContext

): Observable<MediaListGenericResponse> {

    return this.apiMediaPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<MediaListGenericResponse>) => r.body as MediaListGenericResponse)
    );
  }

}
