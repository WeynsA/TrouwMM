import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  checkOutCart: any[];
  totalValue: number;

  constructor() { }

  adding(checkOutCart, totalValue){
    this.checkOutCart = checkOutCart;
    this.totalValue= totalValue;
  }

  getItems(){
    return this.checkOutCart;
  }

  getTotalValue(){
    return this.totalValue;
  }
}
