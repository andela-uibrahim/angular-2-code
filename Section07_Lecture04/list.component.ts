import {Component} from '@angular/core';
import {Account} from './account.model';
import {AccountService} from './account.services';
import {AccountsList} from './accounts_list.component';

@Component({
  templateUrl: 'app/account/list.component.html',
  directives:[AccountList],
})

export class ListComponent{
  private_accounts:Array<Account>; =[];

  private_accountService:AccountService;

  constructor(accountService: AccountService){
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts=> this._accounts = accounts);
  }
}
