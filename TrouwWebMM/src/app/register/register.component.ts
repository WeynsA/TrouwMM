import { Component, OnInit } from '@angular/core';
import { Item } from "../class/Items";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { RegisterItem, RegisteraddService } from "../services/registeradd.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  products: Item[];
  checkOutCart = [];

  selectedProduct : Subject<any> = new Subject;
  total: number = 0;
  
  result: any;
  public bedrag: number = 0;
  public tussenkomst: number;

  private id: number;
  private name: string = "";
  private description: string = "";
  private imgUrl: string = "";
  private price: number = 0;
  private quantity: number = 0;
  
  data: RegisterItem[];

  constructor(private router: Router, private svc: RegisteraddService, private http:HttpClient) {}

  ngOnInit() {
    this.GetFullRegister();
  }

  GetFullRegister = () => {
    this.svc.getRegister().subscribe(data => {this.data = data; console.log(data[0].name)}); 
  }

  putItem(){
    this.http.put('http://localhost:3000/api/register', {
      Id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      quantity: this.quantity
    })
    .subscribe((data: any)=>{
      console.log(data)
    })
  }

  TotalPrice(){
    this.total = 0;
      for(var i=0;i<this.checkOutCart.length;i++)
      {
      this.total += this.checkOutCart[i].price;
    }
  }

  public AddToCart(selectedItem: any) {
    this.checkOutCart.push(selectedItem);  
    this.TotalPrice();
  }

  public DeleteCartItem(selectedItem: number){
    const index: number = this.checkOutCart.indexOf(selectedItem)
    if (index !== -1)
      this.checkOutCart.splice(index,1);
    this.TotalPrice();}

  public CheckOut(eindBedrag: number, cart: any){
    eindBedrag = this.bedrag;
    cart = this.checkOutCart;

    this.router.navigateByUrl('/checkout')

    console.log(eindBedrag, cart)
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
  get Description() {
    return this.description;
  }
  set Description(value: string) {
    this.description = value;
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




  // public Post(){
  //   this.setId();
  //   console.log(this.name, this.description, this.imgUrl, this.quantity, this.price)
  //   this.products.push({id: this.setId(), 
  //     name: this.name, 
  //     quantity: this.quantity, 
  //     description: this.description, 
  //     price: this.price});
  //   console.log(this.products)
  // }