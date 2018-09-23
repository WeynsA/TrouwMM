import { Component, OnInit } from '@angular/core';
import { Item } from "../class/Items";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  result: any;
  public bedrag: number = 0;
  public tussenkomst: number;


  private name: string = "";
  private context: string = "";
  private imgUrl: string = "";
  private price: number = 0;
  private quantity: number = 0;
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  register = [
    new Item(1, 'Tequilla', 10, 'Doodgaan na Marathon', 200, false),
    new Item(2, 'Message', 1, 'Relaxen in een spa', 190, false),
  ];

  checkOutCart = [];
  // overbodig
  // public Remove(removeItem: any){
  //   if (this.bedrag > 0)
  //   this.bedrag -= removeItem.price;
  // }

  public Add(selectedItem: any) {
    this.bedrag += selectedItem.price;
    this.checkOutCart.push(new Item(selectedItem.quantity, selectedItem.name, selectedItem.quantity, selectedItem.context, selectedItem.price, false));    
  }

  public DeleteCartItem(Items: any){
    this.bedrag -= Items.price;
    this.checkOutCart.splice(Items, 1);
  }

  public CheckOut(eindBedrag: number){
    this.router.navigateByUrl('/checkout')
    console.log(eindBedrag)
  }

  public Post(){
    console.log(this.name, this.context, this.imgUrl, this.quantity, this.price)
    this.register.push(new Item(this.quantity, this.name, this.quantity, this.context, this.price, false));
    console.log(this.register)
  }

// VALUE SETTING
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
