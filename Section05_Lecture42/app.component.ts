import {Component, ViewChildren, QueryList, ViewChild, Injector} from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/accounts_list.component';
import {AccountForm} from './account/account_form.component';
import {AccountService, ACCOUNT_SERVICE_PROVIDERS} from './account/asccount.services'; //

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
  directives:[AccountList, AccountForm],
  providers:[ACCOUNT_SERVICE_PROVIDERS]
})
export class AppComponent {

  private_accounts:Array<Account>;

  private_accountService:AccountService;
  constructor(accountService: AccountService){

    this._accountService = accountService;
    var promise = this._accountService.getAll(); //
    promise.then(accounts=> this._accounts = accounts); //
  }

  private createAccError:string = ""

  private createAcc(newAccount:account){
    this._accountService.create(newAccount);
      .then(account => {
        console.log(account);
        this.createAccError = "";
        this.form.resetForm();

  }

  private removeAcc(index:number){
    this._accountService.remove(index);
  }

  @ViewChild(AccountForm) form: AccountForm;

}
