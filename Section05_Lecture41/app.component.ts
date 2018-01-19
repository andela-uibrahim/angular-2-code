import {Component, ViewChild, Injector} from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/accounts_list.component';
import {AccountForm} from './account/account_form.component';
import {AccountService, ACCOUNT_SERVICE_PROVIDERS} from './account/asccount.services'; //
import {LoggerService} from './util/logger.service'; //

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
  directives:[AccountList, AccountForm],
  providers:[ACCOUNT_SERVICE_PROVIDERS,]
})
export class AppComponent {

  private_accounts:Array<Account>;

  private_accountService:AccountService;
  constructor(accountService: AccountService){

    this._accountService = accountService;

    this._accounts = this._accountService.getAll();
  }

  private createAccError:string = ""
  private createAcc(newAccount:account){
    this._accountService.create(newAccount);
    this.form.resetForm();

  }

  private removeAcc(index:number){
    this._accountService.remove(index);
  }

  @ViewChild(AccountForm) form: AccountForm;

}
