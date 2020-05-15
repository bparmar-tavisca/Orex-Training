import { Injectable } from '@angular/core';
import { Products } from '../mock/product.mock';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHelperService {

  private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }
  getProducts(): Array<Product> {
    return this.products;
  }

  saveProducts(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}
