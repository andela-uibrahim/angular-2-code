import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/account_list.component.html',
  styleUrls:['app/account/accounts_list.component.css']
})

export class AccountsList{

  @Input ('accounts') _accounts:Array<Account>;

  @Output('delete') delete = new EventEmitter<Number>()

  private _remove(index:number){
    this.delete.emit(index);
  }

}
