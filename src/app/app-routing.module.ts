import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {RedirectGuard} from './guards/redirect.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [RedirectGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'client/details/:id',
        loadChildren: () => import('./pages/client-details/client-details.module').then(m => m.ClientDetailsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
