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
import { ClassRatingResultListGenericResponse } from '../models/class-rating-result-list-generic-response';
import { CountryListGenericResponse } from '../models/country-list-generic-response';
import { CriptoCurrencyListGenericResponse } from '../models/cripto-currency-list-generic-response';
import { IndustryTypeListGenericResponse } from '../models/industry-type-list-generic-response';
import { SalesPerWeekListGenericResponse } from '../models/sales-per-week-list-generic-response';
import { StateListGenericResponse } from '../models/state-list-generic-response';
import { StoreZoneListGenericResponse } from '../models/store-zone-list-generic-response';
import { StringGenericResponse } from '../models/string-generic-response';
import { TimeOnBusinessListGenericResponse } from '../models/time-on-business-list-generic-response';
import { TotalStoresListGenericResponse } from '../models/total-stores-list-generic-response';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUtilitiesGetCurrentVersionGet
   */
  static readonly ApiUtilitiesGetCurrentVersionGetPath = '/api/Utilities/GetCurrentVersion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetCurrentVersionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCurrentVersionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StringGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetCurrentVersionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetCurrentVersionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCurrentVersionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<StringGenericResponse> {

    return this.apiUtilitiesGetCurrentVersionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StringGenericResponse>) => r.body as StringGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetCurrentVersionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCurrentVersionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StringGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetCurrentVersionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetCurrentVersionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCurrentVersionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<StringGenericResponse> {

    return this.apiUtilitiesGetCurrentVersionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StringGenericResponse>) => r.body as StringGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesIsAppCompatibleGet
   */
  static readonly ApiUtilitiesIsAppCompatibleGetPath = '/api/Utilities/IsAppCompatible';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesIsAppCompatibleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesIsAppCompatibleGet$Plain$Response(params?: {
    appBuildVersion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesIsAppCompatibleGetPath, 'get');
    if (params) {
      rb.query('appBuildVersion', params.appBuildVersion, {});
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
   * To access the full response (for headers, for example), `apiUtilitiesIsAppCompatibleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesIsAppCompatibleGet$Plain(params?: {
    appBuildVersion?: number;
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiUtilitiesIsAppCompatibleGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesIsAppCompatibleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesIsAppCompatibleGet$Json$Response(params?: {
    appBuildVersion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesIsAppCompatibleGetPath, 'get');
    if (params) {
      rb.query('appBuildVersion', params.appBuildVersion, {});
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
   * To access the full response (for headers, for example), `apiUtilitiesIsAppCompatibleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesIsAppCompatibleGet$Json(params?: {
    appBuildVersion?: number;
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiUtilitiesIsAppCompatibleGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesVerifyEmailExistGet
   */
  static readonly ApiUtilitiesVerifyEmailExistGetPath = '/api/Utilities/VerifyEmailExist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesVerifyEmailExistGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesVerifyEmailExistGet$Plain$Response(params?: {
    email?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesVerifyEmailExistGetPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
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
   * To access the full response (for headers, for example), `apiUtilitiesVerifyEmailExistGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesVerifyEmailExistGet$Plain(params?: {
    email?: string;
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiUtilitiesVerifyEmailExistGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesVerifyEmailExistGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesVerifyEmailExistGet$Json$Response(params?: {
    email?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BooleanGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesVerifyEmailExistGetPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
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
   * To access the full response (for headers, for example), `apiUtilitiesVerifyEmailExistGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesVerifyEmailExistGet$Json(params?: {
    email?: string;
  },
  context?: HttpContext

): Observable<BooleanGenericResponse> {

    return this.apiUtilitiesVerifyEmailExistGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BooleanGenericResponse>) => r.body as BooleanGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetStatesGet
   */
  static readonly ApiUtilitiesGetStatesGetPath = '/api/Utilities/GetStates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetStatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStatesGet$Plain$Response(params?: {
    countryId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StateListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetStatesGetPath, 'get');
    if (params) {
      rb.query('countryId', params.countryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StateListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetStatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStatesGet$Plain(params?: {
    countryId?: number;
  },
  context?: HttpContext

): Observable<StateListGenericResponse> {

    return this.apiUtilitiesGetStatesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StateListGenericResponse>) => r.body as StateListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetStatesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStatesGet$Json$Response(params?: {
    countryId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StateListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetStatesGetPath, 'get');
    if (params) {
      rb.query('countryId', params.countryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StateListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetStatesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStatesGet$Json(params?: {
    countryId?: number;
  },
  context?: HttpContext

): Observable<StateListGenericResponse> {

    return this.apiUtilitiesGetStatesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StateListGenericResponse>) => r.body as StateListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetCountriesGet
   */
  static readonly ApiUtilitiesGetCountriesGetPath = '/api/Utilities/GetCountries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetCountriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCountriesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CountryListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetCountriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CountryListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetCountriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCountriesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<CountryListGenericResponse> {

    return this.apiUtilitiesGetCountriesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CountryListGenericResponse>) => r.body as CountryListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetCountriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCountriesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CountryListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetCountriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CountryListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetCountriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCountriesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<CountryListGenericResponse> {

    return this.apiUtilitiesGetCountriesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CountryListGenericResponse>) => r.body as CountryListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetCriptoCurrenciesGet
   */
  static readonly ApiUtilitiesGetCriptoCurrenciesGetPath = '/api/Utilities/GetCriptoCurrencies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetCriptoCurrenciesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCriptoCurrenciesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CriptoCurrencyListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetCriptoCurrenciesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CriptoCurrencyListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetCriptoCurrenciesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCriptoCurrenciesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<CriptoCurrencyListGenericResponse> {

    return this.apiUtilitiesGetCriptoCurrenciesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CriptoCurrencyListGenericResponse>) => r.body as CriptoCurrencyListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetCriptoCurrenciesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCriptoCurrenciesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CriptoCurrencyListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetCriptoCurrenciesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CriptoCurrencyListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetCriptoCurrenciesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetCriptoCurrenciesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<CriptoCurrencyListGenericResponse> {

    return this.apiUtilitiesGetCriptoCurrenciesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CriptoCurrencyListGenericResponse>) => r.body as CriptoCurrencyListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetTotalStoresQuestionsGet
   */
  static readonly ApiUtilitiesGetTotalStoresQuestionsGetPath = '/api/Utilities/GetTotalStoresQuestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetTotalStoresQuestionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTotalStoresQuestionsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TotalStoresListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetTotalStoresQuestionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TotalStoresListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetTotalStoresQuestionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTotalStoresQuestionsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<TotalStoresListGenericResponse> {

    return this.apiUtilitiesGetTotalStoresQuestionsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TotalStoresListGenericResponse>) => r.body as TotalStoresListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetTotalStoresQuestionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTotalStoresQuestionsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TotalStoresListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetTotalStoresQuestionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TotalStoresListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetTotalStoresQuestionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTotalStoresQuestionsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<TotalStoresListGenericResponse> {

    return this.apiUtilitiesGetTotalStoresQuestionsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TotalStoresListGenericResponse>) => r.body as TotalStoresListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetTimeOnBusinessQuestionGet
   */
  static readonly ApiUtilitiesGetTimeOnBusinessQuestionGetPath = '/api/Utilities/GetTimeOnBusinessQuestion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetTimeOnBusinessQuestionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTimeOnBusinessQuestionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TimeOnBusinessListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetTimeOnBusinessQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TimeOnBusinessListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetTimeOnBusinessQuestionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTimeOnBusinessQuestionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<TimeOnBusinessListGenericResponse> {

    return this.apiUtilitiesGetTimeOnBusinessQuestionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TimeOnBusinessListGenericResponse>) => r.body as TimeOnBusinessListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetTimeOnBusinessQuestionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTimeOnBusinessQuestionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TimeOnBusinessListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetTimeOnBusinessQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TimeOnBusinessListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetTimeOnBusinessQuestionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetTimeOnBusinessQuestionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<TimeOnBusinessListGenericResponse> {

    return this.apiUtilitiesGetTimeOnBusinessQuestionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TimeOnBusinessListGenericResponse>) => r.body as TimeOnBusinessListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetAvailableClassRatingsQuestionGet
   */
  static readonly ApiUtilitiesGetAvailableClassRatingsQuestionGetPath = '/api/Utilities/GetAvailableClassRatingsQuestion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetAvailableClassRatingsQuestionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetAvailableClassRatingsQuestionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClassRatingResultListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetAvailableClassRatingsQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClassRatingResultListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetAvailableClassRatingsQuestionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetAvailableClassRatingsQuestionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ClassRatingResultListGenericResponse> {

    return this.apiUtilitiesGetAvailableClassRatingsQuestionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClassRatingResultListGenericResponse>) => r.body as ClassRatingResultListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetAvailableClassRatingsQuestionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetAvailableClassRatingsQuestionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClassRatingResultListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetAvailableClassRatingsQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClassRatingResultListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetAvailableClassRatingsQuestionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetAvailableClassRatingsQuestionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ClassRatingResultListGenericResponse> {

    return this.apiUtilitiesGetAvailableClassRatingsQuestionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClassRatingResultListGenericResponse>) => r.body as ClassRatingResultListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetIndustryTypesQuestionGet
   */
  static readonly ApiUtilitiesGetIndustryTypesQuestionGetPath = '/api/Utilities/GetIndustryTypesQuestion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetIndustryTypesQuestionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetIndustryTypesQuestionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IndustryTypeListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetIndustryTypesQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IndustryTypeListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetIndustryTypesQuestionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetIndustryTypesQuestionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<IndustryTypeListGenericResponse> {

    return this.apiUtilitiesGetIndustryTypesQuestionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<IndustryTypeListGenericResponse>) => r.body as IndustryTypeListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetIndustryTypesQuestionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetIndustryTypesQuestionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IndustryTypeListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetIndustryTypesQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IndustryTypeListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetIndustryTypesQuestionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetIndustryTypesQuestionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<IndustryTypeListGenericResponse> {

    return this.apiUtilitiesGetIndustryTypesQuestionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<IndustryTypeListGenericResponse>) => r.body as IndustryTypeListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetStoreZoneQuestionGet
   */
  static readonly ApiUtilitiesGetStoreZoneQuestionGetPath = '/api/Utilities/GetStoreZoneQuestion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetStoreZoneQuestionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStoreZoneQuestionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreZoneListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetStoreZoneQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreZoneListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetStoreZoneQuestionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStoreZoneQuestionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<StoreZoneListGenericResponse> {

    return this.apiUtilitiesGetStoreZoneQuestionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreZoneListGenericResponse>) => r.body as StoreZoneListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetStoreZoneQuestionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStoreZoneQuestionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StoreZoneListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetStoreZoneQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StoreZoneListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetStoreZoneQuestionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetStoreZoneQuestionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<StoreZoneListGenericResponse> {

    return this.apiUtilitiesGetStoreZoneQuestionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StoreZoneListGenericResponse>) => r.body as StoreZoneListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetSalesPerWeekQuestionGet
   */
  static readonly ApiUtilitiesGetSalesPerWeekQuestionGetPath = '/api/Utilities/GetSalesPerWeekQuestion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetSalesPerWeekQuestionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetSalesPerWeekQuestionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesPerWeekListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetSalesPerWeekQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesPerWeekListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetSalesPerWeekQuestionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetSalesPerWeekQuestionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<SalesPerWeekListGenericResponse> {

    return this.apiUtilitiesGetSalesPerWeekQuestionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesPerWeekListGenericResponse>) => r.body as SalesPerWeekListGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetSalesPerWeekQuestionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetSalesPerWeekQuestionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesPerWeekListGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetSalesPerWeekQuestionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesPerWeekListGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetSalesPerWeekQuestionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetSalesPerWeekQuestionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<SalesPerWeekListGenericResponse> {

    return this.apiUtilitiesGetSalesPerWeekQuestionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesPerWeekListGenericResponse>) => r.body as SalesPerWeekListGenericResponse)
    );
  }

  /**
   * Path part for operation apiUtilitiesGetPublicKeyGet
   */
  static readonly ApiUtilitiesGetPublicKeyGetPath = '/api/Utilities/GetPublicKey';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetPublicKeyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetPublicKeyGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StringGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetPublicKeyGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetPublicKeyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetPublicKeyGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<StringGenericResponse> {

    return this.apiUtilitiesGetPublicKeyGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StringGenericResponse>) => r.body as StringGenericResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilitiesGetPublicKeyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetPublicKeyGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StringGenericResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UtilitiesService.ApiUtilitiesGetPublicKeyGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringGenericResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilitiesGetPublicKeyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilitiesGetPublicKeyGet$Json(params?: {
  },
  context?: HttpContext

): Observable<StringGenericResponse> {

    return this.apiUtilitiesGetPublicKeyGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StringGenericResponse>) => r.body as StringGenericResponse)
    );
  }

}
