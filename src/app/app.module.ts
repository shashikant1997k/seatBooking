import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SeatBookingModule } from './booking/booking.module';

import { AppComponent } from './app.component';
import { bootstrap } from 'bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SeatBookingModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
