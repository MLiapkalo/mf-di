import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  apiV1UsersGet$JsonV10,
  UsersApiService,
} from '@mf-di/users-data-access';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-users-entry',
  template: `
    <h1>Users remote</h1>
    <ul>
      @for (user of users(); track user.id) {
      <li>{{ user.userName }}</li>
      }
    </ul>
  `,
})
export class RemoteEntryComponent {
  private readonly usersApi = inject(UsersApiService);
  readonly users = toSignal(this.usersApi.invoke(apiV1UsersGet$JsonV10));
}
