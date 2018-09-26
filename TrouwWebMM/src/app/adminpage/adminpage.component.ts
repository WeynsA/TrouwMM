import { Component, OnInit } from '@angular/core';
import { Gift, GiftsdbService } from "../services/giftsdb.service";

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  data : Gift[];



  constructor(private svc: GiftsdbService) {}

  ngOnInit() {
    this.GetFullGiftList();
  }
  GetFullGiftList = () => {
    this.svc.getGiftList().subscribe(data => {this.data = data; console.log(data)})
  }

}
