import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventHelperService {

  searchEvent: EventEmitter<string>;
  customerChangeEvent: EventEmitter<number[]>;
  constructor() { 
    this.searchEvent= new EventEmitter<string>();
    this.customerChangeEvent = new EventEmitter<number[]>();
  }

  onSearchEvent(input:string){
    this.searchEvent.emit(input);
  }

  onCustomerChangeEvent(custIds: number[]){
    this.customerChangeEvent.emit(custIds);
  }
}
