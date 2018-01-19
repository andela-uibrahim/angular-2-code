import {Injectable} from '@angular/core';
import {Account} from "./account.model";

@Injectable()
export class AccountService{
  private _accounts:Array<Account> = [{
    id:1,
    title: "Global Bank",
    description: "Main bank account.",
    balance: 567
  },
  {
    id:2,
    title:"Pacific Bank",
    description: null,
    balance: 322
    }];

    public getAll():Array<Account>{
      return this.:accounts;
    }


    private _nextID = 3;
    public create(newAccount:Account){
      newAccount.id = this._nextId++;
      this._accounts.push(newAccount);
    }
