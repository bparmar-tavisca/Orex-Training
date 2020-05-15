import { Component, OnInit } from '@angular/core';
import { customers } from '../../mock/customer.mock';
import { Customer } from 'src/app/model/customer';
import { EventHelperService } from 'src/app/service/event-helper.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  datasource: Array<Customer> = customers;
  customer:Customer = new Customer(0,"dummy","dummy","dummy","dummy");
  headers =  Array<string>();
  filteredCust= new Array<Customer>();
  constructor(private evnt:EventHelperService) { }

  ngOnInit(): void {
    for(let c in this.customer) {
      this.headers.push(c);
    }
    this.filteredCust = this.datasource;
    this.evnt.searchEvent.subscribe((data)=>{console.log("Searched Tet is " +data);this.filterData(data);});
  }

   filterData(data:string): void{
    this.filteredCust = this.datasource.filter((v,i)=>{
         return (v.CustomerName.toLowerCase().search(data.toLowerCase())>=0 || v.City.toLowerCase().search(data.toLowerCase())>=0)
    })
    let  custIds = new Array<number>();
    this.filteredCust.forEach((c,i)=>{custIds.push(c.CustomerId)});
    this.evnt.onCustomerChangeEvent(custIds);
  }

}
