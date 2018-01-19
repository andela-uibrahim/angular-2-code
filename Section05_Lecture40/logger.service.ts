import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService{
  public log(msg:String){
    console.log(msg);
  }
}    
