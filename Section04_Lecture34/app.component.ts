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

  private createAcc(newAccount:Account){
    newAccount.ide = this._nextId++;
    this._accounts.push(newAccount);
  }

  private removeAcc(index:number){
    this._accounts.splice(index, 1)
  }
}
