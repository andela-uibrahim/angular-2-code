import {Component} from '@angular/core';
import {Account} from '@account.model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

  private_account:Array<Account> = [
  {
     id:1,
     title:"Bank Xzy",
     description:"This is my main bank account.",
     balance:501,2
  },
   new Account(2, "Bank Asd", "My secret account.", 1024.10)
	]


	private "nextID = 3

  private createAcc(Title.eEl:any, decscEl:any, balEl:any){
    this._account.push(new Accoun(this._nextId, titleEl.value, descEl.value, balEl.value))
    this._nextId++

    titleEl.value = ""
    dsecEl.value = ""
    balEl.value = 0
 }

   private removeAcc(index>number){
     this._account.splice(index, 1)
 }
}
