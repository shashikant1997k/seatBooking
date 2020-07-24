export class BookSeatModel{
  public type: string;
  public seats: SeatInfoModel[];
}

export class SeatInfoModel {
  public seatNo: number;
  public status: string;
  public bookedBy: string;
  public row: number;
}
