import { Component, OnInit } from '@angular/core';
import { mockResponse } from './booking-system-response';
import { BookSeatModel, SeatInfoModel } from '../models/book-seat.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {
  public bookingInfo: BookSeatModel;
  public bookingForm: FormGroup;
  public availablseats: SeatInfoModel[] = [];
  public flag: boolean = true;
  public error: string;
  public res: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.initateForm();
  }

  public ngOnInit() {
    this.bookingInfo = mockResponse;
    this.availablseats = this.getAvailablseats();
  }

  // submit name and no. of seats
  public onSubmit(formValues: FormGroup) {
    let bookseats: SeatInfoModel[] = [];
    let row: number[] = [];
    let rowNumber:any = {};
    const userName: string = formValues.controls.name.value;
    const requiredSeats: number = parseInt(formValues.controls['count'].value);
    if (requiredSeats > this.availablseats.length) {
      this.error = "required seats not available";
    } else if (requiredSeats > 0) {
      this.checkAllRows(userName, requiredSeats);
    }
  }

  public openBookingForm() {
    this.bookingForm.setValue({
      name: '',
      count: ''
    });
    this.flag = true;
    this.error = '';
  }

  getAvailablseats(): SeatInfoModel[] {
    let availablseats: SeatInfoModel[] = []
    this.bookingInfo.seats.forEach(seat => {
      if (seat.status === 'available') {
        availablseats.push(seat);
      }
    });
    return availablseats;
  }

  // check if no. of seat available in a single row
  private checkAllRows(name: string, count: number): void {
    let rowNum: SeatInfoModel[] = [];
    let row: number[] = [];
    let rowNumber:any = {};
    let arr: number[] = [];

    this.availablseats.forEach((seat, index) => {
      row.push(seat.row);
    });
console.log(rowNumber)
    row.forEach(function(i) { rowNumber[i] = (rowNumber[i]||0) + 1;});
    if(count <= 7){
      for (let key in rowNumber) {
        console.log(key, count)
        if(rowNumber[key] >= count){
          console.log("hihi")
          rowNum = this.checkRow(count, parseInt(key));
          if (rowNum.length != 0) {
            this.bookSeat(rowNum, name);
          } else {
            this.bookSeat(this.getRandomSeats(count), name);
          }
          break;
        } else if(Object.keys(rowNumber).length <= 2){
          this.bookSeat(this.getRandomSeats(count), name);
          break;
        }
      }
    } else {
      for (let key in rowNumber) {
        arr.push(rowNumber[key])
      }
      const closest = arr.reduce((a, b) => {
        return Math.abs(b - count) < Math.abs(a - count) ? b : a;
      });
      for (let key in rowNumber) {
        if(rowNumber[key] == closest){
          rowNum = this.checkRow(count, parseInt(key));
          if (rowNum.length != 0) {
            this.bookSeat(rowNum, name);
          } else {
            this.bookSeat(this.getRandomSeats(count), name);
          }
          break;
        } else if(Object.keys(rowNumber).length <= 2){
          this.bookSeat(this.getRandomSeats(count), name);
          break;
        }
      }
    }
  }

  bookSeat(bookseats: SeatInfoModel[], name: string) {
    bookseats.forEach(seat => {
      const index: number = this.bookingInfo.seats.findIndex(data => data.seatNo === seat.seatNo);
      this.bookingInfo.seats[index].status = "booked";
      this.bookingInfo.seats[index].bookedBy = name;
    });

    this.availablseats = this.getAvailablseats();
    this.flag = false;
  }

  private checkRow(count: number, row: number) {
    let bookseats: SeatInfoModel[] = [];

    this.availablseats.forEach((seat, index) => {
      if (bookseats.length < count) {
        if (seat.row == row) {
          bookseats.push(seat);
        }
        if (bookseats.length == count && count > 1) {
          bookseats = this.chekIfSameRow(bookseats);
        }
      }
    });
    console.log(bookseats)
    if (bookseats.length == count) {
      return bookseats;
    } else {
      return [];
    }
  }

  chekIfSameRow(bookseats: SeatInfoModel[]): SeatInfoModel[] {
    let row: number[] = [];
    let rowNumber: any = {};
    bookseats.forEach(seat => {
      row.push(seat.row);
    })

    if (Array.from(new Set(row)).length == 1) {
      return bookseats;
    } else {
      const removeIndex = bookseats.splice(-1, 1);
      return removeIndex;
    }
  }

  // If nearby seats is not available the book random seat
  getRandomSeats(count: number): SeatInfoModel[] {
    let randomSeats: SeatInfoModel[] = [];
    this.availablseats.forEach(seat => {
      if (randomSeats.length < count) {
        randomSeats.push(seat)
      }
    });
    return randomSeats;
  }

  initateForm() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

  showAllSeats(){
    this.availablseats = this.getAvailablseats();
    this.flag = false;
  }


}
