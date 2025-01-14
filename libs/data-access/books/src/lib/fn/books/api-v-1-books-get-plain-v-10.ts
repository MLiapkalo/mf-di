/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Book } from '../../models/book';

export interface ApiV1BooksGet$PlainV10$Params {
}

export function apiV1BooksGet$PlainV10(http: HttpClient, rootUrl: string, params?: ApiV1BooksGet$PlainV10$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Book>>> {
  const rb = new RequestBuilder(rootUrl, apiV1BooksGet$PlainV10.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain; v=1.0', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Book>>;
    })
  );
}

apiV1BooksGet$PlainV10.PATH = '/api/v1/Books';
