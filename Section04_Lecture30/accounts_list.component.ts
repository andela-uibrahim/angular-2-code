import {Component, Input} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/account_list.component.html',
  styleUrls:['app/account/accounts_list.component.css']
})

export class AccountsList{

  @Input ('accounts') _accounts:Array<Account>;

  private removeAcc(index:number){
   this._account.splice(index, 1)

}
