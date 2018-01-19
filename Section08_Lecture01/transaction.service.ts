import {Injectable} from'@angular/core';
import {Transaction} from './transaction.model';
import {Account} from '../account/account.model';

@Injectable()
export class TransactionService{

  private _transactions:Array<Transaction> = [
    {
    id:"1",
    value:50,
    description:"Something",
    date: new Date(2016,8,8,7,6,5), //
                     //y //m 9 //d 8 //h 7 //m 6 //s 8
    tags:["something"],
    accountId:1
    },
    {
    id:"2",
    value:121.31,
    description:"Something else",
    date: new Date(2016,11,11,13,45,50), //
    tags:["something"],
    accountId:1
    },
    {
    id:"12",
     value:-1200.348,
     description:"Bills paid",
     date: new Date(),
     tags:["bills","electricity"],
     accountId:1
    }
  ]

  public getByAccount(accountId:number):Promise<Array<Transaction>> {
    return new Promise((resolve, reject) => {
    resolve(this._transactions.filter(tran => tran.accountId ==accountId));
    });
  }
}

export const TRANSACTION_SERVICE_PROVIDERS:Array<any> = [TransactionService];
