const SUMMER_START: Date = new Date();
SUMMER_START.setDate(4);
const SUMMER_END: Date = new Date();
SUMMER_END.setDate(6);

export class Payment {
  constructor(
    private readonly date: Date,
    private readonly summerRate: number,
    private readonly winterRate: number,
    private readonly winterServiceCharge: number,
  ) {}

  calculatePaymentCost(quantity: number): number {
    let charge: number;
    if (this.date < SUMMER_START || this.date > SUMMER_END) {
      charge = quantity * this.winterRate * this.winterServiceCharge;
    } else {
      charge = quantity * this.summerRate;
    }

    return charge;
  }
}
