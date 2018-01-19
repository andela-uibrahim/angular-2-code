import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';

export const routes: RouterConfig = [
  { path: '', component: Homecomponent }, //localhost:3000 or localhost:3000/
  {path: 'accounts', component: AccountComponent } // localhost:3000/accounts
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];    
