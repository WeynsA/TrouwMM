import { Component, OnInit } from '@angular/core';
import { checkoutCart} from '../register/register.component'
import { AddtocartService } from "../services/addtocart.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: any[] = [];
  totalValue: number;
  constructor(private svcCart: AddtocartService) { }

  ngOnInit() {
    this.cartItems = this.svcCart.getItems();
    this.TotalPrice(this.cartItems);
    console.log(this.cartItems);
  }

  TotalPrice(cartItems){
    this.totalValue = 0;
    if (cartItems && cartItems.length > 0){
      for(var i=0;i<cartItems.length;i++)
        {
        this.totalValue += cartItems[i].price;
        }
      }
  }
}
