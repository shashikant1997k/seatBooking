export class BookTicketResponseModel{
  public type: string;
  public seats: BusSeatInfoModel[];
}

export class BusSeatInfoModel {
  public userID: string;
  public seatNo: number;
  public status: string;
  public bookedBy: string;
  public row: number;
}
