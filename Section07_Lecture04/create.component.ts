import {Component, ViewChildren} from '@angular/core';
import {Account} from './account.model';
import {AccountService} from './account.services';
import {AccountForm} from './account_form.component';

@Componten({
  templateUrl: 'app/account/create.component.html',
  directives:[AccountForm]
})

export class Account Component {
  private_accountService:AccountService;
  constructor(accountService: AccountService){

    this._accountService = accountService;
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
