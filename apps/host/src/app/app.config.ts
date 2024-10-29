import {
  APP_INITIALIZER,
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BooksApiConfiguration } from '@mf-di/books-data-access';
import { UsersApiConfiguration } from '@mf-di/users-data-access';

const API_ROOT = 'https://fakerestapi.azurewebsites.net';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: APP_INITIALIZER,
      useFactory:
        (
          booksApiConfig: BooksApiConfiguration,
          usersApiConfig: UsersApiConfiguration
        ) =>
        () => {
          booksApiConfig.rootUrl = API_ROOT;
          usersApiConfig.rootUrl = API_ROOT;
        },
      deps: [BooksApiConfiguration, UsersApiConfiguration],
      multi: true,
    },
  ],
};
