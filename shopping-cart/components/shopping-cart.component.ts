import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  
  
  public page: number;
  products: any[] = [];
  productList!: any[]
  subTotal: any;


  constructor(
    public _productService: ProductService,
    private router: Router,
  ){}

  ngOnInit(){

    this._productService.getAllProduct().subscribe({
      next: (resp: any) =>{
        this.productList = resp;
      
      },
      error: (error )=> {
        alert(error)
      },
      complete: ()=> {
        console.log("Request Completed")
      }});

      this._productService.loadCart();
      this.products = [...this._productService.getProducts()];
    
  }

  addToCart( product: any ){
    if(!this._productService.productInCart(product)){
      product.quantity = 1;
      this._productService.addToCart(product);
      this.products = [...this._productService.getProducts()];
      this.subTotal = product.price;
    }
  }

  changeSubTotal(product:any, index: any){
    const qty = product.quantity;
    const amt = product.price;
    this.subTotal = amt * qty;
    this._productService.saveCart();
  }

  removeCart(product: any){
    this._productService.removeProduct(product);
    this.products = [...this._productService.getProducts()];
  }

  get total(){
    return this.products?.reduce((sum,product) => ({
      quantity: 1,
      price: sum.price + product.quantity * product.price,
    }),
    {quantity: 1, price: 0}
    ).price
  }

  checkout(){
    localStorage.setItem('cart_total', JSON.stringify(this.total));
    this.router.navigate(['/payment'])
  }

  

}
