import {Component,} from '@angular/core';
import {AccountService, ACCOUNT_SERVICE_PROVIDERS} from './account.services'; //
import {ROUTER_DIRECTIVES} from '@angular/router'
import {TRANSACTION_SERVICE_PROVIDERS} from '../transaction/transaction.service';

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls:['app/account/account.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers:[ACCOUNT_SERVICE_PROVIDERS, TRANSACTION_SERVICE_PROVIDERS]
})

export class AccountComponent {

}
