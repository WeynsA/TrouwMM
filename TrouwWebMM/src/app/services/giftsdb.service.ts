import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftsdbService {
 myGifts: Gift[];
  private baseUrl = "https://trouwmmapi.azurewebsites.net/api/resterend"

  constructor(private http:HttpClient) {}

  getGiftList() {
    return this.http.get<Gift[]>("https://trouwmmapi.azurewebsites.net/api/resterend/verkocht")
  }
  setUsers (gifts: Gift[]){
    this.myGifts = gifts
  }
}


export interface Gift{
  Name: string;
  Amount: string;
  FirstName: string;
  LastName: string;
  Message: string;
}