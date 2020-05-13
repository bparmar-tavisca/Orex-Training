import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product';
import { Logic } from '../../models/app.logic';
import { Categories } from '../../models/app.constants';
import { SorthelperService } from './service/sorthelper.service';
@Component({
  selector: 'app-product-component',
  templateUrl: './product.view.html'
})
export class ProductComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;

  constructor(private helper:SorthelperService) {
      this.product = new Product(0, '', 0, '');
      this.products = new Array<Product>();
      this.logic = new Logic();
      this.headers  =new Array<string>();
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
     this.products = this.logic.getProducts();
     // read product Scehma from Product class
     for(let p in this.product) {
       this.headers.push(p);
     }
     this.headers.push("Action");
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {
    this.products = this.logic.saveProducts(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product): void {
      this.product = Object.assign({}, p);
  }
  delete(prd:Product):void{
   let index = this.products.lastIndexOf(prd);
   this.products.splice(index,1);
  }

  sort(direction:string):void{
    if(direction == "sort"){
      this.products = this.helper.sort(this.products);
    }else if(direction == "reverse"){
      this.products = this.helper.reverse(this.products);
    }
  }

  search(input:string):void{
    if(input == ""){
      this.products = this.logic.getProducts();
    }
    else{
      this.products = this.products.filter((value,index)=>{ 
        if(value.ProductName.toLowerCase().search(input.toLowerCase())>=0 ){ return value;} })
    }
  }

  update():void{
    this.products = this.logic.updateProduct(this.product);
  }
}
