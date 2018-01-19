import {Component,} from '@angular/core';
import {AccountService, ACCOUNT_SERVICE_PROVIDERS} from './account.services'; //
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls:['app/account/account.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers:[ACCOUNT_SERVICE_PROVIDERS]
})
export class AccountComponent {

}
