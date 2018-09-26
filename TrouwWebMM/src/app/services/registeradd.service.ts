import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisteraddService {
  myRegister: RegisterItem[];
  private baseUrl = "http://localhost:3000/api/register"

  constructor(private http:HttpClient) {}

  getRegister() {
    return this.http.get<RegisterItem[]>("http://localhost:3000/api/register/resterend")
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
}
