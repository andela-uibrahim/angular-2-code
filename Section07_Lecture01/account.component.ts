import {Component, ViewChild, Injector} from '@angular/core';
import {Account} from './account.model';
import {AccountsList} from './accounts_list.component';
import {AccountForm} from './account_form.component';
import {AccountService, ACCOUNT_SERVICE_PROVIDERS} from './account.services'; //

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls:['app/account/account.component.css'],
  directives:[AccountList, AccountForm],
  providers:[ACCOUNT_SERVICE_PROVIDERS]
})
export class AppComponent {

  private_accounts:Array<Account>; =[]; //

  private_accountService:AccountService;
  constructor(accountService: AccountService){

    this._accountService = accountService;
    var promise = this._accountService.getAll(); //
    promise.then(accounts=> this._accounts = accounts); //
  }

  private createAccError:string = ""

  private createAcc(newAccount:account){
    this._accountService.create(newAccount).then(account => {
        console.log(account);
        this.createAccError = "";
        this.form.resetForm();
   }).catch(err => this.createAccError = err);
}

  private removeAcc(index:number){
    this._accountService.remove(index).then(account => console.log(account));
  }

  @ViewChild(AccountForm) form: AccountForm;

}
