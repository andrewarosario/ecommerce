import { Route } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';

export const authFormRoutes: Route[] = [
  {
    path: '',
    component: AuthFormComponent,
    children: [
      {
        path: 'email',
        loadComponent: () =>
          import('./auth-form/auth-form-email/auth-form-email.component').then(
            (m) => m.AuthFormEmailComponent
          ),
      },
      {
        path: 'password',
        loadComponent: () =>
          import(
            './auth-form/auth-form-password/auth-form-password.component'
          ).then((m) => m.AuthFormPasswordComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'email',
      },
      {
        path: '**',
        redirectTo: 'email',
      },
    ],
  },
];

// localhost:4200/auth
