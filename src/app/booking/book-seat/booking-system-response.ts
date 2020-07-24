import { BookSeatModel, SeatInfoModel } from '../models/book-seat.model';

export const mockResponse: BookSeatModel = {
	type: "booking",
	seats: [{
    seatNo: 1,
    status: "available",
    bookedBy: "",
    row: 1
  },
  {
  seatNo: 2,
  status: "available",
  bookedBy: "",
  row: 1
},
{
  seatNo: 3,
  status: "available",
  bookedBy: "",
  row: 1
},
{
  seatNo: 4,
  status: "booked",
  bookedBy: "rohan",
  row: 1
},
{
  seatNo: 5,
  status: "available",
  bookedBy: "",
  row: 1
},
{
  seatNo: 6,
  status: "available",
  bookedBy: "",
  row: 1
},
{
  seatNo: 7,
  status: "booked",
  bookedBy: "vinod",
  row: 1
},
{
  seatNo: 8,
  status: "available",
  bookedBy: "",
  row: 2
},
{
  seatNo: 9,
  status: "available",
  bookedBy: "",
  row: 2
},
{
  seatNo: 10,
  status: "available",
  bookedBy: "",
  row: 2
},


{
  seatNo: 11,
  status: "available",
  bookedBy: "",
  row: 2
},
{
  seatNo: 12,
  status: "available",
  bookedBy: "",
  row: 2
},
{
  seatNo: 13,
  status: "available",
  bookedBy: "",
  row: 2
},
{
  seatNo: 14,
  status: "available",
  bookedBy: "",
  row: 2
},
{
  seatNo: 15,
  status: "available",
  bookedBy: "",
  row: 3
},



{
  seatNo: 16,
  status: "available",
  bookedBy: "",
  row: 3
},
{
  seatNo: 17,
  status: "available",
  bookedBy: "",
  row: 3
},
{
  seatNo: 18,
  status: "available",
  bookedBy: "",
  row: 3
},
{
  seatNo: 19,
  status: "available",
  bookedBy: "",
  row: 3
},
{
  seatNo: 20,
  status: "available",
  bookedBy: "",
  row: 3
},

{
  seatNo: 21,
  status: "available",
  bookedBy: "",
  row: 3
},
{
  seatNo: 22,
  status: "available",
  bookedBy: "",
  row: 4
},
{
  seatNo: 23,
  status: "available",
  bookedBy: "",
  row: 4
},
{
  seatNo: 24,
  status: "available",
  bookedBy: "",
  row: 4
},
{
  seatNo: 25,
  status: "available",
  bookedBy: "",
  row: 4
},
{
seatNo: 26,
status: "booked",
bookedBy: "xyz",
row: 4
},
{
seatNo: 27,
status: "booked",
bookedBy: "xyz",
row: 4
},
{
seatNo: 28,
status: "available",
bookedBy: "",
row: 4
},
{
seatNo: 29,
status: "available",
bookedBy: "",
row: 5
},
{
seatNo: 30,
status: "available",
bookedBy: "",
row: 5
},
{
seatNo: 31,
status: "available",
bookedBy: "",
row: 5
},
{
seatNo: 32,
status: "available",
bookedBy: "",
row: 5
},
{
seatNo: 33,
status: "available",
bookedBy: "",
row: 5
},
{
seatNo: 34,
status: "available",
bookedBy: "",
row: 5
},
{
seatNo: 35,
status: "available",
bookedBy: "",
row: 5
},


{
seatNo: 36,
status: "available",
bookedBy: "",
row: 6
},
{
seatNo: 37,
status: "available",
bookedBy: "",
row: 6
},
{
seatNo: 38,
status: "available",
bookedBy: "",
row: 6
},
{
seatNo: 39,
status: "available",
bookedBy: "",
row: 6
},
{
seatNo: 40,
status: "available",
bookedBy: "",
row: 6
},

{
seatNo: 41,
status: "available",
bookedBy: "",
row: 6
},
{
seatNo: 42,
status: "available",
bookedBy: "",
row: 6
},
{
seatNo: 43,
status: "available",
bookedBy: "",
row: 7
},
{
seatNo: 44,
status: "available",
bookedBy: "",
row: 7
},
{
seatNo: 45,
status: "available",
bookedBy: "",
row: 7
},

{
seatNo: 46,
status: "available",
bookedBy: "",
row: 7
},
{
seatNo: 47,
status: "available",
bookedBy: "",
row: 7
},
{
seatNo: 48,
status: "available",
bookedBy: "",
row: 7
},
{
seatNo: 49,
status: "available",
bookedBy: "",
row: 7
},
{
seatNo: 50,
status: "available",
bookedBy: "",
row: 8
},
{
seatNo: 51,
status: "booked",
bookedBy: "sachin",
row: 8
},
{
seatNo: 52,
status: "booked",
bookedBy: "rahul",
row: 8
},
{
seatNo: 53,
status: "available",
bookedBy: "",
row: 8
},
{
seatNo: 54,
status: "available",
bookedBy: "",
row: 8
},
{
seatNo: 55,
status: "available",
bookedBy: "",
row: 8
},
{
seatNo: 56,
status: "available",
bookedBy: "vipin",
row: 8
},
{
seatNo: 57,
status: "available",
bookedBy: "",
row: 9
},
{
seatNo: 58,
status: "available",
bookedBy: "",
row: 9
},
{
seatNo: 59,
status: "available",
bookedBy: "",
row: 9
},
{
seatNo: 60,
status: "available",
bookedBy: "",
row: 9
},


{
seatNo: 61,
status: "available",
bookedBy: "",
row: 9
},
{
seatNo: 62,
status: "available",
bookedBy: "",
row: 9
},
{
seatNo: 63,
status: "available",
bookedBy: "",
row: 9
},
{
seatNo: 64,
status: "available",
bookedBy: "",
row: 10
},
{
seatNo: 65,
status: "available",
bookedBy: "",
row: 10
},



{
seatNo: 66,
status: "available",
bookedBy: "",
row: 10
},
{
seatNo: 67,
status: "available",
bookedBy: "",
row: 10
},
{
seatNo: 68,
status: "available",
bookedBy: "",
row: 10
},
{
seatNo: 69,
status: "available",
bookedBy: "",
row: 10
},
{
seatNo: 70,
status: "available",
bookedBy: "",
row: 10
},

{
seatNo: 71,
status: "available",
bookedBy: "",
row: 11
},
{
seatNo: 72,
status: "available",
bookedBy: "",
row: 11
},
{
seatNo: 73,
status: "available",
bookedBy: "",
row: 11
},
{
seatNo: 74,
status: "available",
bookedBy: "",
row: 11
},
{
seatNo: 75,
status: "available",
bookedBy: "",
row: 11
},
{
  seatNo: 76,
  status: "available",
  bookedBy: "",
  row: 11
  },
  {
  seatNo: 77,
  status: "available",
  bookedBy: "",
  row: 11
  },
  {
  seatNo: 78,
  status: "available",
  bookedBy: "",
  row: 12
  },
  {
  seatNo: 79,
  status: "available",
  bookedBy: "",
  row: 12
  },
  {
  seatNo: 80,
  status: "available",
  bookedBy: "",
  row: 12
  }

]
};
