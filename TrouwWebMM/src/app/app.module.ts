import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisteraddService} from "./services/registeradd.service";
import { HttpClientModule} from '@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component'


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent },  
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    CheckoutComponent,
    AdminpageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
