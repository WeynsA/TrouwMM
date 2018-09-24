import { Component, OnInit } from '@angular/core';
import { Item } from "../class/Items";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  products: Item[];
  upProducts: Item[] = [];
  selectedProduct : Subject<any> = new Subject;
  total: number = 0;
  
  result: any;
  public bedrag: number = 0;
  public tussenkomst: number;

  private id: number;
  private name: string = "";
  private context: string = "";
  private imgUrl: string = "";
  private price: number = 0;
  private quantity: number = 0;
  

  constructor(private router: Router) { 
    this.products = [
      {
        id: 1,
        name: 'Tequilla',
        quantity: 10,
        context: 'Trouw vergeten',
        price: 200
      },
      {
        id: 2,
        name: 'Ring',
        quantity: 4,
        context: 'Iets om te ringen',
        price: 4000
      },
      {
        id: 3,
        name: 'Toaster',
        quantity: 1,
        context: 'Iets om te toasten',
        price: 620
      },
      {
        id: 4,
        name: 'Auto',
        quantity: 2,
        context: 'Iets om te rijden',
        price: 92000
      },
      {
        id: 5,
        name: 'Broodmaker',
        quantity: 2,
        context: 'Iets om brood te maken',
        price: 495
      },
    ];
  }

  ngOnInit() {
  }
  
  // register = [
  //   new Item(1, 'Tequilla', 10, 'Trouw vergeten', 200),
  //   new Item(2, 'Message', 1, 'Relaxen in een spa', 190),
  // ];

  checkOutCart = [];
  // overbodig
  // public Remove(removeItem: any){
  //   if (this.bedrag > 0)
  //   this.bedrag -= removeItem.price;
  // }

  TotalPrice(){
    this.total = 0;
      for(var i=0;i<this.checkOutCart.length;i++)
      {
      this.total += this.checkOutCart[i].price;
    }
  }

  public AddToCart(selectedItem: any) {
    this.bedrag += selectedItem.price;
    this.checkOutCart.push(selectedItem);  
    this.TotalPrice();
  }

  public DeleteCartItem(selectedItem: any){
    this.bedrag -= selectedItem.price;
    // console.log(Items.price)
    this.checkOutCart.splice(selectedItem, 1);
    this.TotalPrice();
  }

  public CheckOut(eindBedrag: number, cart: any){
    eindBedrag = this.bedrag;
    cart = this.checkOutCart;

    this.router.navigateByUrl('/checkout')

    console.log(eindBedrag, cart)
  }

  public Post(){
    this.setId();
    console.log(this.name, this.context, this.imgUrl, this.quantity, this.price)
    this.products.push({id: this.setId(), 
      name: this.name, 
      quantity: this.quantity, 
      context: this.context, 
      price: this.price});
    console.log(this.products)
  }

// VALUE SETTING
  setId(){
    this.id = this.products.length + 1;
    return this.id
  }
  get Name() {
    return this.name;
  }
  set Name(value: string) {
    this.name = value;
  }
  get Price() {
    return this.price;
  }
  set Price(value: number) {
    this.price = value;
  }
  get Context() {
    return this.context;
  }
  set Context(value: string) {
    this.context = value;
  }
  get Quantity() {
    return this.quantity;
  }
  set Quantity(value: number) {
    this.quantity = value;
  }
  get ImgUrl() {
    return this.imgUrl;
  }
  set ImgUrl(value: string) {
    this.imgUrl = value;
  }
}
