import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxPayPalModule
  ],
  exports:[
    ShoppingCartComponent,
    PaymentComponent,
    SuccessComponent

  ]
})
export class ShoppingCartModule { }
