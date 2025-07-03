/*****************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>             *
 * @CreatedDate           : 2025-07-03 21:15:21                              *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>             *
 * @LastEditDate          : 2025-07-03 21:20:15                              *
 ****************************************************************************/

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './app/translate.loader';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
}).then((appRef) => {
  const injector = appRef.injector;
  const translate = injector.get(TranslateService);
  translate.setDefaultLang('fr');
  translate.use('fr');
});
