import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { checkoutCart} from '../register/register.component'
import { AddtocartService } from "../services/addtocart.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private firstName: string;
  private lastName: string;
  private email: string;
  private message: string;

  cartItems: any[] = [];
  itemNames: string;
  totalValue: number;
  constructor(private svcCart: AddtocartService, private http: HttpClient) { }

  ngOnInit() {
    this.cartItems = this.svcCart.getItems();
    this.TotalPrice(this.cartItems);
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

  GetItemNames(cartItems){
    for (let i = 0; i < cartItems.length; i++) {
      var localName: string = "";
      localName += cartItems[i].name + ',';
      this.itemNames = localName;
    }
  }

  public sendMessage(cartItems){
    console.log(cartItems[1].id)
  }

  public showData(cartItems){
    this.GetItemNames(cartItems);
    this.putItem(cartItems);
    this.postItem();
    alert("Naam: " + this.firstName + " AchterNaam: "+ this.lastName +" email: "+ this.email +" bericht: "+ this.message + " bedrag: "+this.totalValue + " spullen: "+ this.itemNames)
  }

  postItem(){
    this.http.post('https://trouwmmapi.azurewebsites.net/api/verkocht', {
      lastname: this.lastName,
      firstName: this.firstName,
      amount: this.totalValue,
      message: this.message,
      email: this.email,
      items: this.itemNames
    })
    .subscribe((data: any)=>{
    })
    //window.location.reload();
  }

  putItem(cartItems){
    for (let i = 0; i < cartItems.length; i++) {
    this.http.put(`https://trouwmmapi.azurewebsites.net/api/resterend/${cartItems[i].id}`, {
      name: this.cartItems[i].name,
      description: this.cartItems[i].description,
      price: this.cartItems[i].price,
      quantity: this.cartItems[i].quantity,
      sold: Number(this.cartItems[i].sold)+1,
      pictureUrl: this.cartItems[i].pictureUrl,
    })
    .subscribe((data: any)=>{
    })
  }
}

  //VALUE SETTING
  @Input()
  get FirstName() {
    return this.firstName;
  }

  get LastName() {
    return this.lastName;
  }

  get Email() {
    return this.email;
  }  
  
  get Message() {
    return this.message;
  }

  @Output() nameChange = new EventEmitter();  
  set FirstName(value: string) {
    this.firstName = value;
    this.nameChange.emit(this.firstName);
  }
  set LastName(value: string) {
    this.lastName = value;
    this.nameChange.emit(this.lastName);
  }
  set Email(value: string) {
    this.email = value;
    this.nameChange.emit(this.email);
  }    
  set Message(value: string) {
    this.message = value;
    this.nameChange.emit(this.message);
  }
}
