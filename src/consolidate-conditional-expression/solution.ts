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
    if (this.isNotSummer()) {
      charge = this.winterCharge(quantity);
    } else {
      charge = this.summerCharge(quantity);
    }

    return charge;
  }

  private isNotSummer(): boolean {
    return this.date < SUMMER_START || this.date > SUMMER_END;
  }

  private winterCharge(quantity: number): number {
    return quantity * this.winterRate * this.winterServiceCharge;
  }

  private summerCharge(quantity: number): number {
    return quantity * this.summerRate;
  }
}
