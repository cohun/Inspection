export class Inspect {
  id: string;
  inspection: string;
  customer: string;
  date: string;
  newDate: string;

  constructor(id: string, inspection: string, customer: string, date: string, newDate: string) {
    this.id = id;
    this.inspection = inspection;
    this.customer = customer;
    this.date = date;
    this.newDate = newDate;
  }
}
