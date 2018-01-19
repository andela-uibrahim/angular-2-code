import {Component} from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/account_list.component';
import {AccountForm} from './account/account_form.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
    directives:[AccountsList, AccountForm]
})
export class AppComponent {

  private_account:Array<Account> = [{
   id:1,
   title:"xxx Bank",
   description:"Main bank account.",
   balance:567
  },
  {
 id:2,
 title:"yyy Bank",
 description: null,
 balance: 322
}];

	private _nextID = 3;

  private createAccError:string = "";
  private accLimit:number =3;
  private createAcc(newAccount:Account){
    this.createAccError =""

    if (this._accounts.length < this.accLimit){
      newAccount.ide = this._nextId++;
      this._accounts.push(newAccount);

      this.fomr.resetForm();

  } else {
    this.createAccError = "Only " + this.accLimit + "account(s) allowed."
  }

}

  private removeAcc(index:number){
    this._accounts.splice(index, 1)
  }

  @ViewChild(AccountForm) form:AccountForm;

}
