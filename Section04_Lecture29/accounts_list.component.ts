import {Component} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/account_list.component.html',
  styleUrls:['app/account/accounts_list.component.css']
})

export class AccountsList{
  private _selected:Array<boolean> = [false, false]; // default not selected

  private removeAcc(index:number){
   this._account.splice(index, 1)
   this._selected.splice(index, 1)
}

  private selected(index:number){
   this._selected[index] = !this._selected[index]
 }
}
