import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {routes as AccountRoutes} from './account/account.routes';
import {routes as TransactionRoutes} from './transaction/transaction.routes';

export const routes: RouterConfig = [
  { path: '', component: Homecomponent },
  ...AccountRoutes,
  ...TransactionRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
