import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];

  constructor( private http: HttpClient) { 
    
    }

    getAllProduct(){
     return this.http.get('https://luman-developer-default-rtdb.europe-west1.firebasedatabase.app/shopping-cart.json')
    }


    getProducts(){
      return this.products
    }

    saveCart(){
      localStorage.setItem('cart_item', JSON.stringify(this.products))
    }

    addToCart(addedProduct: any){
      this.products.push(addedProduct);
      this.saveCart();
    }

    loadCart(){
      this.products = JSON.parse(localStorage.getItem('cart_item') as any || []);
    }

    productInCart(product){
      return this.products.findIndex((x: any) => x.id === product.id) > -1;
    }

    removeProduct(product: any){
      const index = this.products.findIndex((x: any) => x.id === product.id)

      if(index > -1){
        this.products.splice(index, 1);
        this.saveCart();
      }
    }

    clearProducts(){
      localStorage.clear();
    }
    
  }


  
    
  



  
