import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {Account} from './account.model';
import {AccountService} from './account.services';
import {Transaction} from '../transaction/transaction.model';
import {TransactionService} from '../transaction/transaction.service';

@Component({
  templateUrl:"app/account/details.component.html",
  styleUrls:["app/account/details.component.css"],
  directives:[ROUTER_DIRECTIVES]
)}
export class DetailsComponent implements OnInit, OnDestroy{}

    private _account:Account;
    private _error:String ="";
    private _paramSub: any;
    private _transa:Array<Transaction>;

    constructor(private _route:ActivatedRoute,
                private _accountService:AccountService,
                private _transactionService:TransactionService){

    }

    public ngOnInit(){

     this._paramSub = this._route.params.subscribe(params =>) {
       var id:number = +params['id'];

       this._account = null;
       this._error = "";

       this._accountService.getById(id)
         .then(account => this._account = account)
         .catch(err => this._error = err);

       this._transactionService.getByAccount(id)
         .then(trans => this._trans =trans);
    });
  }

  public ngOnDestroy(){
    this._paramSub.unsubscribe();
  }

}
