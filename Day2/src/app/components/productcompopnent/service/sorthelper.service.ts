import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/app.product';

@Injectable({
  providedIn: 'root'
})
export class SorthelperService {

  constructor() { }

  sort(list:Product[]):Product[]{
    return list.sort(this.productComparor);
  }

  reverse(list:Product[]):Product[]{
    return list.sort(this.productComparor).reverse();
  }
  productComparor(a:Product,b:Product):number{
    let retVal = 0;
     if(a.ProductName < b.ProductName)
      retVal = -1;
      if(a.ProductName == b.ProductName)
      retVal = 0;
      if(a.ProductName > b.ProductName)
      retVal = -1;
    return retVal;
  }
}
