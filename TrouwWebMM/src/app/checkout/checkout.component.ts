import { Component, OnInit } from '@angular/core';
import { checkoutCart} from '../register/register.component'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getItemsInCart(eindbedrag:number){
    console.log(eindbedrag)
  }

  sendMessage(){
    console.log("hey")
  }
}
