import { Component, OnInit } from '@angular/core';
import { mockResponse } from './booking-system-response';
import { BookTicketResponseModel, BusSeatInfoModel } from '../models/book-ticket.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  public bookingInfo: BookTicketResponseModel;
  public bookingForm: FormGroup;
  public availablseats: BusSeatInfoModel[] = [];
  public flag: boolean = true;
  public error: string;
  public res: any;

  public url = "https://reservation-ed548.firebaseio.com/booking.json";

  constructor(
    private fb: FormBuilder,
    public http: HttpClient
  ) {
    this.initateForm();
  }

  public ngOnInit(): void {
    this.bookingInfo = mockResponse;
    this.availablseats = this.getAvailablseats();
  }

  public onSubmit(formValues: FormGroup): void {
    let bookseats: BusSeatInfoModel[] = [];
    const userID: string = formValues.controls.userID.value;
    const userName: string = formValues.controls.name.value;
    const requiredSeats: number = parseInt(formValues.controls['count'].value);
    if (requiredSeats > this.availablseats.length) {
      this.error = "required seats not available";
    } else if (requiredSeats > 0) {
      this.availablseats.forEach(seat => {
        if (bookseats.length < requiredSeats) {
          if (bookseats.length === requiredSeats && requiredSeats > 1) {
            bookseats = this.chekIfSameRow(bookseats);
          } else {
            bookseats.push(seat);
          }
        }
      });

      if (bookseats.length !== 0) {
        this.bookSeat(bookseats, userName, userID);
      } else {
        this.bookSeat(this.getRandomSeats(requiredSeats), userName, userID);
      }

    }

  }

  public openBookingForm(): void {
    this.bookingForm.setValue({
      name: '',
      count: ''
    });
    this.flag = true;
    this.error = '';
  }

  getAvailablseats(): BusSeatInfoModel[] {
    let availablseats: BusSeatInfoModel[] = []
    this.bookingInfo.seats.forEach(seat => {
      if (seat.status === 'available') {
        availablseats.push(seat);
      }
    });
    return availablseats;
  }

  bookSeat(bookseats: BusSeatInfoModel[], name: string, userID: string) {
    bookseats.forEach(seat => {
      const index: number = this.bookingInfo.seats.findIndex(data => data.seatNo === seat.seatNo);
      this.bookingInfo.seats[index].status = "booked";
      this.bookingInfo.seats[index].bookedBy = name;
    });

    this.bookingInfo.seats.forEach((val, index) => {
      this.bookingInfo.seats[index].userID = userID;
    });

    this.http.post(this.url, this.bookingInfo.seats).subscribe((res) => {
      console.log("hihi")
    })

    this.availablseats = this.getAvailablseats();
    this.flag = false;
  }

  chekIfSameRow(bookseats: BusSeatInfoModel[]): BusSeatInfoModel[] {
    let row: number[] = [];
    bookseats.forEach(seat => {
      row.push(seat.row);
    })
    if (Array.from(new Set(row)).length === 1) {
      return bookseats;
    } else {
      const removeIndex = bookseats.splice(-1, 1);
      return removeIndex;
    }
  }

  getRandomSeats(count: number): BusSeatInfoModel[] {
    let randomSeats: BusSeatInfoModel[] = [];
    this.availablseats.forEach(seat => {
      if (randomSeats.length < count) {
        randomSeats.push(seat)
      }
    });
    return randomSeats;
  }

  initateForm(): void {
    this.bookingForm = this.fb.group({
      userID: [''],
      name: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

  // fetchAvailableSeat(){
  //   this.http.get(this.url).subscribe((res) => {
  //     return res;
  //   })
  // }

  showAllSeats(){
    // const allSeats = this.fetchAvailableSeat();
    // console.log(allSeats);
    this.availablseats = this.getAvailablseats();
    this.flag = false;
  }


}
