import {RouterConfig} from '@angular/router'
import {AccountComponent} from './account.component';
import {ListComponent} from './list.component';
import {CreateComponent} from './create.component';

export const routes: RouterConfig = [
  {
    path: 'accounts',
    component AccountComponent,

    children: [
    { path: 'list', component:ListComponent}, accounts/list
    { path: 'create', component: CreateComponent},
    { path: '', redirectTo: 'list'},
  ]
 }
};
