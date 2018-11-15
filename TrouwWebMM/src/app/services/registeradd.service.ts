import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisteraddService {
  myRegister: RegisterItem[];
  private baseUrl = "https://trouwmmapi.azurewebsites.net/api/resterend"

  constructor(private http:HttpClient) {}

  getRegister() {
    return this.http.get<RegisterItem[]>("https://trouwmmapi.azurewebsites.net/api/resterend");

  }

  setUsers (items: RegisterItem[]){
    this.myRegister = items
  }

}

export interface RegisterItem{
  name: string 
  description: string ;
  price: string;
  quantity: string;
  imgUrl: string;
  sold: string;
}
