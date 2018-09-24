import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../class/Items';

@Injectable({
  providedIn: 'root'
})
export class RegisteraddService {

  constructor(private http:HttpClient) {}

  // GetItems() : Observable<Item>{
    
  // }

  // GetShoppingCartItems() : Observable<

  // result: any;
  // public bedrag: number = 0;
  // public tussenkomst: number;
}

export interface Item{
  name: string 
  context: string ;
  imgUrl: string;
  price: number;
  quantity: number;
}
