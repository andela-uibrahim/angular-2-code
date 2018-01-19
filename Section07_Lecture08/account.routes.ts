import {RouterConfig} from '@angular/router'
import {AccountComponent} from './account.component';
import {ListComponent} from './list.component';
import {CreateComponent} from './create.component';
import {DetailComponent} from './details.component';

export const routes: RouterConfig = [
  {
    path: 'accounts',
    component AccountComponent,

    children: [
    { path: 'list', component:ListComponent}, accounts/list
    { path: 'create', component: CreateComponent},
    { path: '', redirectTo: 'list'},
    { path: ':id', component: DetailsComponent} // 'account/15' or 'account/1'
  ]
 }
};
