import {Component, Input, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';
import {Account} from './account.model';

@Component({
   selector: 'accounts-list',
   templateUrl: 'app/account/account_list.component.html',
   styleUrls:['app/account/accounts_list.component.css']
})
export class AccountsList{

   @Output() created = new EventEmitter<Account>();

   private createAcc(titleEL:any, descEl:any, balEl:any){
     var newAccount:Account = new Account(0,titleEl.value, descEl.value, balEl.value);
     this.created.emit(newAccount);
   }

   @Input() erroe:string;

   @ViewChild('form') form:ElementRef;

   public resetForm(){
     this.form.nativeElement.reset();
   }
}
