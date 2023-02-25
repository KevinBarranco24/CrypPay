/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountService } from './services/account.service';
import { AddressService } from './services/address.service';
import { AuthService } from './services/auth.service';
import { CompanyService } from './services/company.service';
import { MediaService } from './services/media.service';
import { OrderService } from './services/order.service';
import { StoreService } from './services/store.service';
import { UtilitiesService } from './services/utilities.service';
import { WalletService } from './services/wallet.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountService,
    AddressService,
    AuthService,
    CompanyService,
    MediaService,
    OrderService,
    StoreService,
    UtilitiesService,
    WalletService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
