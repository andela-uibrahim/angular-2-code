import {Pipe, PipeTransform} from '@angular/core';
import {Transaction} from './transaction.model.ts';

@Pipe({
  name:"searchTransactions"
  pure:true
})
export class SearchTransactionPipe implements PipeTransform {
  transform(trans:Array<Transaction>, searchQuery:string){

   console.log("Pipe transform called");

  if(searchQuery == ""){
    return trans;
  }

  return trans.filter(t => t.tags.indexOf(searchQuery) > -1);
  }
}
