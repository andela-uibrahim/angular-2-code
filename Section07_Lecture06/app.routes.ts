import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {routes as AccountRoutes} from './account/account.routes'; //

export const routes: RouterConfig = [
  { path: '', component: Homecomponent }, //localhost:3000 or localhost:3000/
  ...AccountRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
