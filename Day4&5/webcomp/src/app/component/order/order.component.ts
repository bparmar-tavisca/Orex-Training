import { Component, OnInit } from '@angular/core';
import { orders } from '../../mock/order.mock'; 
import { Order } from '../../model/order';
import { EventHelperService } from 'src/app/service/event-helper.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  datasource: Array<Order> = orders;
  order:Order = new Order(1,"dummay","dummay",0,0,0);
  headers = Array<string>();
  filteredOrder= new Array<Order>();
  constructor(private evnt:EventHelperService) { }

  ngOnInit(): void {
    for(let o in this.order) {
      this.headers.push(o);
    }
    this.filteredOrder = this.datasource;
    this.evnt.customerChangeEvent.subscribe((data)=>{this.filterData(data)});
  }
  filterData(data:Array<number>): void{
    this.filteredOrder = this.datasource.filter((v,i)=>{
         return ( data.includes(v.CustomerId))
    })
   
  }
}
