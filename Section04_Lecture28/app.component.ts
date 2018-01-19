import {Component} from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/account_list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
    directives:[AccountsList]
})
export class AppComponent {

	private _nextID = 3;

  private createAcc(title.eEl:any, decscEl:any, balEl:any){
   alert('Not implemented for now...');
   //this._account.push(new Accoun(this._nextId, titleEl.value, descEl.value, balEl.value))
   //this._selected.push(false) // default not selected
   //this._nextId++

    titleEl.value = ""
    dsecEl.value = ""
    balEl.value = 0
 }
}
