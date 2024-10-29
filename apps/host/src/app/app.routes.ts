import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'books',
    loadChildren: () => import('books/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'users',
    loadChildren: () => import('users/Routes').then((m) => m.remoteRoutes),
  }
];
