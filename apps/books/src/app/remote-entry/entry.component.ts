import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  apiV1BooksGet$JsonV10,
  BooksApiService,
} from '@mf-di/books-data-access';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-books-entry',
  template: `
    <h1>Books remote</h1>
    <ul>
      @for (book of books(); track book.id) {
      <li>
        {{ book.title }} ({{ book.publishDate }}), pages: {{ book.pageCount }}
      </li>
      }
    </ul>
  `,
})
export class RemoteEntryComponent {
  private readonly booksApi = inject(BooksApiService);
  readonly books = toSignal(this.booksApi.invoke(apiV1BooksGet$JsonV10));
}
