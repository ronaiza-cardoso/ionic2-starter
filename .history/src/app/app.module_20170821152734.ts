import { MyApp } from './app.component';
import { AppConfig } from './app.config';
import { Env, ProviderEnv } from './app.env';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { ConfigurationModule } from '@mbamobi/configuration';
import { DefaultPlugins, HttpModule, ThrowExceptionStatusToken } from '@mbamobi/http';
import { UrlResolverModule } from '@mbamobi/url-resolver';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpPluginsIonicModule } from '@mbamobi/http-plugins-ionic';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MbaNotificationProvider, ProvidersNative } from '../providers';

// extração mensagem de erro do serviço
export function extraMessageError() {}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, AppConfig),
    IonicStorageModule.forRoot(),
    HttpPluginsIonicModule,
    TextMaskModule,
    ConfigurationModule.initialize(AppConfig, Env),
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins)
  ],
  providers: [
    { provide: ThrowExceptionStatusToken, useValue: extraMessageError },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ProviderEnv,
    ProvidersNative,
    MbaNotificationProvider
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule {
}
