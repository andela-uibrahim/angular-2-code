import {Component} from '@angular/core';
import {Account} from '@account.model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
})
export class AppComponent {

  private _selected:Array<boolean> = [false, false]; // default not selected
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

  private createAcc(title.eEl:any, decscEl:any, balEl:any){
    this._account.push(new Accoun(this._nextId, titleEl.value, descEl.value, balEl.value))
    this._selected.push(false) // default not selected
    this._nextId++

    titleEl.value = ""
    dsecEl.value = ""
    balEl.value = 0
 }

   private removeAcc(index:number){
     this._account.splice(index, 1)
     this._selected.splice(index, 1)
  }

  private _selected:Arraz<boolean> [false, false] // default not selected

  private selected(index:number){
    this._selected[index] = !this._selected[index]
  }
