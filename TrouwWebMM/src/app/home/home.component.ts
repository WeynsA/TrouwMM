import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit {
  @ViewChild('headDiv') public headDiv:ElementRef;
  @ViewChild('kerkHuwelijk') public kerkHuwelijk:ElementRef;
  @ViewChild('receptie') public receptie:ElementRef;
  @ViewChild('avondfeest') public avondfeest:ElementRef;
  @ViewChild('dresscode') public dresscode:ElementRef;
  @ViewChild('RSVP') public RSVP:ElementRef;

  latAvondfeest: number = 51.172908;
  lngAvondfeest: number = 4.394189;
  latKerk: number = 51.220483;
  lngKerk: number = 4.401441;
  latReceptie: number = 51.216284;
  lngReceptie: number = 4.408268;


public moveToTop():void {
  this.headDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
public moveToKerkHuwelijk():void {
  this.kerkHuwelijk.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
  }
public moveToAvondfeest():void {
  this.avondfeest.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
}
public moveToDresscode():void{
  this.dresscode.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
}
public moveToReceptie():void{
  this.receptie.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
}
public moveToRSVP():void{
  this.RSVP.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
  
}

  constructor() { }

  ngOnInit() {
  }

  showLetter(){
    console.log("heyy");
  }

}
