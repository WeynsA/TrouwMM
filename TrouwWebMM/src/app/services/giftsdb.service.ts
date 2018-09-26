import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftsdbService {
 myGifts: Gift[];
  private baseUrl = "http://localhost:3000/api/verkocht"

  constructor(private http:HttpClient) {}

  getGiftList() {
    return this.http.get<Gift[]>("http://localhost:3000/api/register/verkocht")
  }
  setUsers (gifts: Gift[]){
    this.myGifts = gifts
  }
}


export interface Gift{
  gift: string;
  price: string;
  namePerson: string;
  emailPerson: string;
  messagePerson: string;
}