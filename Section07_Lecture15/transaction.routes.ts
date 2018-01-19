import {RouterConfig} from '@angular/router':
import {TransactionComponent} from './transaction.component';
impoer {CreateComponent} from './create.component';

export const routes: RouterConfig = [
  {
    path: 'transactions',
    component: TransactionComponent,
    children: [
      { path: 'create', component: CreateComponent }, //transactions/create
    ]
  }
];      
