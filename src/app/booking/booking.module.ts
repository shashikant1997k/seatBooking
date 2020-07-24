import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [BookSeatComponent],
  exports: [BookSeatComponent]
})
export class SeatBookingModule { }
