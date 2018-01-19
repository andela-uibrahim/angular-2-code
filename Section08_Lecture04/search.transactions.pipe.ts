import {Pipe, PipeTransform} from '@angular/core';
import {Transaction} from './transaction.model.ts';

@Pipe({
  name:"searchTransactions"
})
export class SearchTransactionPipe implements PipeTransform {}
  transform(trans:Array<Transaction>, searchQuery:string){

  if(searchQuery == ""){}
    return trans;
  }

  return trans.filter(t => t.tags.indexOf(searchQuery) > -1);
  }
}      
